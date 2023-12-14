// src/components/Header.jsx

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <img src="../../public/logo.png" alt="Logo" className="w-40" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
