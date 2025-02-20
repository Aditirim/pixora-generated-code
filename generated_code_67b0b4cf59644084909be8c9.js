import React, { useState } from 'react';
import { ChevronDown, Search, Bell, Menu, X, MapPin, Calendar, User  } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-blue-600 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 z-50`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        <button onClick={toggleSidebar} className="lg:hidden text-white">
          <X />
        </button>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
             <a href="#" className="flex items-center text-white hover:bg-blue-700 p-2 rounded-md">
              <MapPin className="mr-2" />
              <span>My Places</span>
            </a>
          </li>
            
          <li className="mb-2">
            <a href="#" className="flex items-center text-white hover:bg-blue-700 p-2 rounded-md">
              <Calendar className="mr-2" />
              <span>Bookings</span>
            </a>
            </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-white hover:bg-blue-700 p-2 rounded-md">
             <User className="mr-2" />
              <span>Profile</span>
            </a>
            </li>
        </ul>
      </nav>
    </div>
  );
};

const Card = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex items-center justify-between">
          <button onClick={toggleSidebar} className="lg:hidden text-gray-700">
              <Menu />
            </button>
            <div className="relative w-full lg:w-1/2 mr-4">
                <input
                  type="text"
                  placeholder="Search Places"
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>            
            <div className="flex items-center space-x-4">
              <Bell className="text-gray-600" />
              <img
                src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-gray-800">John Doe</span>
              <ChevronDown className="text-gray-600" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">My Places</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                title="Beach Resort"
                subtitle="Goa"
                imageUrl="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                />
                <Card
                title="Mountain Cabin"
                subtitle="Himachal Pradesh"
                imageUrl="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                />
                <Card
                title="City Apartment"
                subtitle="Mumbai"
                imageUrl="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;