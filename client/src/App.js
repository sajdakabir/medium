import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import medium from './images/medium.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';

function App() {
  const classes=useStyles();
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);


  return (
   <Container  maxWidth="lg">
      <AppBar className={classes.appBar}  position='static'  color='inherit'>
      <img className={classes.image}  src={medium} alt="medium" height="60" />
        <Typography className={classes.heading} variant='h2' align='center'>Medium</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
   </Container>
 
  )
}

export default App
