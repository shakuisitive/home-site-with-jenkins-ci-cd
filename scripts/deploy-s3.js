#!/usr/bin/env node
/*
Uploads the local dist/ directory to an S3 bucket using AWS SDK v3.
Requires env vars:
  - AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
  - AWS_REGION (e.g., eu-north-1)
  - BUCKET_NAME (e.g., jenkins-react-shakuisitive)
*/

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

const region = process.env.AWS_REGION;
const bucket = process.env.BUCKET_NAME;

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  console.error("Missing AWS credentials in environment");
  process.exit(1);
}

if (!region) {
  console.error("Missing AWS_REGION in environment");
  process.exit(1);
}

if (!bucket) {
  console.error("Missing BUCKET_NAME in environment");
  process.exit(1);
}

const distDir = path.resolve(process.cwd(), "dist");
if (!fs.existsSync(distDir) || !fs.statSync(distDir).isDirectory()) {
  console.error(`dist directory not found at ${distDir}`);
  process.exit(1);
}

const s3 = new S3Client({ region });

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

function walkFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(full));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

async function uploadFile(localPath) {
  const key = path.relative(distDir, localPath).replace(/\\/g, "/");
  const body = fs.readFileSync(localPath);
  const ContentType = getContentType(localPath);
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType,
  });
  await s3.send(command);
  console.log(`Uploaded s3://${bucket}/${key}`);
}

(async () => {
  try {
    const files = walkFiles(distDir);
    for (const file of files) {
      await uploadFile(file);
    }
    console.log("Upload complete");
  } catch (err) {
    console.error("Upload failed:", err);
    process.exit(1);
  }
})();
