import { app } from "../app.js";

app.get('/', (req, res)=>{
    res.json({message : 'How are you'})
})