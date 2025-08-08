 import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-center pt-2 py-2 text-sm text-gray-600 border-gray-200 border-t">
      <p>
        Made in {year} with ❤️ by <a href="https://krapter.com" className="text-blue-500">Krapter</a>
      </p>
    </footer>
  );
};

export default Footer;
 