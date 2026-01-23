import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.set("json spaces", 2);
app.use(express.json());
app.use(cors());
connection();

console.log(process.env.DATABASE_URL);

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
