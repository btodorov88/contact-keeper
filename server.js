const express = require("express");
const connectDb = require("./config/db");

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({ message: "Welkome to the API" }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
