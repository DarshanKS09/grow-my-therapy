export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-xl font-semibold text-gray-900">
          Lilac Template
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>

      </div>
    </header>
  );
}