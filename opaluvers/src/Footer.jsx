// import React from 'react';
import footerImage from './assets/Construction hat (1).gif'; // Replace with your image path

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#228B22', color: '#D3D3D3' }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <img src={footerImage} className="img-fluid" alt="Footer Image" />
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@yourwebsite.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Your Street, City, Country</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" style={{ color: '#D3D3D3' }}>About Us</a></li>
              <li><a href="/services" style={{ color: '#D3D3D3' }}>Services</a></li>
              <li><a href="/portfolio" style={{ color: '#D3D3D3' }}>Portfolio</a></li>
              <li><a href="/contact" style={{ color: '#D3D3D3' }}>Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3"><a href="https://facebook.com" style={{ color: '#D3D3D3' }}><i className="fab fa-facebook"></i></a></li>
              <li className="me-3"><a href="https://twitter.com" style={{ color: '#D3D3D3' }}><i className="fab fa-twitter"></i></a></li>
              <li className="me-3"><a href="https://instagram.com" style={{ color: '#D3D3D3' }}><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com" style={{ color: '#D3D3D3' }}><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
