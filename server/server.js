const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

const DB = "products";

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());

//connected to DB using mongoose!
require("./config/mongoose.config")(DB)
//routes import after DB connection

require("./routes/product.route")(app)



//STarts sErVeR!
app.listen(PORT,()=>{console.log(`server on ${PORT}`)});