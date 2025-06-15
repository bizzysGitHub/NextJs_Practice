/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { signInSequence, loginSequence } from "@/lib/firebaseClient";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userInfo, setUserInfo] = useState<string | null>(null);
    const params = useSearchParams();
    const mode = params.get('mode') === 'signup' ? 'signup' : 'login';



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = await (mode === 'login' ? loginSequence(email, password) : signInSequence(email, password)) ?? null;
        setUserInfo(user);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E5E4E2] via-[#D1D7D7] to-[#7851A9] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-center text-[#00073F] mb-6">{mode === 'login' ? 'Login': 'Sign Up'}✨</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-[#00073F] mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7851A9] bg-white/80 
                            "
                            // placeholder="youremail@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#00073F] mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7851A9] bg-white "
                            // placeholder="password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#7851A9] hover:bg-[#5e3e90] text-white font-semibold py-2.5 rounded-xl shadow-md transition duration-200"
                    >
                        {mode === 'login' ? 'Log In': 'Sign Up'}
                    </button>
                </form>
                {/* <p className="text-center text-xs text-[#00073F]/70 mt-6">
                    Don’t have an account? <a href="/signup" className="underline hover:text-[#00073F]">Sign up here</a>
                </p> */}
            </div>
        </div>
    );
};
