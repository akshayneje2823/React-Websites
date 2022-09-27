import React, { useState } from 'react'

function App() {
  const [state, setState] = useState({
    noteList: [],
    notes: "",
    date: ""
  })

  const updateState = (nState) => {
    setState((prevState) => {
      return { ...prevState, ...nState }
    })
  }

  const onChangeHandler = (e) => {
    // const [value, name] = e.target;
    const value = e.target.value
    const name = e.target.name
    updateState({ [name]: value })
  }

  const submitHandler = () => {
    const obj = { title: state.notes, dt: state.date }
    const curNote = [...state.noteList];
    curNote.push(obj);
    console.log({ noteList: curNote, notes: "", date: "" })
    updateState({ noteList: curNote, notes: "", date: "" })
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "2%",

    }}>
      <input type="text"
        name={'notes'} 
        id={'notes'} 
        value={state.notes}
        placeholder="Enter Notes"
        onChange={onChangeHandler} />

      <input
        type="date"
        id={'date'}
        name={'date'}
        value={state.date}
        style={{ margin: "10px" }}
        onChange={onChangeHandler}
      />
      <button onClick={submitHandler}>Delete</button>
      <ul style={{ width: 150 }}>
        {
          state.noteList > 0 ? (
            state.noteList.map((ele,index)=>{
              return <li key={index}>{ele.title} {ele.dt}</li>
            })
          )
            : (<h5>You don't have any notes</h5>)
        }
      </ul>
    </div>
  )
}

export default App