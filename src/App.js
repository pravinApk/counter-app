import React,{useState} from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div class="jumbotron text-center">
        <h1>Counter</h1>
        <h1>{counter}</h1>
         
      </div>
      <div class="container">
        
        <div className="row">
          <div className="col-sm-4 text-center">
            <button type="button" className="btn btn-primary" onClick={() => setCounter(counter+1)}>Increment</button>
          </div>
          <div className="col-sm-4 text-center">
            <button type="button" className="btn btn-primary" onClick={() => setCounter(counter-1)} disabled={counter ===0}>Decrement</button>
          </div>
          <div className="col-sm-4 text-center">
            <button type="button" className="btn btn-danger" onClick={() => setCounter(0)}>Reset</button>
          
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
