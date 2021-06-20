import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import './App.css';

const defaultFont = "'Montserrat', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#AD72A8',
      contrastText: '#ffe8eb'
    },
    secondary: {
      main: '#2A2B2F',
      contrastText: '#ffe8eb'
    },
    lightAccent: {
      main: '#D4B80E',
      contrastText: '#8A533F'
    },
    darkAccent: {
      main: '#8A533F',
      contrastText: '#ffe8eb'
    },
    background: {
      paper: '#ffe8eb'
    }
  },
  typography: {
    fontFamily: defaultFont
  }
})

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw'
  },
})


function App() {
  const classes = useStyles()
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <NavBar />
          <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
          </Router>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
