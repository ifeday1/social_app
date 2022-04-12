import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles({
})

const Navbar =() => {
  const classes = useStyles ();
  return (
    <AppBar>
    <Toolbar>
    <Typography variant='h6' className={classes.logolg}>
    Ifeday
    </Typography>
    </Toolbar>
     </AppBar>
  );
}

export default Navbar;
