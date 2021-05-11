import logo from './logo.svg';
import './App.css';

function App() {
  
  function handleChange(event){
 
  }

  function handleSubmit(event) {

  }

  return (
    <div className="App">
      <div class="container">
        <h1>Google Search Application</h1>
        <form onSubmit={handleSubmit}>
          <div class ="form group">
            <input type="text" onChange={handleChange}
            className ="form-control mt-10" 
            placeholder="search for books"
            autoComplete="off"
            />
            <button type="submit" className="btn btn-danger">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
