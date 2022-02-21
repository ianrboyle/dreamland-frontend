import React, {useState, ChangeEvent} from 'react';


const LoginButton = () => {

  type User = {
    username: string,
    password: string
  }
  const [userParams, setUserParams] = useState<User | undefined>()
  const [isClicked, setIsClicked] = useState(false)
  const createUser = async () => {
    try {
      const createUser =  await fetch("http://localhost:5000/users", {method: "POST"}).then(response => {
        console.log(createUser)
        return response.json();
      }).then (data => {
        console.log(data) 
        setUserParams(data)
      })
    
    } catch (err: any) {
      console.error(err.message)
    }
  }
  
  const handleClick = (e:any) => {
    e.preventDefault();
    setIsClicked(!isClicked)
  }
  const handleUserParamsChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target
    setUserParams((prev: any) => {
      console.log(typeof prev)
      return {...prev, [name]: value}
    })
 
  }
  console.log(isClicked)
  return (
    <div>
      {isClicked ? <p>IS CLICKED!</p> : <p>NOT CLICKED!</p>}
      <p>Username</p>: <input type="text" name="username"value={userParams?.username} onChange={handleUserParamsChange}/>
      <p>Password</p>: <input type="text" name="password" value={userParams?.password} onChange={handleUserParamsChange}/>
      <button onClick={handleClick}>
        Register
      </button>
    </div>
  )
}

export default LoginButton