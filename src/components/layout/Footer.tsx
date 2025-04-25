import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-dark-800/50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Vault View. All rights reserved.
          </div>
          
          <div className="flex gap-4 text-dark-400">
            <a 
              href="#" 
              className="hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;