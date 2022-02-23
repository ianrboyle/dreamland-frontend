import React, {useState, ChangeEvent} from 'react';


const LoginButton = () => {

  type User = {
    name: string | undefined,
    email: string,
    password: string,
    passwordConfirmation: string,
    candidate: boolean
  }
  const [userParams, setUserParams] = useState<User | undefined>()
  const [isClicked, setIsClicked] = useState(false)
  
  
  const createUser = async (e: any) => {
    e.preventDefault()
    try {
      if (userParams){
        const { name, email, password, passwordConfirmation } = userParams
        const body = {name, email, password, passwordConfirmation}
      const response =  await fetch("http://localhost:5000/users", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body) 
    })
    console.log(response, body)
    window.location.href = "/"
      }
      
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
      <p>Name</p>: <input type="text" name="name"value={userParams?.name} onChange={handleUserParamsChange}/>
      <p>Email</p>: <input type="text" name="email"value={userParams?.email} onChange={handleUserParamsChange}/>
      <p>Password</p>: <input type="text" name="password" value={userParams?.password} onChange={handleUserParamsChange}/>
      <p>Password Confirmation</p>: <input type="text" name="passwordConfirmation" value={userParams?.passwordConfirmation} onChange={handleUserParamsChange}/>
      <button onClick={createUser}>
        Register
      </button>
    </div>
  )
}

export default LoginButton