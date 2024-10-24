function generalDisplay({expChangeBtnClick, setInputExpStuff}){
    function handleClick(e) {
        e.preventDefault();
        expChangeBtnClick(false);
      }

    return(
        <>
        <form onSubmit={handleClick}>
           <fieldset>
               <legend>Experience</legend>
   
               <label htmlFor="companyName">Company Name: </label>
               <input type="text" name="" id="companyName" value={setInputExpStuff.companyName} disabled={true}/>
   
               <label htmlFor="position">Position: </label>
               <input type="text" name="" id="position"  value={setInputExpStuff.position} disabled={true}/>
   
               <label htmlFor="mainResponsibilty">Main Responsibility: </label>
               <input type="text" name="" id="mainResponsibilty"  value={setInputExpStuff.mainResponsibilty} disabled={true}/>
   
               <label htmlFor="fromDate">From: </label>
               <input type="number" name="" id="fromDate" min={1900} max={2024} placeholder="start year"  value={setInputExpStuff.fromDate} disabled={true}/>
   
               <label htmlFor="toDate">To: </label>
               <input type="number" name="" id="toDate" min={1900} max={2024} placeholder="end year"  value={setInputExpStuff.toDate} disabled={true}/>
   
               <button type="submit">Edit</button>
           </fieldset>
         </form>
         </>
    )
}

export default generalDisplay