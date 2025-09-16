import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>HomeRenovate Pro</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home - cloudclass</a>
            </li>
            <li>
              <a href="#services">back to working! - Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Your Home Into Your Dream Space!</h1>
            <p>
              Professional home renovation services that bring your vision to
              life. From kitchen remodels to complete home makeovers, we deliver
              exceptional results.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Free Quote</button>
              <button className="btn-secondary">View Our Work</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <span>🏠 Beautiful Home Renovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔨</div>
              <h3>Kitchen Renovation</h3>
              <p>
                Complete kitchen makeovers with modern designs, custom cabinets,
                and premium appliances.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛁</div>
              <h3>Bathroom Remodeling</h3>
              <p>
                Transform your bathroom into a spa-like retreat with luxury
                fixtures and elegant finishes.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏡</div>
              <h3>Whole Home Renovation</h3>
              <p>
                Complete home transformations from foundation to finishing
                touches.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Interior Design</h3>
              <p>
                Professional interior design services to create cohesive and
                beautiful living spaces.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Home Repairs</h3>
              <p>Expert repair services for all your home maintenance needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Outdoor Living</h3>
              <p>
                Create stunning outdoor spaces with decks, patios, and
                landscaping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About HomeRenovate Pro</h2>
              <p>
                With over 15 years of experience in home renovation, we've
                transformed hundreds of homes across the region. Our team of
                skilled craftsmen and designers work together to deliver
                exceptional results that exceed our clients' expectations.
              </p>
              <p>
                We pride ourselves on quality workmanship, attention to detail,
                and transparent communication throughout every project. From
                initial consultation to final walkthrough, we're committed to
                making your renovation experience smooth and stress-free.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <span>👷‍♂️ Professional Team at Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to Start Your Project?</h3>
              <p>
                Contact us today for a free consultation and quote. We're here
                to help bring your home renovation dreams to life.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>info@homerenovatepro.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>
                      123 Renovation Street
                      <br />
                      Your City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="bathroom">Bathroom Remodeling</option>
                    <option value="whole-home">Whole Home Renovation</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="repairs">Home Repairs</option>
                    <option value="outdoor">Outdoor Living</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Tell us about your project..."
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>HomeRenovate Pro</h3>
              <p>Transforming homes, creating dreams.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Kitchen Renovation</a>
                </li>
                <li>
                  <a href="#services">Bathroom Remodeling</a>
                </li>
                <li>
                  <a href="#services">Whole Home Renovation</a>
                </li>
                <li>
                  <a href="#services">Interior Design</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@homerenovatepro.com</p>
              <p>📍 123 Renovation Street</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 HomeRenovate Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
