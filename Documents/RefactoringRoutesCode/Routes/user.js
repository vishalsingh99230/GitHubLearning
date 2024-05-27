const express = require('express');

const router = express.Router();

const port = 8000;

router.use(express.urlencoded({extended: false}));



router.get("/api/users",(req,res) =>{
  
  return res.json(users)
})

router.post("/api/users", async (req, res) => {
    try {
        const body = req.body;
        const user = new User({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender
        });
        const result = await user.save();
        console.log("result", result);
        return res.status(201).json({msg: "success"});
    } catch(err) {
        console.error(err);
        return res.status(500).json({msg: "An error occurred"});
    }
});


router.route("/api/users/:id").get((req,res) => {
    const getID = Number(req.params.id);
       
       const user = users.find((user) => user.id === getID)
   

        return res.json(user);
    

})


module.exports = router








.put((req,res) =>{

    res.json({"status":"pending"})
}).delete((req,res) =>{

    res.json({"status": "pending"})
});

router.listen(port,()=>{

    console.log("Server Started");
});

