const express = require("express");
const expresshandlebars = require("express-handlebars");
const handlers = require("./modules/handlers");
const port = process.env.PORT || 3000;

const app = express();

/******************************************** /
/  Este coso                                  /
/            va a parar a su                  /
/                            propio modulo    /
/ ********************************************/
// const fortunes = [
//   "Conquer your fears or they will conquer you.",
//   "Rivers need springs.",
//   "Do not fear what you don't know.",
//   "You will have a pleasant surprise.",
//   "Whenever possible, keep it simple.",
// ];

app.engine(
  "handlebars",
  expresshandlebars.engine({
    defaultLayout: "coso",
  })
);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.disable('x-powered-by');

/******************************************** /
/  Asi se refactoriza codigo para             /
/  volverlo modular y poder testearlo         /
/ ********************************************/

app.get("/", /*handlers.home */
  (req, res) => {
  res.type("text/plain");
  res.send("chupala yastin");
});

app.get("/about", handlers.about
  /*(req, res) => {
  res.render("about", { fortune: getFortune() });
} */
);

app.use(/*handlers.notFound */
  (req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not he encontrado");
});

app.use(handlers.serverError
  /*(err, req, res, next) => {
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server error");
} */);

if(require.main == module){
  app.listen(port, () => {
    console.log(
        `esto ta andando perri en http://localhost:${port}/\n` +
          `cortalo con coca o ctrl-c`
    );
})
} else {
  module.exports = app;
}