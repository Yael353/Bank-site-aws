import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div
        className="w-1/2 max-w-lg p-6 bg-orange-100 rounded-lg shadow-lg"
        // action="/submit-form"
        // method="post"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Logga in</h2>
        <div className="mb-4">
          <label htmlFor="userName" className="block mb-2">
            Användarnamn
          </label>
          <input
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
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            type="password"
            placeholder="Skriv in ditt lösenord"
          />
        </div>

        <button className="w-full bg-orange-800 py-2 px-4 rounded-lg text-white font-bold text-center">
          Logga in
        </button>
      </div>
    </div>
  );
}
