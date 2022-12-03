import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import { colors } from '../constants/colors';
import SearchBar from '../SearchBar/SearchBar';


const Navbar = () => {
  return (
    <Stack direction={"row"}
      alignItems={'center'}
      justifyContent={'space-between'} p={2}
      sx={{ position: 'sticky', top: 0, zIndex: 99, background: colors.primary }}>
      <Link to={'/'} sx={{ cursor: "pointer" }} >
        <h2 height={30}>Logo</h2>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar;