import React from "react";

import "../App.css";
const CreateNote = (props) => {
  const deleteNote = ()=>{
    props.deleteItem(props.id);
  }
  return (
    <div  className="fluid"> 
     
           <h4>{props.title}</h4>
           <br/>
           <p>{props.textData}</p>
           <button className="btn mg-3" onClick={deleteNote}>
              <i className="fa fa-trash"></i>
            </button>
         
    </div>
  );
};

export default CreateNote;
