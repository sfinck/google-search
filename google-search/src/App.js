import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';

function App() {

  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  const [apiKey,setApiKey] = useState("AIzaSyAnE-y2_gr6tIfWt8LZqNRF7ioZeBGWxC8"); 

  function handleChange(event){
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items)
    })
  }

  return (
    <div className="App">
        <h1>Google Search Application</h1>
        <form onSubmit={handleSubmit}>
          <div className ="form group">
            <input type="text" onChange={handleChange}
            className ="form-control mt-10" 
            placeholder="search for books"
            autoComplete="off"
            />
            <button type="submit" className="btn btn-danger">Search</button>
          </div>
        </form>
       
      {result.map(book => (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      ))}
      </div>
  );
}

export default App;
