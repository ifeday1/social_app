import { makeStyles } from "@material-ui/styles";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./post.css"

const useStyles = makeStyles({
})

const Post =() => {
  const classes = useStyles ();
  return (
    <Card className="card">
    <CardActionArea>
    <CardMedia className="media" 
    src="https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    title="My Post"
    />
    <CardContent>
    <Typography variant="h5">My First Post</Typography>
    <Typography variant="body2">lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions>
    <Button size="small" color="primary">Share</Button>
    <Button size="small" color="primary">Learn More</Button>
    </CardActions>
    </Card>
  );
}

export default Post;