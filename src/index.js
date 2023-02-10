const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const route = require('./routes')

const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//logger
app.use(morgan("combined"));
//templete engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "\\resources\\views"));



route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
