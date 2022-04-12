import { makeStyles } from '@material-ui/styles';
import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import "./rightbar.css"

const useStyles = makeStyles({
})

const Rightbar =() => {
  const classes = useStyles ();
  return (
    <Container className='container1'>
    <Typography>  Online Friends </Typography>
    <AvatarGroup max={4}>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Avatar alt='ife' src=" https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </AvatarGroup>
    <Typography> Gallery </Typography>
    <ImageList rowHeight={160} className="imageList" cols={3}>
    <ImageListItem>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2P3UC6DhbbSJD6t4ZYXJeVIkqTZtuQqdn1Um59jlTOWG0fywIsYvN68jJ1KV_WqnPs&usqp=CAU' alt='' />

    </ImageListItem>
    </ImageList>
  </Container>
  );
}

export default Rightbar;
