import "./Contract.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <p>GET IN TOUCH</p>

        <h2>
          Let's Build Something
          <span> Great</span>
        </h2>

        <div className="heading-line"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>
            Have a project in mind?
          </h3>

          <p>
            I'm always interested in hearing
            about new projects, creative ideas
            and opportunities.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                @
              </div>

              <div>
                <span>Email</span>
                <strong>
                sjsharin07@gmail.com
                </strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  +91 8940621702
                </strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                ◎
              </div>

              <div>
                <span>Location</span>
                <strong>
                Pondicherry<br></br>
                  India
                </strong>
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;