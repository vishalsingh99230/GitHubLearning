const express = require("express");

const { connecttoMongoDB } = require("./connect")
const urlRoute = require("./routes/url")
const URL = require('./model/url')
const app = express();

const port = 8001;

connecttoMongoDB('mongodb+srv://vishalsingh99230:Rupa%40321@cluster0.0utt1h9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/short-url').then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(express.json())
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    }
    );
    res.redirect(entry.redirectURL);
})
app.listen(port, () => console.log("server started at"));

