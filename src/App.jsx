import './App.css'



function App() {

  return (
    <div className="appContainer">
      
      <div className="topSection">
        <div className="visualiserContainer">
          <div className="visualStage">
            <h1>STAGEEE</h1>
          </div>  
          
          <div className="controlButtons">
            <button>Previous</button>
            <button>Next</button>

          </div>
        </div>


        <div className="sideBar">
          <div className="tabs">
            <button className="tabButton">Text</button>
            <button className="tabButton">Code</button>
          </div>
          
          <div className="sideBarContnt">
            <p>TEXTTTTTTTTTTTTTTTTTTTTT</p>
          </div>
        </div>
      </div>


      <div className="bottomBar">
        <div className="dsaButtons">
          <button>Two Pointer</button>
          <button>Sliding Window</button>
        </div>
      </div>
    </div>
  );
}


export default App;