import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 6,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rootbtn: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function NewFileData() {
  const classes = useStyles;

  const [content, setContent] = useState('Enter something');
  const [date, setDate] = useState('');
  const [posts, setposts] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    // alert(`hi ${content}  ${date}`)
    setposts(content);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar> */}

      <form onSubmit={submitHandler}>
        <TextField
          type='text'
          id='outlined-basic'
          variant='outlined'
          placeholder='City Name'
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          type='text'
          id='outlined-basic'
          variant='outlined'
          placeholder='Country Name'
        />
        <TextField
          type='date'
          id='outlined-basic'
          variant='outlined'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button
          className={classes.rootbtn}
          variant='contained'
          color='primary'
          type='submit'
        >
          {' '}
          Primary
        </Button>
      </form>
      <br />
      {posts.map((post) => (
        <h3>{post}</h3>
      ))}
    </div>
  );
}
