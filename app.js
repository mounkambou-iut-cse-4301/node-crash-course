const expres = require("express");

//express app
const app = expres();

//listen
app.listen(3000);
app.get("/", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
  });
app.get("/forms", (req, res) => {
  res.sendFile("./views/forms.html", { root: __dirname });
});

//redirect
app.get("/about-us", (req, res) => {
    res.redirect('/');
  });

  //404

  app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
  });


