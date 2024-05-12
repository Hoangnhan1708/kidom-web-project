// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect(){
    try{
        // await mongoose.connect('mongodb+srv://hoangnhan:862202@kidomcluster.2ws6vqi.mongodb.net/kidom');
        await mongoose.connect('mongodb://localhost:27017/kidom_db');

        console.log("Connect with database successfully!");
    }catch{
        console.log("Connect with database failure!");

    }
}

module.exports = {connect};