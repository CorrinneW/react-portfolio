import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import About from './components/pages/About';
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <About />
      </ThemeProvider>
    </div>
  );
}

export default App;
