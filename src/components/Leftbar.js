import { makeStyles } from '@material-ui/styles';
import { AppBlocking, Camera, ChildFriendly, Collections, Home, ListAlt, Logout, Sell, Settings, VideocamOff } from '@mui/icons-material';
import { AppBar, Container, List, Typography } from '@mui/material';
import "./leftbar.css"

const useStyles = makeStyles({
})

const LeftBar =() => {
  const classes = useStyles ();
  return (
    <Container className='container'>
    <div className='item'>
    <Home className='icon'/>
    <Typography className='text'>Homepage</Typography>
    </div>
    <div className='item'>
    <ChildFriendly className='icon'/>
    <Typography className='text'>Friend</Typography>
    </div>
    <div className='item'>
    <ListAlt className='icon'/>
    <Typography className='text'>List</Typography>
    </div>
    <div className='item'>
    <Camera className='icon'/>
    <Typography className='text'>Camera</Typography>
    </div>
    <div className='item'>
    <VideocamOff className='icon'/>
    <Typography className='text'>Video</Typography>
    </div> 
    <div className='item'>
    <AppBlocking className='icon'/>
    <Typography className='text'>Apps</Typography>
    </div> 
    <div className='item'>
    <Collections className='icon'/>
    <Typography className='text'>Collections</Typography>
    </div> 
    <div className='item'>
    <Sell className='icon'/>
    <Typography className='text'>Market Place</Typography>
    </div> 
    <div className='item'>
    <Settings className='icon'/>
    <Typography className='text'>Settings</Typography>
    </div> 
    <div className='item'>
    <Logout className='icon'/>
    <Typography className='text'>Logout</Typography>
    </div> 
    </Container>
  );
}

export default LeftBar;
