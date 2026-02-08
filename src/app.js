const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Recipe Swap",
    tagline: "Sharing recipes and building community."
  });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Running on http://localhost:${port}`));
}

module.exports = app;
