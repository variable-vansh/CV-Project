import { useState } from "react"

import ExperienceForm from "../Forms/experienceForm"
import ExperiencelDisplay from "../Displays/experienceDisplay";


function generalSwitch({expBtnClicked,expChangeBtnClick}){

    let [inputExpStuff, setInputExpStuff]=useState(
        {
            companyName:'',
            position:'',
            mainResponsibilty:'',
            fromDate:'',
            toDate:''
        }
      )

   return(
    <>
            {(!expBtnClicked)?
            <ExperienceForm 
            expChangeBtnClick={expChangeBtnClick} 
            inputExpStuff={inputExpStuff}
            setInputExpStuff={setInputExpStuff}
            /> 
            :
            <ExperiencelDisplay 
            expChangeBtnClick={expChangeBtnClick}
            setInputExpStuff={setInputExpStuff}
            />}
    </>
   )

}

export default generalSwitch