import FlexBetween from '@/compponents/FlexBox';
import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import PixIcon from '@mui/icons-material/Pix';
import { Link } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState('dashboard');

    return (
        <FlexBetween mb='.25rem' p='.25rem 0rem' color={palette.grey[300]} >
            {/* Left side */}
            <FlexBetween >
                <PixIcon />
                <Typography variant='h4' fontSize='16px' >
                    Finanseer

                </Typography>
            </FlexBetween>
            <FlexBetween gap='2rem' >
                <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                    <Link to='/' onClick={() => setSelected('dashboard')}
                    style={{color: selected === 'dashboard' ? "inherit" : palette.grey[700], textDecoration: 'none',}}>
                        Dashboard
                    </Link>
                </Box>

                <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                    <Link to='/' onClick={() => setSelected('predications')}
                    style={{color: selected === 'predications' ? "inherit" : palette.grey[700], textDecoration: 'none',}}>
                        Predications
                    </Link>
                </Box>

            </FlexBetween>
            
        </FlexBetween>
    )
}

export default Navbar;