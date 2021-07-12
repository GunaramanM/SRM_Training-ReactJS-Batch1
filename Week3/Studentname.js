import { values } from 'lodash';
import React, { useState, useEffect } from 'react'
// import Select from 'react-select'
import cityy from './cityy.json'





export default function Studentname() {

  const [Values, setValues] = useState({
    Studentname: "",
    campus: "-1",
    Studentdept: "",
    StudentID:""

  });


  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(setValues);
    alert("Submitted");

  }
  useEffect(() => {



    fetch("http://localhost:4000/citynames").then(res => res.json()).then(data => {

      setCities(data);
    }).catch(error => {
      console.log(error);

    }).finally(error => {
      console.log("finally is executed");
    })
  }, []);

  const handleOnChange = (event) => {


    const { name, value } = event.target;

    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    console.log(Values);
  };

  const [cities, setCities] = useState([]);
  return (
    <div className="app1">
      <div className="app">

        <form onSubmit={handleOnSubmit} noValidate>
          <h1 >STUDENT FORM</h1>
          <label>Studentname</label><br></br>
          <input type="text" name="Studentname" values={values.Studentname} onChange={handleOnChange}></input><br></br>
          <label>Student ID</label><br></br>
          <input type="text" name="StudentID" values={values.Studentdept} onChange={handleOnChange}></input>
      <br></br>
      <label>StudentDept</label><br></br>
          <input type="text" name="Studentdept" values={values.Studentname} onChange={handleOnChange}></input><br></br>
          <div>campus</div>
          <div>

            <select name="campus" onChange={handleOnChange} value={Values.city}>

              <option value={values.city}>Please select the campus</option>
              {cities.map((x) => {
                return <option key={x.id} value={x.id}>{x.cities}</option>;
              })}

            </select>
          </div>
          <br></br>

          <button type="submit">Submit</button>



        </form>

      </div>
    </div>
  )
}
