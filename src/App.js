import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { submit } from './actions/index'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formData = useSelector((state) => state.formReducer)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h2>A simple form</h2>
      <form onSubmit={() => dispatch(submit({name: name, email: email}))}>
        <input type = "text" name = "name" value = {name} onChange = {(event) => setName(event.target.value)} />
        <input type = "text" name = "email" value = {email} onChange = {(event) => setEmail(event.target.value)} />
        <input type = "submit" value = "Submit" />
      </form>

      {formData.name && formData.email && alert(`Name is ${formData.name} and email is ${formData.email}`)}

    </div>
  );
}

export default App;
