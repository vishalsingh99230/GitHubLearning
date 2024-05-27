const mongoose = require("mongoose");

async function connecttoMongoDB(url){

    return mongoose.connect(url)
}


module.exports = {
    connecttoMongoDB,
}

// mongoose.connect('mongodb+srv://vishalsingh99230:Rupa%40321@cluster0.0utt1h9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
// { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err));
