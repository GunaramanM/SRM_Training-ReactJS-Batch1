import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';


export default function ValidFormik() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        email : Yup.string().email("Invalid Email").required("Pls Enter a Email"),
        age:Yup.number().typeError("Enter a valid age").min(20," Minimum Age is 20").max(90,"Max age is 90"),
        phonenumber : Yup.string().matches(phoneRegExp,"Phone number is invalid")
    }) 

    // const [user,setUser] = useState({});
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            email:'',
            phonenumber: ''
        },
        validationSchema,
        onSubmit(values) {
            console.log("Submitted");
            console.log(values);
        }
    }) 

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name</label>
                    <input type="text"  name="firstname" onChange={handleChange} values={values.firstname}/>
                    {errors.firstname ? errors.firstname : null }
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={handleChange} values={values.lastname}/>
                    {errors.lastname ? errors.lastname : null}
                </div>

                <div>
                    <label>Age</label>
                    <input type="number" color="red" name="age" onChange={handleChange} values={values.age}/>
                    {errors.age ? errors.age : null}
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleChange} values={values.email} color="red"/>
                    {errors.email ? errors.email : null}
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phonenumber" onChange={handleChange} values={values.phonenumber}/>
                    {errors.phonenumber ? errors.phonenumber : null}
                </div>

                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}