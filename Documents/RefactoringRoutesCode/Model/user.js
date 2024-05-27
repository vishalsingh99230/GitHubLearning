const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://vishalsingh99230:Rupa%40321@cluster0.0utt1h9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


const userSchema = new mongoose.Schema({

    first_name : {

        type : String,
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    jobTitile : {
        type : String,
    },
    gender : {
        type : String,
    },

})



const User = new mongoose.model("user",userSchema);


module.exports(User);