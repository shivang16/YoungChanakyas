import { Outlet, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="bg-amber-500 text-white px-2 py-1 rounded-md">YC</span>
              YoungChanakyas
            </Link>
            
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.slice(0, 4).map((item) => (
                <Link key={item.name} to={item.path} className="font-medium text-slate-600 hover:text-amber-600 transition-colors">
                  {item.name}
                </Link>
              ))}
              <Link to="/register" className="bg-amber-500 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-sm">
                Register
              </Link>
            </div>

            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-amber-100 bg-white pb-4 shadow-lg absolute w-full">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 font-medium text-slate-600 hover:bg-amber-50 hover:text-amber-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-8 text-center mt-auto border-t-4 border-amber-500">
        <p>&copy; {new Date().getFullYear()} YoungChanakyas. All rights reserved.</p>
      </footer>
    </div>
  );
}