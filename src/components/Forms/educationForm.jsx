function educationForm({eduChangeBtnClick, inputEduStuff, setInputEduStuff}) {

  function handleChange(e){
    let inputID=e.target.id;
    let inputValue=e.target.value;

    setInputEduStuff((previousStuff)=>{
      let newStuff={...previousStuff}
      newStuff[inputID]=inputValue;
      return newStuff
    })
  }

  function handleClick(e) {
    e.preventDefault();
    eduChangeBtnClick(true);
  }

    return (
      <>
       <form onSubmit={handleClick}>
        <fieldset>
            <legend>Education</legend>

            <label htmlFor="schoolName">School: </label>
            <input type="text" name="" id="schoolName" onChange={handleChange} value={inputEduStuff.schoolName}/>

            <label htmlFor="titleOfStudy">Title of Study: </label>
            <input type="text" name="" id="titleOfStudy" onChange={handleChange} value={inputEduStuff.titleOfStudy}/>

            <label htmlFor="fromDate">From: </label>
            <input type="number" name="" id="fromDate" min={1900} max={2024} placeholder="start year" onChange={handleChange} value={inputEduStuff.fromDate}/>

            <label htmlFor="toDate">To: </label>
            <input type="number" name="" id="toDate" min={1900} max={2024} placeholder="end year" onChange={handleChange} value={inputEduStuff.toDate}/>

            <button type="submit">Save</button>
        </fieldset>
      </form>
      </>
    )
  }
  
  export default educationForm