import{ AppBar, Toolbar,  makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background:'#111111'
    },
    tabs: {
        // background:'#FFFFFF',
        color:'white',
        textDecoration:'none',
        margin:20,
        fontSize: 20
        
    }
})
const NavBar =() =>{
    const classes = useStyle();
return(
    <AppBar className={classes.header}position="static" >
        <Toolbar>
            <NavLink className={classes.tabs} to="./" exact >Home</NavLink>
            <NavLink className={classes.tabs} to="./student" exact >Student Details</NavLink>
            <NavLink className={classes.tabs} to="./add" exact >Add Student</NavLink>

        </Toolbar>
    </AppBar>
)
}
export default NavBar;