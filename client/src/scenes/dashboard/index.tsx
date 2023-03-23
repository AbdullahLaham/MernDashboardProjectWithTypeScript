import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  const {palette} =  useTheme();  
  const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
  `;
  const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
  `;

  const isAboveMeddiumScreens = useMediaQuery("(min-width: 1200px)");
  const isMeddiumScreens = useMediaQuery("(min-width: 800px)");

  return (
    <Box color={palette.grey[300]} width='100%' height={'100%'} display='grid' gap='1.5rem' 
    sx={
        isAboveMeddiumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
          >
        <Box bgcolor={'#fff'} gridArea='a' >

        </Box>
        <Box bgcolor={'#fff'} gridArea='b' >
            
        </Box>
        <Box bgcolor={'#fff'} gridArea='b' >
            
        </Box>
        <Box bgcolor={'#fff'} gridArea='c' >
            
            </Box>
        <Box bgcolor={'#fff'} gridArea='d' >
            
            </Box>
        <Box bgcolor={'#fff'} gridArea='e' >
            
            </Box>
        <Box bgcolor={'#fff'} gridArea='f' >
            
            </Box>
        <Box bgcolor={'#fff'} gridArea='g' >
            
            </Box>
        <Box bgcolor={'#fff'} gridArea='h' >
            
        </Box>
        <Box bgcolor={'#fff'} gridArea='i' >
            
        </Box>
        <Box bgcolor={'#fff'} gridArea='j' >
            
        </Box>
    </Box>
  )
}

export default Dashboard;

// `${isAboveMeddiumScreens ? "repeat(3 , minmax(370px, 1fr))" : isMeddiumScreens ? "repeat(2 , minmax(500px, 1fr))" : "repeat(1 , 1fr)"}`