'use client'
import Image from "next/image";
import Link from "next/link";
import Page from "@/app/garage/page";

export default function Home() {
  function greetuser() {
    alert('Absensi selesai')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold'}}>SadamGaragev2</h1>
      <Link href={'/profil'}>
        <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">profil saya</button>
      </Link>

        <Link href={'/profil2'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">profil bukan saya</button>
        </Link>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={greetuser}>
        Absen guys
      </button>
    </main>
  );
}
