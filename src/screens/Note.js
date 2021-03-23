import React, { useState } from "react";
import "../App.css";
const Note = (props) => {
  const [note, setNote] = useState({
    title: "",
    textData: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]:value,
      };
    });
    console.log(e.name);
  };
  const addEvent =(e) =>{
      e.preventDefault();
props.passNotes(note)
setNote({
  title: "",
  textData: ""

})
  }
  return (
    <>
      <div className="note">
        <div className="container my-3">
          <form>
            <div className="mb-3">
              <input
                type="text"
                onChange={InputEvent}
                name="title"
                value={note.title}
                className="form-control note-input"
                id="exampleFormControlInput1"
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control text-note"
                onChange={InputEvent}
                name="textData"
                value={note.textData}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Take a Note"
              ></textarea>
            </div>
            <button className="btn mg-3" onClick={addEvent}>
              <i className="fa fa-plus"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Note;
