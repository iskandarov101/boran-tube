import React from 'react';
import { Stack } from '@mui/material'
import { colors } from '../constants/colors';
import { category } from '../constants';


const Category = ({ selectedHandler, selected }) => {

  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
      {category.map(item => (
        <button
          onClick={() => selectedHandler(item.name)}
          key={item.name}
          className='category-btn'
          style={{
            borderRadius: '0',
            background: item.name === selected && colors.secondary, color: item.name === selected && '#fff'
          }}>
          <span style={{ color: item.name === selected ? "#fff" : colors.secondary, marginRight: "15px" }}>{item.icon}</span>
          <span style={{ opacity: '1' }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category;