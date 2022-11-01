const cors = require("cors");
const express = require("express");
const routes =  require("./routes")

const PORT = 5050;
const app = express();


app.use(cors({ origin: true }));
app.use(express.json());

app.use(routes)


app.listen(PORT, () => {
  console.log("Rodando...");
});
