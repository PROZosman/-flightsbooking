import React from 'react';
import "./style.css";
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Container from '@mui/material/Container';


const Navbar = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>

            <Container fixed>

                <div className='public_nav'>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={2}>
                            <div className='public_logo'>
                                <picture><img src="./img/mainlogo.png" alt="" /></picture>
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <div className='public_menu'>
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/holidays">Holidays</NavLink></li>
                                    <li><NavLink to="/flightinfo">Flight Info</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>

                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={5}>

                            <div className='nav_last'>
                                <div className='public_search'>
                                    <FiSearch />
                                </div>

                                <div className='language'>

                                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">language</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={age}
                                            onChange={handleChange}
                                            label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>EN-US</MenuItem>
                                            <MenuItem value={20}>BAN</MenuItem>
                                            <MenuItem value={30}>CH</MenuItem>
                                        </Select>
                                    </FormControl>

                                </div>

                                <div className='public_btn'>
                                    <Button variant="outlined">Sign In</Button>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </div>

            </Container>

        </>
    )
}

export default Navbar;
