import axios from "axios";
import { useState } from "react";
import './index.css'

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  async function handleData(e)
  {
    e.preventDefault();

    const userData = {
      name,
      username,
      password
    }

    try{
      const response = await axios.post('http://localhost:8080/api/data', userData)
      console.log(response)
    }catch(error){
      console.log(error)
      throw error;
    }
  }
  return (
    <>
      <form onSubmit={handleData} className="flex flex-col gap-5">
        <div>
          <input type="text" name="name"
          placeholder="Enter your name"
          className="outline-none border-blue-100" 
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
          />
        </div>

        <div>
          <input type="text" name="username"
          placeholder="Enter your username"
          className="outline-none border-emerald-600"
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          />
        </div>

        <div>
          <input type="text" name="password"
          className="outline-none border-blue-100"
          placeholder="Choose a password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          />
        </div>
      
        <div>
          <input type="submit" value={'Submit'}/>
        </div>
      </form>
    </>
  );
}

export default App;
