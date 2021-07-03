mport React,{useState} from 'react'
import Err from './Err'


export default function Validation(props) {

    const initialValues = {

        roll:'',
        fname:'',
        lname:'',
        ffname:'',
        dept:'',
        bat:'',
        mob:0,
        age:0,
        mail:''
    };

    const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setformErrors] = useState({});
  
  const [submitted, setSubmitted] = useState(false);

    const handleonSubmit = (e) => {
        e.preventDefault();
         setformErrors(validate(formValues));
    
         console.log(formValues);
        console.log("Submitted");
    
    
        console.log("===" + Object.entries(formErrors).length)
    
        setSubmitted(true);
        if (Object.entries(formErrors).length === 0) {
         setSubmitted(true);
        } else setSubmitted(false);
    
        //props.onUserAdd(formValues);
      };
    
    const handleOnChange = (event) => {
        const {name,value} = event.target;
        //  if (name === 'fname'){
        //      setUser({
        //          fnme:value,
        //          lnme:user.lnme
        //      });
        //  } else {
        //      setUser({
        //          lnme:value,
        //          fnme:user.fnme
        //      });
        //  }
        // console.log(name);
        // console.log(value);

        setFormValues((prevstate) => {
            return {
                ...prevstate,
                [name]:value
            }
        })  
        console.log(formValues)      
    }
    const validate = (values) => {
        let errors = {};
        console.log(values);
    
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(values.roll=='')
        {
            errors.roll="Roll no cannot be empty"
        }
        
        if(values.fname=='')
        {
            errors.fname="First name cannot be empty"
        }
        if(values.ffname=='')
        {
            errors.ffname="Father's name cannot be Empty"
        }
        
        if(values.dept=='')
        {
            errors.dept="Please Select Department"
        }
        if(values.bat=='')
        {
            errors.bat="Please Select Batch "
        }
        
        if(values.mob==0)
        {
            errors.mob="Mobile no Cannot be Empty"
        }else if((isNaN(values.mob))){
            errors.mob="Enter numbers only"
        }
        if(values.age==0)
        {
            errors.age="Age cannot be Empty"
        }else if(values.age<18 ||values.age>35)
        {
            errors.age="Enter Age in Specified range"
        }else if((isNaN(values.age)))
        {
            errors.age="Age can be only number"
        }
        
        if (!values.mail) {
            errors.mail = "Mail id cannot be empty";}
        //   } else if (!((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]$/i).test(values.mail)) {
        //     errors.mail = "Invalid email format";
        //   }
    
        return errors;
      };
    



    
    return (
        <div>
            <h1><center>Students Form</center></h1>
            
           <form onSubmit={handleonSubmit} noValidate>
           {(Object.entries(formErrors).length===0) && submitted && <div> Form Gets Submitted Sucessfully </div>}
                <div>
                    <label>Roll No</label>
                    <input type="text" name="roll" value={formValues.roll} id="roll" onChange={handleOnChange}/>
                    {
                        formErrors.roll && <span className="errors">{formErrors.roll}</span>
                    }
                    
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" name="fname" value={formValues.fname} id="fname" onChange={handleOnChange}/>
                    {
                        formErrors.fname && <span className="errors">{formErrors.fname}</span>
                    }
                    
                </div>
                <div>
                    <label>Last Name</label>
                    
                    <input type="text" name="lname" value={formValues.lname} id="lname"onChange={handleOnChange}/>
                    {
                        formErrors.lname && <span className="errors">{formErrors.lname}</span>
                    }
                    
                </div>
                <div>
                    <label>Fathers Name</label>
                    <input type="text" name="ffname" value={formValues.ffname} id="ffname"onChange={handleOnChange}/>
                    {
                        formErrors.ffname && <span className="errors">{formErrors.ffname}</span>
                    }
                </div>
                <div>
                    <label>Department</label>
                    <select  name="dept" value={formValues.dept} id="dept"onChange={handleOnChange}>
                        <option value="ece" >Electronics and Communication Engineering</option>
                        <option value="eee" >Electrical and Electronics Engineering</option>
                        <option value="cse" >Computer Science Engineering</option>
                        <option value="mech" >Mechanical Engineering</option>
                        <option value="civil" >Civil Engineering</option>
                        <option value="it" >Information Technology</option>
                        
                    </select>
                    {
                        formErrors.dept && <span className="errors">{formErrors.dept}</span>
                    }
                </div>
                <div>
                    <label>Batch</label>
                    <select  name="bat" value={formValues.bat} id="bat"onChange={handleOnChange}>
                        <option value="1822" >2018 - 2022</option>
                        <option value="1721" >2017 - 2021</option>
                        <option value="1620" >2016 - 2020</option>
                        <option value="1519" >2015 - 2019</option>
                        <option value="1418" >2014 - 2018</option>
                        <option value="1317" >2013 - 2017</option>
                        
                    </select>
                    {
                        formErrors.bat && <span className="errors">{formErrors.bat}</span>
                    }
                </div>
                <div>
                    <label>Mobile No</label>
                    <input type="text" name="mob" value={formValues.mob} id="mob"onChange={handleOnChange}/>
                    {
                        formErrors.mob && <span className="errors">{formErrors.mob}</span>
                    }
                </div> 
                <div>
                    <label>Age</label>
                    <input type="text" name="age" value={formValues.age} id="age"onChange={handleOnChange}/>
                    {
                        formErrors.age && <span className="errors">{formErrors.age}</span>
                    }
                </div>
                <div>
                    <label>Email id</label>
                    <input type="text" name="mail" value={formValues.mail} id="mail"onChange={handleOnChange}/>
                    {
                        formErrors.mail && <span className="errors">{formErrors.mail}</span>
                    }
                </div>
                 <div>
                    <button value="submit" className="but" ><strong>Submit</strong></button>
                </div> 
                
            </form> 
        </div>
    )
}
