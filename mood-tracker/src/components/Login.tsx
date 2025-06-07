'use client'
import { loginSequence } from '@/lib/firebaseClient'
import {useState } from 'react'

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =  async () => {
        console.log("hey im working")

        await loginSequence(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
                <h2 className="text-xl font-semibold text-center">Login</h2>
            <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder='You know what goes here'
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
            </div>
            <button type="submit" className="focus:outline-none text-white bg-pink-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Click me for a party I guess</button>
        </form>
    )
}
