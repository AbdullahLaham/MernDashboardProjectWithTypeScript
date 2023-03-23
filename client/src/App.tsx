import { useMemo, useState } from 'react'

import '@/App.css'
import { createTheme } from '@mui/system'
import { themeSettings } from './theme'
import { ThemeProvider } from '@emotion/react'
import { Box, CssBaseline } from '@mui/material'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '@/scenes/navbar'
import Dashboard from '@/scenes/dashboard';
import Predecations from '@/scenes/predecations';
function App() {
  const theme = useMemo(():any => {
    return createTheme(themeSettings);
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <Box width='100%' height={'100%'} padding='1rem 2rem 4rem 2rem' >
            <Navbar />
            
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/predications' element={<Predecations />} />
            </Routes>

          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
