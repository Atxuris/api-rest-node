import express from "express";
import notFound from "./src/middleware/not-found.js";

const app = express();

app.use((req, res, next) => {
    //res.json({ message: "API en mantenimiento" });
    console.log(req.method);
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Bienvenidos a nuestra API REST!" });
});

app.use(notFound);


const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
