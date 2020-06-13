import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  Typography,
  IconButton,
  Grid,
  Paper,
  Button,
  FormGroup,
  Switch,
  CardMedia,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#8276ff',
    },
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  gridRoot: {
    flexGrow: 1,
  },
  title: {
    fontSize: 19,
    color: '#000',
  },
  pos: {
    marginBottom: 12,
  },
  iconColor: {
    color: '#8276ff',
    fontSize: 35,
  },
  editButton: {
    backgroundColor: '#8276ff',
    color: '#fff',
    marginBottom: '2px',
  },
  previewButton: {
    backgroundColor: 'transparent',
    color: '#8276ff',
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <div className='col-md-4'>
        <Paper>
          {' '}
          <div style={{ cursor: 'pointer' }}>
            <Card
              //className={classes.root}
              variant='outlined'
              style={{
                backgroundColor: '#f8f9fb',
                borderStyle: 'dashed',
                borderWidth: 1,
                borderRadius: '3px',
                borderColor: '#CFCFCF',
              }}
            >
              <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
                style={{ minHeight: '200px', marginBottom: 10 }}
              >
                <IconButton>
                  <img src='media/images/Plus Icon.svg' alt='' />
                </IconButton>
                <Typography className={classes.title} color='textSecondary'>
                  Create New Page
                </Typography>
              </Grid>
            </Card>
          </div>
        </Paper>
      </div>
    </div>
  );
}
