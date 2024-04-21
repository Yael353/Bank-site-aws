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

const users = [];
const accounts = [];
const sessions = [];

// Din kod här. Skriv dina routes:
app.post("/users", (req, res) => {
  const data = req.body;
  const id = users.length + 1;
  users.push(data);
  accounts.push({ id, userId: id, amount: 0 });
  console.log("in users array:", users);

  res.send("post data recived: " + JSON.stringify(data));
});

app.post("/sessions", (req, res) => {
  const sessionData = req.body;
  sessions.push(data);

  res.send("post data recived: " + JSON.stringify(data));
});

app.post("/me/accounts", (req, res) => {
  const accountData = req.body;
  accounts.push(data);

  res.send("post data recived: " + JSON.stringify(data));
});

app.post("/me/accounts/transactions", (req, res) => {
  const transactions = req.body;

  res.send("post data recived: " + JSON.stringify(data));
});

// Starta servern
app.listen(port, () => {
  console.log(`Bankens backend körs på http://localhost:${port}`);
});
