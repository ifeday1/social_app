import { makeStyles } from '@material-ui/styles';
import { Mail, NotificationAdd, Search } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import "./Navbar.css"

const useStyles = makeStyles({

})

const Navbar =() => {
  const classes = useStyles ();
  return (
    <AppBar position='fixed'>
    <Toolbar className='toolbar'>
    <Typography variant='h6' className={classes.logolg}>
    Ifeday
    </Typography>
    <div className='search'>
    <Search/>
    <InputBase placeholder='Search...' className='input'/>
    </div>
    <div className='icons'>
    <Badge badgeContent={4} color="secondary" className='badge'>
    <Mail></Mail>
    </Badge>
    <Badge badgeContent={2} color="secondary" className='badge'>
    <NotificationAdd/>
    </Badge>
    <Avatar alt='pic' src='https://www.instagram.com/p/CQkMi8OjXUb/'/>
    </div>

    </Toolbar>
     </AppBar>
  );
}

export default Navbar;
