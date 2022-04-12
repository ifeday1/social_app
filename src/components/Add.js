import { makeStyles } from '@material-ui/styles';
import { Add as AddIcon } from '@mui/icons-material';
import { Alert, Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';
import "./add.css"


const useStyles = makeStyles({
})

// function Alert(props){
//   return <MuiAlert elevation={6} variant="filled" {...props} />
// }

const Add =() => {
  const classes = useStyles ();
  const [open, setOpen]= useState(false);
  // const [openAlert, setOpenAlert] = useState=(false);

  // const handleClose = (event, reason) =>{
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpenAlert(false)
  // }

  return (
   <div>
   <Tooltip title="Add" aira-label="add" onClick={()=> setOpen(true)}>
   <Fab color='primary' className='fab'>
   <AddIcon/>
   </Fab>
   </Tooltip>
   <Modal open={open}>
   <Container className='contain'>
   <form className='form' autoComplete="off">
   <div className='items'>
   <TextField id='standard-basic' label="Title" size='small' style={{width:"100%"}} />
   </div>
   <div className='items'>
   <TextField id='outlined-multiline-static'
   multiline rows={4}
   defaultValue="Tell your story"
   variant='outlined'
   label="Descriprion" size='small' style={{width:"100%"}} />
   </div>
   <div className='items'>
   <TextField select label="visibility" value="Public">
   <MenuItem value="Public">Public</MenuItem>
   <MenuItem value="Private">Private</MenuItem>
   <MenuItem value="Unlisted">Unlisted</MenuItem>
   </TextField>
   </div>
   <div className='items'>
   <FormLabel component="legend" >Who can comment</FormLabel>
   <RadioGroup aria-label='gender' name='gender1'> 
   <FormControlLabel value="Everybody" control={<Radio size='small'/>}  label="Everybody "/>
   <FormControlLabel value="My Friends" control={<Radio size='small'/>}  label="My Friends"/>
   <FormControlLabel value="Nobody" control={<Radio size='small'/>}  label="Nobody"/>
   <FormControlLabel value="custom"  disabled control={<Radio size='small'/>}  label="Custom (Premium)"/>
   </RadioGroup>
   </div>
   <div className='items'>
   <Button variant='outlined' color='primary' style={{marginRight:20}}>Create</Button>
   <Button variant='outlined' color='secondary' onClick={()=> setOpen(false)}>Cancel</Button>
   </div>
   </form>
   </Container>
   </Modal>
   
   </div>
  );
}

export default Add;
