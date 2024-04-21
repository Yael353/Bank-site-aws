"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function createUser() {
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div
        className="w-1/2 max-w-lg p-6 bg-orange-100 rounded-lg shadow-lg"
        // action="/login"
        // method="post"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Bli en av tusentals nöjda kunder hos oss
        </h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Användarnamn
          </label>
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            id="userName"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Skriv in ditt användarnamn"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Lösenord
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            type="password"
            placeholder="Skriv in ditt lösenord"
          />
        </div>

        <button
          onClick={createUser}
          className="w-full bg-orange-800 py-2 px-4 rounded-lg text-white font-bold text-center"
        >
          Skapa konto
        </button>
      </div>
    </div>
  );
}
