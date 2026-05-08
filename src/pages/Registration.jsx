import { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Standard Cohort',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Future Extension - Replace this with an API call (e.g., fetch('/api/register', ...))
    
    // Current Static Implementation: Email Forwarding
    const subject = encodeURIComponent(`YoungChanakyas Enquiry: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProgram: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:admissions@youngchanakyas.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Register Your Interest</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            required 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            required 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
          <select 
            name="interest" 
            value={formData.interest} 
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option>Standard Cohort</option>
            <option>Advanced Leadership</option>
            <option>1-on-1 Mentorship</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
          <textarea 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">
          Send Enquiry
        </button>
      </form>
    </div>
  );
}