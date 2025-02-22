import React, { useEffect, useState} from 'react';

const App =()=> {

  const [user,setUser] = useState([])

  const getuser=()=>{
    fetch("/api/user")
    .then(res=> res.json())
    .then(json=>setUser(json))
  }

  useEffect(()=>{
    getuser()
  },[])

  return(
    <div>
      {user.map((data)=>{
        return<>
        <div style ={{border:"1px solid gray"}}>
          <h1>Name: {data.name}</h1>
          <h1>Username: {data.username}</h1>
          <h1>Email: {data.email}</h1>
        </div>
        <h1>Name: {data.name}</h1>
        <h1>Username: {data.username}</h1>
        <h1>Email: {data.email}</h1>
        </>
      })}
    </div>
  )
}
export default App 