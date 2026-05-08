import { Outlet, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Register / Contact', path: '/register' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-bold text-blue-800">
              YoungChanakyas
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="hover:text-blue-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t pb-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page Content injected here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-8 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} YoungChanakyas. All rights reserved.</p>
      </footer>
    </div>
  );
}