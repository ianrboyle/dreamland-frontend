import React, {useState, ChangeEvent} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Register = () => {

  type User = {
    name: string | undefined,
    email: string,
    password: string,
    passwordConfirmation: string,
  }
  const [userParams, setUserParams] = useState<User | undefined>()


  const [isCandidateOrRecruiter, setIsCandidateOrRecruiter] = React.useState("candidate");

  const createUser = async (e: any) => {
    e.preventDefault()
    try {
      if (userParams){
        const { name, email, password, passwordConfirmation } = userParams
        let candidate = true
        isCandidateOrRecruiter === "candidate" ?  candidate = true : candidate = false
        const body = {name, email, password, passwordConfirmation, candidate}
        console.log(body)
      const response =  await fetch("http://localhost:5000/users", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body) 
    })
    console.log(response, body)
    window.location.href = "/"
      }
      
    } catch (err: any) {
      console.error(err.message)
    }
  }
  const handleCandidateOrRecruiterChange = (
    e: React.MouseEvent<HTMLElement>,
    newisCandidateOrRecruiter: string,
  ) => {
      setIsCandidateOrRecruiter(newisCandidateOrRecruiter)

  };

  const handleUserParamsChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target
    setUserParams((prev: any) => {
      return {...prev, [name]: value}
    })
  }



  
  console.log(userParams)
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
      <h3>Who are you? </h3>
      <ToggleButtonGroup
      color="primary"
      value={isCandidateOrRecruiter}
      exclusive
      onChange={handleCandidateOrRecruiterChange}
    >
      <ToggleButton value="candidate">Candidate</ToggleButton>
      <ToggleButton value="recruiter">Recruiter</ToggleButton>
    </ToggleButtonGroup>
      </div>
     
<br></br>
      <button onClick={createUser}>
        Register
      </button>


    </div>
  )
}

export default Register