import React, {useState, ChangeEvent} from 'react';


const Register = () => {

  type User = {
    name: string | undefined,
    email: string,
    password: string,
    passwordConfirmation: string,
  }
  const [userParams, setUserParams] = useState<User | undefined>()

  const [isCandidate, setIsCandidate] = useState(false)


  const createUser = async (e: any) => {
    e.preventDefault()
    try {
      if (userParams){
        const { name, email, password, passwordConfirmation } = userParams
        const candidate = isCandidate
        const body = {name, email, password, passwordConfirmation, candidate}
      const response =  await fetch("http://localhost:5000/users", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body) 
    })
    console.log(response, body)
    window.location.href = "/"
      }
      
    } catch (err: any) {
      console.error(err.message)
    }
  }
  

  const handleUserParamsChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target
    setUserParams((prev: any) => {
      return {...prev, [name]: value}
    })
  }

  const handleCandidateCheckBox = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "candidate"){
      setIsCandidate(true)
    }
    if (e.target.name === "recruiter"){
      setIsCandidate(false)
    }
    
  }

  
  console.log(isCandidate)
  return (
    <div>
      <p>Name: </p> 
      <input type="text" name="name"value={userParams?.name} onChange={handleUserParamsChange}/>

      <p>Email: </p> 
      <input type="text" name="email"value={userParams?.email} onChange={handleUserParamsChange}/>

      <p>Password: </p> 
      <input type="text" name="password" value={userParams?.password} onChange={handleUserParamsChange}/>

      <p>Password Confirmation:</p> 
      <input type="text" name="passwordConfirmation" value={userParams?.passwordConfirmation} onChange={handleUserParamsChange}/>
      <div> 
      <h3>Are you a: </h3>
      <h3>Candidate? <input defaultChecked={isCandidate} type="checkbox" name="candidate" onChange={handleCandidateCheckBox}/></h3>
  
      <h3>or Recruiter? <input type="checkbox" name="recruiter" onChange={handleCandidateCheckBox}/></h3> 
      
      </div>
     
<br></br>
      <button onClick={createUser}>
        Register
      </button>


      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </div>
  )
}

export default Register