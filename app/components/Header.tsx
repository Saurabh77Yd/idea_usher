import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          My<span className="text-gray-800">Blog</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link
            href="/"
            className="relative group transition-colors hover:text-blue-600"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="relative group transition-colors hover:text-blue-600 text-gray-700" 
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
