import express, { request, response } from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/users", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.put("/users/:id", async (req, res) => {
  console.log(req);
  // await prisma.user.update({
  //   where: {
  //     id: req.params.id,
  //   },
  //   data: {
  //     email: req.body.email,
  //     name: req.body.name,
  //     age: req.body.age,
  //   },
  // });
});

app.listen(3000);
