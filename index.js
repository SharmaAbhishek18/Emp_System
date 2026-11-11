
require("dotenv").config({
    path: require("path").join(__dirname, ".env")
});

console.log("Loaded PORT:", process.env.PORT);

const { connect } = require("http2");
const app = require("./src/app");
const { connectDB } = require("./src/config/db.config");
connectDB()
const port = process.env.PORT || 4500

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
