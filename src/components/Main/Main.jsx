import React, { useEffect } from 'react';
import { useState } from 'react';
import { colors } from '../constants/colors';
import { Stack, Box, Container, Typography, } from '@mui/material';
import Category from '../Category/Category';
import Videos from '../Videos/Videos';
import { ApiService } from '../../service/api.service'


const Main = () => {

  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState([])
  const selectedHandler = (category) => setSelected(category)

  useEffect(() => {
    ApiService.fetching(`search?part=snippet&q=${selected}`)
      .then(res => setVideos(res.items, 'nimagap'))
      .catch(error => console.log(error.message, 'catched error342432'))
  }, [selected])

  return (
    <Stack >
      <Category selectedHandler={selectedHandler} selected={selected} />
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={"bold"} mb={2}>
            {selected} <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main;