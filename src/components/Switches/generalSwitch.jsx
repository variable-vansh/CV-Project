import { useState } from "react";

import GeneralForm from "../Forms/generalForm";
import GeneralDisplay from "../Displays/generalDisplay";

function generalSwitch({ btnClicked, changeBtnClick }) {
  let [inputStuff, setInputStuff] = useState({
    name: "",
    email: "",
    tel: "",
  });

  return (
    <>
      {!btnClicked ? (
        <GeneralForm
          changeBtnClick={changeBtnClick}
          inputStuff={inputStuff}
          setInputStuff={setInputStuff}
        />
      ) : (
        <GeneralDisplay
          changeBtnClick={changeBtnClick}
          inputStuff={inputStuff}
        />
      )}
    </>
  );
}

export default generalSwitch;
