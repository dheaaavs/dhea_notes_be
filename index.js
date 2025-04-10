import express from "express";
import cors from "cors";
import CatatanRoute from "./routes/CatatanRoute.js";

const app = express();
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.render("index"));
app.use(CatatanRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
