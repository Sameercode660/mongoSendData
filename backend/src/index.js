import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import { User } from './models/user.models.js'


connectDB().then(()=>{
    app.listen(8080, ()=>{
        console.log('Server is listening on port 8080')
    })
}).catch((err)=>{
    console.log("Error: ", err)
})

app.post('/api/data', async(req, res)=>{

  try {
    const newData = new User(req.body)

    const savedData = newData.save()

    res.status(201).json(savedData);
    
  } catch (error) {
    console.log('Error : ', error)
    throw error
  }


})

