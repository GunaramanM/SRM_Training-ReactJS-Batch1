import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import {  addStudent } from "../services/api";

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& >*' :{
            marginTop: 20
        }
    }
})

const initialValues= {
    name: '',
    rollno: '',
    email: '',
    phone: ''
}

const AddStudent =() => {
    const [user, addStudent] = useState(initialValues);
    const {name, rollno,email, phone }=user;
    const classes=useStyle();

    const onValueChange =(e) => {
      
        addStudent({ ...user,[e.target.name]: e.target.value})
       
    }
    const studentDetails= async ()=>{
        await addStudent(user);
    }

    return(
        <FormGroup className={classes.container} >
            <Typography>Add Students</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>RollNo</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='rollno' value={rollno} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>PhoneNo</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <Button variant="contained" onClick={()=>studentDetails()} color="primary">Add Student</Button>

        </FormGroup>
    )
}
export default AddStudent;