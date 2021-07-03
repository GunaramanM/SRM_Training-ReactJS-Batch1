import React, { useState } from "react";
import Select from "react-select";
export default function weather() {

  const details = [
    {
      Temp: "34'c",
      humidity: "75%",
      precip: "14%",
      wind: "4km/h",
      label: "chennai"
    },
    {
      Temp: "36'c",
      humidity: "78%",
       precip: "13%" ,
      wind: "5km/h",
      label: "Banglore"
    },
    {
      Temp: "38'c",
      humidity: "70%",
      precip: "12%",
      wind: "3km/h",
      label: "Mumbai"
    },
    {
      Temp: "38'c",
      humidity: "75%",
      precip: "14%",
      wind: "4km/h",
      label: "Kolkatta"
    },
    {
      Temp: "36'c",
      humidity: "80%",
      precip: "14%",
      wind: "4km/h",
      label: "Delhi"
    },
    {
      Temp: "39'c",
      humidity: "60%",
      precip: "12%",
      wind: "3.5km/h",
      label: "Hyderabad"
    },
  ];
  const [data, setData] = useState(details.Temp);
  const [ref, setref] = useState(details.humidity);
  const [obj, setobj] = useState(details.precip);
  const [abc, setabc] = useState(details.wind);
  const handleChange = (event) => {
    setData(event.Temp);
    setref(event.humidity);
    setobj(event.precip);
    setabc(event.wind);
  };


  return (
    <div>
     <center><h1>Weather Report</h1></center> 
      <br></br>
      <div style={{ width: "40%", marginLeft: "30%" }}>


        <Select name="city" options={details} onChange={handleChange} />
        <br></br>
        {data ? (
          <center>
         <p fontSize='12' color='red'>Temp: {data}
         <p fontSize='12' color='red'>Humidity: {ref}</p> 
          <p fontSize='12' color='red'>Wind : {abc}</p>
           <p fontSize='12' color='red'> precip: {obj}</p>
           </p>  
           </center>
        ) : (
          <p>Select any City to know the weather report</p>
        )}

      </div>

    </div>

  )
}
