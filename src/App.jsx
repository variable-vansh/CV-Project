import { useState } from "react";

import GeneralSwitch from "./components/Switches/generalSwitch";
import EducationSwitch from "./components/Switches/educationSwitch";
import ExperienceSwitch from "./components/Switches/experienceSwitch";

function App() {
  let [btnClicked, changeBtnClick] = useState(false);
  let [eduBtnClicked, eduChangeBtnClick] = useState(false);
  let [expBtnClicked, expChangeBtnClick] = useState(false);

  return (
    <>
      <GeneralSwitch
        btnClicked={btnClicked}
        changeBtnClick={changeBtnClick}
        class={"test"}
      />
      <EducationSwitch
        eduBtnClicked={eduBtnClicked}
        eduChangeBtnClick={eduChangeBtnClick}
      />
      <ExperienceSwitch
        expBtnClicked={expBtnClicked}
        expChangeBtnClick={expChangeBtnClick}
      />
    </>
  );
}

export default App;
