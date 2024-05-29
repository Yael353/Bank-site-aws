import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Generera engångslösenord
function generateOTP() {
  // Generera en sexsiffrig numerisk OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

// Din kod här. Skriv dina arrayer

let users = [];
let accounts = [];
let sessions = [];

// Din kod här. Skriv dina routes:
app.post("/users", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Alla fält måste fyllas i" });
  }
  const id = users.length + 1;
  users.push({ id, username, password });
  accounts.push({ id, userId: id, balance: 0 });
  console.log("in users array:", users);
  res
    .status(200)
    .json({ message: "Användare skapad!", user: { id, username } });
});

//sessions
app.post("/sessions", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.status(401).json({
      message: "Kontrollera att användarnamn och lösenord är korrekta.",
    });
  } else {
    const token = generateOTP();
    sessions.push({ userId: user.id, token });
    res.status(200).json({ userId: user.id, token });
  }
});

// saldo
app.post("/me/accounts", (req, res) => {
  const { token } = req.body;
  const session = sessions.find((session) => session.token === token);
  if (!session) {
    res.status(401).json({ message: "Ogiltig session" });
  } else {
    const account = accounts.find(
      (account) => account.userId === session.userId
    );
    const saldo = account ? account.amount : 0;
    res.status(200).json({ saldo: saldo });
  }
});

// Insättning
app.post("/me/accounts/transactions", (req, res) => {
  const { token, amount } = req.body;
  const session = sessions.find((session) => session.token === token);
  if (!session) {
    res.status(401).json({ message: "Ogiltig session" });
  } else {
    const account = accounts.find(
      (account) => account.userId === session.userId
    );

    if (account.amount === null || account.amount === undefined) {
      account.amount = 0;
    }

    account.amount += amount;
    res
      .status(200)
      .json({ message: "Pengar insatta!", newBalance: account.amount });
  }
});

// Starta servern
app.listen(port, () => {
  console.log(`Bankens backend körs på http://localhost:${port}`);
});
