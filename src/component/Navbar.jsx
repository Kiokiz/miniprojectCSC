import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-row space-x-4 bg-blue-500 p-2">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <Link href={'/'}>Home</Link>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <Link href={'/profil'}>Profile saya</Link>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <Link href={'/profil2'}>Profile bukan saya</Link>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <Link href={'/garage'}>My Garage</Link>
            </div>
        </nav>
    );
}
