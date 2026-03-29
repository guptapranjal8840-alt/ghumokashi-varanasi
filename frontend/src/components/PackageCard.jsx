import React from 'react';

const PackageCard = ({ title, image, description, price, rating }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-yellow-500 text-sm mt-1">⭐ {rating}/5</p>
                <p className="text-gray-600 mt-2 text-sm">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">₹{price}</span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;