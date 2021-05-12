import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyAnE-y2_gr6tIfWt8LZqNRF7ioZeBGWxC8");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items)
      })
  }

  return (
    <div className="App">
      <h1>Google Search Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="form group">
          <input type="text" onChange={handleChange}
            className="form-control mt-10"
            placeholder="Enter keyword"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-danger" id="button">Search</button>
        </div>
      </form>

      {result.map(book => (
          <div className="card">
            <li><b>Title:</b> <i> {book.volumeInfo.title}</i></li>
            <li><b>Written by:</b> {book.volumeInfo.authors}</li>
            <li><b>Description:</b> {book.volumeInfo.description}</li>

            <a target="_blank" rel="noreferrer" href={book.volumeInfo.previewLink}button type="submit" className="btn btn-primary">View</a>

            <button type="submit" className="btn btn-success">Save</button>
          </div>
      ))}
    </div>
  );
}

export default App;
