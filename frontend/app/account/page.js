"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [saldo, setSaldo] = useState(0);
  const [amount, setAmount] = useState("");

  async function fetchSaldo() {
    try {
      const token = sessionStorage.getItem("token");
      console.log("Fetching saldo...");
      const response = await fetch("http://localhost:4000/me/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      console.log("Fetched saldo:", data.saldo);
      if (response.ok) {
        setSaldo(data.saldo);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchSaldo();
  }, []);

  async function handleDepositMoney(event) {
    event.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      console.log("Depositing money...");
      const response = await fetch(
        "http://localhost:4000/me/accounts/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, amount: parseInt(amount) }),
        }
      );
      const data = await response.json();
      console.log("Deposit response:", data);
      if (response.ok) {
        setSaldo(data.newBalance);
        setAmount("");
        console.log(
          "Money deposited successfully. New balance:",
          data.newBalance
        );
      } else {
        console.error("Error:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log("Current saldo:", saldo);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Kontosida</h1>
      <p className="mb-4">
        Här kan du se ditt saldo och sätta in pengar på ditt konto.
      </p>

      <div className="flex mb-4">
        <p className="mr-4 font-semibold">Saldo: {saldo} kr</p>
      </div>

      <form onSubmit={handleDepositMoney}>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Belopp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-800 text-white mt-2 px-4 py-2 rounded-lg hover:bg-orange-900"
        >
          Sätt in pengar
        </button>
      </form>
    </div>
  );
}
