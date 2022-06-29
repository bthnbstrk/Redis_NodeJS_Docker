const redis = require("redis");
const client = redis.createClient();

client.on("error", (error)=>{
    console.error(error);
});

client.set("team_manager","100",(error,message)=>{
    if(error){
        console.error(error);
    }
    console.log("Message",message);
});

client.get("team_manager",(error,message)=>{
    if(error){
        console.error(error);
    }
    console.log("Message",message);
});