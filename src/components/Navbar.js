import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <nav
            className={`navbar bg-${props.mode} text-${props.mode==='light'?'dark':'light'} navbar-${props.mode} px-5 py-3 flex justify-between items-center border-b-2 border-gray-600 mb-10`}
        >
            <div className="text-2xl font-bold">{props.title}</div>
            <div className="flex items-center gap-4">
                {/* Home Button */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-700 transition">
                    Home
                </button>
                {/* About Button */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                    About
                </button>
                {/* Search Section */}
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 text-black border border-gray-300 rounded focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
                        Search
                    </button>
                    <div>
                    <label className={`inline-flex items-center cursor-pointer text-${props.mode==='light'?'dark':'light'}`}>
                        <input onClick={props.toggleMode} type="checkbox" value="" className="sr-only peer" checked/>
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium ">Enable Dark Mode</span>
                    </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
};
