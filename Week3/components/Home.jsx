import { Box, makeStyles, Typography } from '@material-ui/core';
import school1 from '../assests/images/school1.jpg';
import school2 from '../assests/images/school2.jpg';

const useStyle = makeStyles({
    image:{
        
        height:'25%',width:'50%'
    },
    components:{
        margin:70
    }
})  

const Home = () => {
    const classes=useStyle();
return(
    <box className={classes.components}>
        <Typography variant="h4" style={{marginLeft:350}}>Kekran Mekran group of Schools</Typography>
    <Box style={{display:'flex'}}>
        <img style={{marginLeft:300}}className={classes.image} src={school2} />
        </Box>
        <Box>
        <Typography variant="h6" style={{marginLeft:350}}>Newly build campus with good infrastructure</Typography>
        <Box>
        <img style={{marginLeft:300}} className={classes.image} src={school1} /></Box>
    </Box>
</box>
)
}

export default Home;