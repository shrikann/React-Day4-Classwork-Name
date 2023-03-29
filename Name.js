import { Button, FormControl, InputLabel,MenuItem,Select } from '@mui/material';
import React from 'react'
import { useState } from 'react';
function Name(){
  const [name,setName] = useState('');
  const [car,setCar] = useState('');
  const [msg,setMsg] = useState('');


  const setSubmit = (event) => {
    event.preventDefault();

    setMsg(`Hello,${name}! Your favorite CAR is ${car}`);
    setName('');
    setCar('');
  };
  return (
    <div style={{marginTop:"200px"}}>
      <form onSubmit={setSubmit}>
        <input
        type="text"
        name="name"
        style={{width:300}}
        value={name}
        placeholder="Name"
        onChange={(event) =>
          setName(event.target.value)
        }
        />
        <br/><br/>
        <FormControl style={{width:300}}>
        <InputLabel variant="standard">Choose a car
        </InputLabel>
        <Select 
        placeholder="choose a Car"
        value={car}
        onChange={(event) =>
          setCar(event.target.value)
        }
        >
          <MenuItem value={"Supra"}>Supra</MenuItem>
          <MenuItem value={"SupraMk2"}>SupraMk2</MenuItem>
          <MenuItem value={"SupraMk3"}>SupraMk3</MenuItem>
          <MenuItem value={"SupraMk4"}>SupraMk4</MenuItem>
          <MenuItem value={"GTR"}>GTR</MenuItem>
        </Select>
        </FormControl>
        <br/><br/>
        <br/><br/>
        <Button variant="contained" type="submit">Submit</Button>
        <br/><br/>
        <h2>{msg}</h2>
      </form>
    </div>
  )
};

export default Name