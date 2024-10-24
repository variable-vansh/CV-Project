import { useState } from "react"

import EducationForm from "../Forms/educationForm";
import EducationDisplay from "../Displays/educationDisplay"

function educationSwitch({eduBtnClicked,eduChangeBtnClick}){

    let [inputEduStuff, setInputEduStuff]=useState(
        {
            schoolName:'',
            titleOfStudy:'',
            fromDate:'',
            toDate:''
        }
      )

   return(
    <>
            {(!eduBtnClicked)?
            <EducationForm 
            eduChangeBtnClick={eduChangeBtnClick} 
            inputEduStuff={inputEduStuff}
            setInputEduStuff={setInputEduStuff} 
            /> 
            :
            <EducationDisplay 
            eduChangeBtnClick={eduChangeBtnClick}
            inputEduStuff={inputEduStuff}
            />}
    </>
   )

}

export default educationSwitch