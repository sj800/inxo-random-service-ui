// Menu.jsx
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-[#1a1a1a] w-full sm:w-64 p-6 text-white">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-green-400">Random Number Pulse</Link>
        </li>
        <li>
          <Link to="/random-ball" className="hover:text-green-400">Random Number Ball</Link>
        </li>
        <li>
          <Link to="/stats" className="hover:text-green-400">Stats</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-400">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
