function educationDisplay({eduChangeBtnClick, inputEduStuff}){
    function handleClick(e) {
        e.preventDefault();
        eduChangeBtnClick(false);
      }

    return(
        <>
       <form onSubmit={handleClick}>
        <fieldset>
            <legend>Education</legend>

            <label htmlFor="schoolName">School: </label>
            <input type="text" name="" id="schoolName" value={inputEduStuff.schoolName} disabled={true}/>

            <label htmlFor="titleOfStudy">Title of Study: </label>
            <input type="text" name="" id="titleOfStudy"  value={inputEduStuff.titleOfStudy} disabled={true}/>

            <label htmlFor="fromDate">From: </label>
            <input type="number" name="" id="fromDate" min={1900} max={2024} placeholder="start year"  value={inputEduStuff.fromDate} disabled={true}/>

            <label htmlFor="toDate">To: </label>
            <input type="number" name="" id="toDate" min={1900} max={2024} placeholder="end year" value={inputEduStuff.toDate} disabled={true}/>

            <button type="submit">Edit</button>
        </fieldset>
      </form>
      </>
    )
}

export default educationDisplay