function experienceForm({expChangeBtnClick,inputExpStuff,setInputExpStuff}) {

  function handleChange(e){
    let inputID=e.target.id;
    let inputValue=e.target.value;

    setInputExpStuff((previousStuff)=>{
      let newStuff={...previousStuff}
      newStuff[inputID]=inputValue;
      return newStuff
    })
  }

  function handleClick(e) {
    e.preventDefault();
    expChangeBtnClick(true);
  }

    return (
      <>
     <form onSubmit={handleClick}>
        <fieldset>
            <legend>Experience</legend>

            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="" id="companyName" onChange={handleChange} value={inputExpStuff.companyName}/>

            <label htmlFor="position">Position: </label>
            <input type="text" name="" id="position" onChange={handleChange} value={inputExpStuff.position}/>

            <label htmlFor="mainResponsibilty">Main Responsibility: </label>
            <input type="text" name="" id="mainResponsibilty" onChange={handleChange} value={inputExpStuff.mainResponsibilty}/>

            <label htmlFor="fromDate">From: </label>
            <input type="number" name="" id="fromDate" min={1900} max={2024} placeholder="start year" onChange={handleChange} value={inputExpStuff.fromDate}/>

            <label htmlFor="toDate">To: </label>
            <input type="number" name="" id="toDate" min={1900} max={2024} placeholder="end year" onChange={handleChange} value={inputExpStuff.toDate}/>

            <button type="submit">Save</button>
        </fieldset>
      </form>
      </>
    )
  }
  
  export default experienceForm