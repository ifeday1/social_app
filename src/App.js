import "./App.css"
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@mui/material';
import Feed from './components/Feed';
import LeftBar from './components/Leftbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Add from "./components/Add";

const useStyles = makeStyles({
})

function App() {

  return (
    <div>
    <Navbar/>
    <Grid container>
    <Grid item sm={2} xs={2}>
    <LeftBar/>
    </Grid>
    <Grid item sm={7} xs={10}>
    <Feed/>
    </Grid>
    <Grid item sm={3} className="right">
    <Rightbar/>
    </Grid>
    </Grid>
<Add/>
     </div>

  );
}

export default App;
