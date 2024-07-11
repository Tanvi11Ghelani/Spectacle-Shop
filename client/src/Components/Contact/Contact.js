import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-sidebar">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-content">
        <div className="contact-section">
          <div className="Contact-Name">
            <strong>Contact Us</strong>
          </div>

          <h3 className="Info-h3">Customer Service</h3>
          <br />
          <p className="Info-p">
            If you have general questions or concerns about Spectacles, please
            contact our Customer Contact Center customerservice.FocusFrame.com.
          </p>
        </div>

        <div className="contact-section">
          <h3 className="Info-h3">Media Contacts</h3>
          <br />
          <p className="Info-p">
            Please email your detailed inquiry and deadline for response to the
            following: Global:
            <br />
            <br /> Phone: 591 424 2400
            <br />
            <br />
            Email: Focus-Frame@gmail.com <br />
            <br />
            For inquiries related to Asia or Canada please visit their
            respective Focus-Frame Stories & News site Europe, Middle East and
            Africa <br />
            <br />
            Phone: +44 20 4707 9827 <br />
            <br />
            Email: Focus-Frame@.com
          </p>
          <br />
          <h3>Follow Us:</h3>
          <div className="Info-media">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/">
                  <i class="fa-brands fa-spotify"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-section">
          <h3 className="Info-h3">Investor Relations</h3>
          <br />
          <p className="Info-p">
            For inquiries related to stock ownership please submit a written
            inquiry through
            <br /> email to investorrelations@foscusframe.com.
          </p>
        </div>

        <div className="contact-section">
          <h3 className="Info-h3">Partnership and Sponsorship Requests</h3>
          <br />
          <p className="Info-p">
            If you have an exciting partnership or sponsorship you’d like us to
            consider,
            <br /> please send a detailed overview of the opportunity and your
            information to
            <br /> partnerships@Focus-Frame.com.
          </p>
        </div>
      </div>
    </div>
  );
}
