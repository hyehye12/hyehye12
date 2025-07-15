export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 text-white bg-gray-800">
      <div className="text-3xl">MySite</div>
      <div>
        <a href="#" className="m-2 hover:text-gray-300">
          Home
        </a>
        <a href="#" className="m-2 hover:text-gray-300">
          About
        </a>
        <a href="#" className="m-2 hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
