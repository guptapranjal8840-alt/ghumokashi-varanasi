import React from 'react';
import './Home.css'; // Optional CSS file for additional styles

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Ghumokashi</h1>
        <p className="mt-4 text-lg">Explore the beauty of Varanasi with our curated packages.</p>
        <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-full">Browse Packages</button>
      </section>

      {/* Featured Packages Section */}
      <section className="featured-packages my-20">
        <h2 className="text-3xl font-semibold text-center">Featured Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Sample Package */}
          <div className="package bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-xl">Varanasi City Tour</h3>
            <p className="mt-2">Experience the spiritual heart of India.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
          <div className="package bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-xl">Ganges River Cruise</h3>
            <p className="mt-2">Sail down the holy river with us.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
          <div className="package bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-xl">Cultural Evening Tour</h3>
            <p className="mt-2">Immerse yourself in the local culture.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us my-20 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-4">
          <li>✅ Expert local guides</li>
          <li>✅ Customizable packages</li>
          <li>✅ Affordable prices</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;