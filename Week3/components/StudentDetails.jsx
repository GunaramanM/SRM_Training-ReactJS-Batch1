import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import {  getstudents } from "../services/api";


const useStyle = makeStyles({
    table:'90%',
    margin:'50px 0 0 50px'
})


const StudentDetails =() => {
    const [users, setstudents] = useState([]);
    const classes = useStyle();
    useEffect(() => {
        getStudentDetails();
    }, [])

    const getStudentDetails = async () => {
        const response = await getstudents();
        console.log(response);
        setstudents(response.data)
    }

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>RollNo</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>PhoneNo</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.rollno}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                    ))
                }
               
            </TableBody>
        </Table>
    )
}
export default StudentDetails;