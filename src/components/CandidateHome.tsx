import axios from "axios";
import React, { Component, useState } from "react";

import UserService from "../services/User.service";


type CandidateInfo = {
  id: number,
  user: User,
  skills: Skill[],
  opportunities: Opportunity[],
  educations: Education[],
  offers: Offer[]
}

type User = {
  id: number,
  name: string,
  email: string

}
type Skill = {
  id: number,
  skillTitle: string,
  skillLevel: string
}
type Opportunity = {
  id: number,
  job_title: string,
  job_description: string
}
type Education = {
  id: number,
  candidate_id: number,
  school: string,
  degree: string,
  field: string,
  start_year: number,
  end_year: number
}

type Offer = {
  id: number,
  opportunityId: number,
  candidateId: number
}
const CandidateHome = () => {

  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo | undefined>()


  const getCandidateInfo = async () => {
     UserService.getCurrentCandidateInfo().then((response) => {
        console.log(response.data.opportunities)
        const data = response.data;
        console.log(data)
       setCandidateInfo(() => {
         return { user: data.user, opportunities: data.opportunities, id: data.id, educations: data.educations, offers: data.offers, skills: data.skills}
       })
     })
  }

  

  console.log(candidateInfo)

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Candidate Home</h3>
        <button onClick={getCandidateInfo}>Get Info</button>
        
      </header>
      {candidateInfo && (
      <div>
        <h3>{candidateInfo.user.name}</h3>
        <h3>{candidateInfo.user.email}</h3>
        <p>Offers:
        {candidateInfo.opportunities.map((opp) => { return ( <ul>
          <li>
            {opp.job_title}: {opp.job_description}
          </li>
          </ul>)
          
        })}
            </p>
            <p>Education: 
            {candidateInfo.educations.map((school) => { return ( <ul>
          <li>
            {school.school}
            <ul>
              <li>Degree: {school.degree}</li>
              <li>
                Field: {school.field}
              </li>
              <li>Start Year: {school.start_year}</li>
              <li>End Year: {school.end_year}</li>
            </ul>
          </li>
          </ul>)
          
        })}

            </p>
      </div>)}
    </div>
  );
}

export default CandidateHome;