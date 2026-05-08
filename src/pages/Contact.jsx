import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
        This is contact page.. <span className="text-blue-600">Thinkers</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        YoungChanakyas provides world-class mentorship and curriculum designed to build leadership, strategic thinking, and core technical skills.
      </p>
      <div className="flex gap-4">
        <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Join a Cohort
        </Link>
        <Link to="/about" className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:border-gray-300 transition">
          Learn More
        </Link>
      </div>
    </div>
  );
}