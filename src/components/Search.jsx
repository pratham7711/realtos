import React from 'react'
import styles from './Search.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const currencies = [
    {
        value:'Select Category',
        lable:'Select Category',
    },
    {
      value: 'Greater Nodia',
      label: 'Greater Noida',
    },
    {
      value: 'Delhi',
      label: 'Delhi',
    },
    {
      value: 'Ghaziabad',
      label: 'Ghaziabad',
    },
    {
      value: 'Noida',
      label: 'Noida',
    },
  ];
  

const Search = () => {

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        color:"white",
        backgroundColor: '#313190',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: 'white',
          borderColor: '#313190',
          color:"#313190",
          border:'1px groove #313190'
        },
        '&:focus': {
            color:"white",
            backgroundColor: '#313190',    
        },
      });
      
    return (
    <div className={styles.container}>
        <div className={styles.item}>
        <h3>Category</h3>
        <TextField
          id="standard-select-category"
          select
          label="Select Category"
          variant="standard"
        //   InputProps={{ disableUnderline: true }}
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className={styles.item}>
        <h3>Location</h3>
        <TextField
          id="standard-select-currency"
          label="Please Enter Location"
          variant="standard"
        //   InputProps={{ disableUnderline: true }}
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className={styles.item}>
        <h3>Bedroom</h3>
        <TextField
          id="standard-select-currency"
          select
          label="Bedroom"
          variant="standard"
        //   InputProps={{ disableUnderline: true }}
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <BootstrapButton><SearchIcon fontSize='large'/></BootstrapButton>
    </div>
  )
}

export default Search