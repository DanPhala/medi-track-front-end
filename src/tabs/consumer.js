import React, { useState, useContext, useEffect } from "react";
import profile from '../tabs/profilePicture.png'
import '../App.css';
import { QrReader } from 'react-qr-reader';
// import fake data, that mirrors real data..
import MEDS from "./blockchainDummyData.json";



const Consumer = () => {

  const [medicine, setMedicine] = useState({});
  const [tab, setTab] = useState(1);
  const [data, setData] = useState(null);
  const [value, setValue] = useState("no data..");
  const [isScan, setIsScan] = useState(false);
  const [scan, setScan] = useState(null);



  //Adding method.
  const add = () => { };


  // filter data 
  const _filter = (id) => {
    let data_ = MEDS.filter((v, k) => v.medId == id);
    console.log(data_[0]);
    setScan((prev) => prev = data_[0]);
    setData(prev => prev = null);
  }


  // close scan
  const closeScan = () => {
    setData(prev => prev = "");
    setScan(prev => prev = null);
    setIsScan(prev => prev = false);
  }


  // runs when documents is ready.
  useEffect(() => {
    //
    // console.log( MEDS );
  }, [])



  return (
    <div className="manu" >

      {/* scan button */}
      <div className="scanMedBtn" >
        <button
          style={{ padding: ".5em", fontSize: "1.5em", letterSpacing: "1px", cursor: "pointer" }}
          onClick={() => setIsScan(prev => prev = !isScan)} >
          Scan Medicine
        </button>
      </div>
      {/* end scan button */}


      <div>
        <div className="referralSection" style={{ textAlign: "center" }} >
          {/* Consumer message */}
          <div className="">
            <h1 style={{ color: "#830a5a", height: "auto", fontSize: "4em", justifyContent: "center" }}>Validate and Gain Points!
            </h1>
          </div>
          <div>
            <iframe src="https://giphy.com/embed/67ThRZlYBvibtdF9JH" width="250" height="auto" frameBorder="0" class="giphy-embed" justifyContent="center">
            </iframe>
          </div>
          <br /><br />
        </div>
      </div>


      {
        isScan && <div className="qrcodeWrapper">

          <div className="closePopUp" >
            <button
              style={{ padding: ".5em", fontSize: "1.5em", letterSpacing: "1px", cursor: "pointer", margin: "1em" }}
              onClick={() => closeScan()} >Close</button>
          </div>
          {/* qr code start starts here */}
          <div className="qrcodeContainer" >

            <QrReader onResult={(result, error) => {
              if (!!result) {
                setData(prev => prev = result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
              style={{ width: "100%" }} />
            {
              data && <p style={{ backgroundColor: "yellow", padding: "1em" }} >
                {data} {_filter(data)}
              </p>
            }

            <div className={"scanResult"}
              style={{ backgroundColor: scan?.Verified == "1" ? "green" : "red" }} >
              {
                scan && <>
                  <p>Name: {scan?.name}</p>
                  <p>Ex Date: {scan?.expiry_date}</p>
                  <p>Made By: {scan?.made_by}</p>
                  <p>Infor: {scan?.information}</p>
                  <p>Approve: {scan?.approve_by}</p>
                  <p>Side Effect: {scan?.side_effect}</p>
                </>
              }
            </div>
          </div>
          {/* qr code ends here */}
        </div>
      }




      <div >
        {
          tab === 1 ? (

            <div className="inputMedsId" >
              <input onChange={(e) => setMedicine({ ...medicine, MedicineName: e.target.value })}
                placeholder="Medicine ID" className="input_" />
              <br />
              <button className="addBtn" onClick={() => add()} >
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
