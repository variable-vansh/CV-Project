function generalForm({ changeBtnClick, inputStuff, setInputStuff }) {
  function handleChange(e) {
    let inputID = e.target.id;
    let inputValue = e.target.value;

    setInputStuff((previousStuff) => {
      let newStuff = { ...previousStuff };
      newStuff[inputID] = inputValue;
      return newStuff;
    });
  }

  function handleClick(e) {
    e.preventDefault();
    changeBtnClick(true);
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <fieldset>
          <legend>General</legend>

          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name=""
            id="name"
            onChange={handleChange}
            value={inputStuff.name}
          />

          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            name=""
            id="email"
            onChange={handleChange}
            value={inputStuff.email}
          />

          <label htmlFor="tel">Phone Number: </label>
          <input
            type="tel"
            name=""
            id="tel"
            onChange={handleChange}
            value={inputStuff.tel}
          />

          <button type="submit">Save</button>
        </fieldset>
      </form>
    </>
  );
}

export default generalForm;
