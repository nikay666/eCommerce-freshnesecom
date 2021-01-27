import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import './App.css'
import { createTheme } from './Theme/themeSettings';
import { ButtonCustom } from './components/ButtonCustom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Search } from './components/Search';

function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Search/>
      <ButtonCustom typeIcon='left' icon={<ArrowBackIosIcon/>} variant='outlined' color='primary'>Click</ButtonCustom>
      <ButtonCustom typeIcon='right' icon={<ArrowForwardIosIcon/>}  variant='contained' color='primary'>Click</ButtonCustom>
      <ButtonCustom variant='contained' color='default'>Click</ButtonCustom>
      <ButtonCustom  color='default'>Click</ButtonCustom>
      

  
    </div>
    </ThemeProvider>
  )
}

export default App;
