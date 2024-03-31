// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li>About</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Products</h2>
            <ul>
              <li>Streaming</li>
              <li>Download</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Legal</h2>
            <ul>
              <li>Privacy</li>
              <li>Legal Notices</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Help</h2>
            <ul>
              <li>Support</li>
              <li>Help Center</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
