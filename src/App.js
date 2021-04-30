import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = () => {
    setData(prevData => prevData.concat(inputValue));
  }

  const onDelete = (index) => {
    const newData = data.filter((_, itemIndex) => index !== itemIndex);
    setData(newData);
  }

  useEffect(()=>{
    console.log("I'm called on every state change or initialization.")
  })

  useEffect(()=>{
    console.log("I'm called only when 'data' state is updated or initialized.")
  },[data])

  useEffect(()=>{
    console.log("I'm called only when 'inputValue' state is updated or initialized.")
  },[inputValue])

  return (
    <div className="app">
      <Header 
        title="My First React App"
        color="dodgerblue"
      />

      <div className="container">
        <input 
          type="text"
          className="text-input"
          placeholder="What do you want?"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button className="btn-submit" onClick={onSubmit}>
          Submit
        </button>

        <List
          data={data}
          onButtonClick={onDelete}
        />
      </div>
    </div>
  );
}

export default App;