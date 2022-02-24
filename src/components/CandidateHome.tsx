import axios from "axios";
import React, { Component, useState } from "react";
import UserService from "../services/User.service";


type CandidateInfo = {
  id: number,
  userId: number,
  skills: Skill,
  educations: Education,
  offers: Offer
}

type Skill = {
  id: number,
  skillTitle: string,
  skillLevel: string
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
  opportunity_id: number,
  candidate_id: number
}
const CandidateHome = () => {

  const [candidateinfo, setCandidateInfo] = useState<CandidateInfo | undefined>()

  const getCandidateInfo = async () => {
     UserService.getCurrentCandidateInfo().then((response) => {
       console.log(response.data)
     })
  }




  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Candidate Home</h3>
        <button onClick={getCandidateInfo}>Get Info</button>
      </header>
    </div>
  );
}

export default CandidateHome;