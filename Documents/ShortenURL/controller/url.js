
const shortid = require("shortid");
const URL = require('../model/url');
const { short } = require("webidl-conversions");
async function generatenewURL(req,res){
    
    const body = req.body;
    if(!body.url) return res.status(400).json({"error":"URL is required"});
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitedHistory : []

    })

    return res.json({id : shortID})
}

    module.exports = {
        generatenewURL,

    }