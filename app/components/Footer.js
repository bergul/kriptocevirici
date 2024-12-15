'use client'

import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col md:flex-row items-center justify-evenly w-full px-4 py-2 bg-gray-600 text-white">
            <div className="text-sm md:text-base text-center md:text-left" style={{ marginTop: '5px' }}>
                © {year} - Özer Örde
            </div>
            <div className="mt-2 md:mt-0 flex space-x-4">
                <Link href="https://github.com/ozer-orde" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white hover:text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.621.069-.608.069-.608 1.004.07 1.533 1.031 1.533 1.031.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.935 0-1.09.39-1.982 1.029-2.681-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.562 9.562 0 0112 6.845c.852.004 1.71.115 2.51.338 1.91-1.294 2.75-1.025 2.75-1.025.545 1.377.201 2.394.099 2.647.64.699 1.029 1.591 1.029 2.681 0 3.835-2.338 4.677-4.565 4.926.36.31.678.92.678 1.852 0 1.338-.012 2.42-.012 2.748 0 .267.18.577.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>

                <Link href="https://medium.com/@ozerorde" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        fill="currentColor"
                        className="w-6 h-6 text-white hover:text-gray-400"
                    >
                        <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
                    </svg>
                </Link>
            </div>
        </footer >
    );
}
