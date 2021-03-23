import React, { useState } from 'react';
import './App.css';
import  Header from'./screens/Header';
import Footer from'./screens/Footer';
import Note from './screens/Note';
import CreateNote from './screens/CreateNote';

const App = () => {
  const [addItems, setAddItem] = useState([]);

  const addNotes =(note)=>{
    setAddItem((preData)=>{
      return [...preData, note]
    });
    console.log("app.js se arha h ye data",note);
  }
  const onDelete = (id)=>{
    setAddItem((olddata)=>
    olddata.filter((currdata, index)=>{
      return index !==id;
    })
    );
    console.log(id)
  };
  return (
    <div className="App">
     <Header/>
     <Note passNotes={addNotes}/>
    { 
     addItems.map((value, index)=>{
       return <CreateNote
       key={index}
       id={index}
       title={value.title}
       textData={value.textData}
       deleteItem={onDelete}
       />
       
     })
    }
     <Footer/>
    </div>
  );
}

export default App;
