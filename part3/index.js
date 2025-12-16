const express = require("express");
const morgan = require("morgan");
const app = express();
let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
app.use(express.static("dist"));
morgan.token("response", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      tokens["response"](req, res),
    ].join(" ");
  })
);
app.get("/api/persons", (req, res) => {
  res.send(persons);
});

const getDate = () => {
  const date = new Date();
  return date.toString();
};
app.get("/api/info", (req, res) => {
  res.send(
    `<p>phonebook has info for ${persons.length} people</p>
        <p>${getDate()}</p>
        `
  );
});
app.get(`/api/persons/:id`, (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) res.send(person);
  else {
    res.status(404).send("not found");
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

const generateId = () => {
  const maxId =
    persons.length > 0
      ? Math.max(
          ...persons.map((n) => Number(n.id), parseInt(Math.random() * 1000))
        )
      : 0;
  return String(maxId + 1);
};
app.use(express.json());
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name) {
    return res.status(400).json({ error: "name missing" });
  } else if (!body.number) {
    return res.status(400).json({ error: "number missing" });
  } else if (
    persons.findIndex(
      (person) =>
        person.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()
    ) !== -1
  ) {
    return res.status(400).json({ error: "name must be unique" });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  persons = persons.concat(person);
  res.json(person);
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
