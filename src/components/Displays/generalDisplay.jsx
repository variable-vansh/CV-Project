function generalDisplay({changeBtnClick, inputStuff}){
    function handleClick(e) {
        e.preventDefault();
        changeBtnClick(false);
      }

    return(
        <>
<form onSubmit={handleClick}>
            <fieldset>
            <legend>General</legend>

            <label htmlFor="name">Name: </label>
            <input type="text" name="" id="name" value={inputStuff.name} disabled={true}/>

            <label htmlFor="email">E-mail: </label>
            <input type="email" name="" id="email" value={inputStuff.email} disabled={true}/>

            <label htmlFor="tel">Phone Number: </label>
            <input type="tel" name="" id="tel" value={inputStuff.tel} disabled={true}/>

            <button type="sumbit">Edit</button>
        </fieldset>
      </form>
            
        </>
    )
}

export default generalDisplay