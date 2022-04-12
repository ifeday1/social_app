import { makeStyles } from '@material-ui/styles';
import { Container } from '@mui/material';
import "./feed.css"
import Post from './Post';

const useStyles = makeStyles({
})

const Feed =() => {
  const classes = useStyles ();
  return (
    <Container className='container2'>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Container>
  );
}

export default Feed;
