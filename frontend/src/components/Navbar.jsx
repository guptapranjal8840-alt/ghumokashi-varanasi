import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyApp</div>
                <div className="hidden md:flex space-x-4">
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/">Home</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/about">About</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/services">Services</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/contact">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>
            <div className="md:hidden">
                <div className="flex flex-col space-y-1 mt-2">
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/">Home</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/about">About</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/services">Services</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;