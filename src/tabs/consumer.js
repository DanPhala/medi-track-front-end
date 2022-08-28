import React, {useState,useContext} from "react";
import profile from '../tabs/profilePicture.png'
import '../App.css';

const Consumer = () => {

  const [medicine, setMedicine ] = useState({});
  const [ tab, setTab ] = useState(1);
  const [ data, setData ] = useState();
  
    //Adding method.
    const add = () => {};
  
  
      return (
        <div className="manu" >
          <div>
            
        
          <div className="referralSection">
                   {/* Consumer message */}
                   <div className="">
                    <h1  style={{color: "#830a5a" ,height: "auto", fontSize: "4em", justifyContent: "center"}}>Validate and Gain Points! 
                      </h1>
                  </div>
                  <div>
                  <iframe src="https://giphy.com/embed/67ThRZlYBvibtdF9JH" width="250" height="auto" frameBorder="0" class="giphy-embed" justifyContent="center">
                    </iframe>
                  </div>
                  <br/><br/>
                </div>
          </div>
          
          <div className="manuTabs" >
          </div>
          <div >
            {
              tab === 1 ? (
              
                <div className="" >
          
                 
                   {/* <input onChange={(e)=> setMedicine({...medicine, name:e.target.value }) }
                    placeholder="Medicine ID" className="input_" /> */}
                    
                  <input onChange={(e)=> setMedicine({...medicine, MedicineName:e.target.value }) }
                    placeholder="Medicine ID" className="input_" />
                    <br/>
                  <button className="addBtn" onClick={() => add() } >
                    Validate
                  </button>
  
                </div>
              ) :
              tab === 2 ? (
                data && data.map((val, key) => (
                  <div className="manuData" >
                    data -- value
                  </div>
                ))
              ) :
              tab === 3 ? "Track Data" :
              "Wrong Tab"
            }
          </div>
        </div>
      )
}

export default Consumer;
