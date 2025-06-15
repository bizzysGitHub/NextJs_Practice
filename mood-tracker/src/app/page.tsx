/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';


import { getAuth, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);
  // const [authed, setAuthed] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthed(true);
  //       router.push('/dashboard'); // or whatever your main route is
  //     } else {
  //       setAuthed(false);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  const params = useSearchParams();
  // const mode = params.get('mode') === 'signup' ? 'signup' : 'login';



  // if (loading) return <p className="text-center mt-10">Checking auth...</p>;

  return (
    //  <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 text-center px-4">
    //      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-gray-800">Welcome</h1>

    //      <div className="flex gap-10">
    //        {/* Login */}
    //        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
    //          <div className="text-7xl">😊</div>
    //          <Link href="/login" className="mt-4 text-xl font-medium text-blue-700"> Login</Link>
    //        </div>

    //        {/* Sign Up */}
    //        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
    //          <div className="text-7xl">😄</div>
    //          <p className="mt-4 text-xl font-medium text-green-700">Sign Up</p>
    //        </div>
    //      </div>
    //    </main>
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
      <h1 className="text-4xl font-bold mb-10">Welcome</h1>

      <div className="flex gap-12">
        {/* Login Option */}
        <Link href={`/auth?mode=login`}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
        >
          <div className="text-7xl">😊</div>
          <p className="mt-4 text-xl font-medium text-blue-700">Login</p>
        </Link>

        {/* Sign Up Option */}
        <Link
          href={`/auth?mode=signup`}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
        >
          <div className="text-7xl">😄</div>
          <p className="mt-4 text-xl font-medium text-green-700">Sign Up</p>
        </Link>
      </div>
    </main>
  );
}
