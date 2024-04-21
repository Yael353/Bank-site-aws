import React from "react";

export default function page() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Kontosida</h1>
      <p className="mb-4">
        Här kan du se ditt saldo och sätta in pengar på ditt konto.
      </p>

      <div className="flex mb-4">
        <p className="mr-4">Saldo: {balance} kr</p>
      </div>

      <div className="mb-4">
        <input
          type="number"
          value={depositAmount}
          // onChange={(e) => setDepositAmount(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
          placeholder="Belopp att sätta in"
        />
        <input
          type="text"
          // value={otp}
          // onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
          placeholder="Engångslösenord"
        />
        <button
          // onClick={handleDeposit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Sätt in pengar
        </button>
      </div>
    </div>
  );
}
