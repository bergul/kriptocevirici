import React from 'react';

function Header() {
    return (
        <header className="w-full py-6 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white text-center text-lg md:text-2xl font-semibold shadow-lg rounded-b-lg fixed top-0 left-0 z-50">
            <h1 className="font-extrabold">Kripto Çevirici</h1>
            <p className="text-sm text-black mt-2">Kolay ve hızlı kripto para dönüşümü</p>
        </header>
    );
}

export default Header;
