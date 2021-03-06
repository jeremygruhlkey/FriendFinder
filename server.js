const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'./app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});
