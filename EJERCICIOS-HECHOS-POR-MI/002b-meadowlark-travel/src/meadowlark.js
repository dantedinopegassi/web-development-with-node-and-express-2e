const express = require("express");
const expresshandlebars = require("express-handlebars");
const port = process.env.PORT || 3000;

const app = express();

app.engine(
  "handlebars",
  expresshandlebars.engine({
    defaultLayout: "coso",
  })
);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("chupala yastin");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not he encontrado");
});

app.use((err, req, res, next) => {
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server error");
});

app.listen(port, () => {
  console.log(
    `esto ta andando perri en el puerto ${port}\n` + `cortalo con coca o ctrl-c`
  );
});
