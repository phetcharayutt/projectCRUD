import React,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Profile() {
useEffect(() => {
const token = localStorage.getItem('token')
    fetch('http://localhost:3333/authen', {
    method: 'POST', 
    headers: {'Content-Type': 'application/json','Authorization': 'Bearer '+token}})
    .then(response => response.json())
  
    .then(data => {
      if(data.status === 'ok'){
       
        return 
      }else {
        alert('TOKEN failed')
        localStorage.removeItem('token');
        window.location = '/Loginpage'}});},[]);
        
        useEffect(() => {
        const username = localStorage.getItem('username')
        fetch('http://localhost:3333/read/:username=?', {
        method: 'GET', 
        headers: {'Content-Type': 'application/json','username': username}})
        .then(response => response.json())
        .then(data => {
        if(data.status === 'ok'){
          console.log(data)
        return 
        }else {
        alert('TOKEN failed')
        localStorage.removeItem('token');
        window.location = '/Loginpage'}});},[])  
          








const handlelogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = '/Loginpage'}



    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            
            <Button variant="contained" color="error" onClick={handlelogout}>logout</Button>

        </Toolbar>
      </AppBar>
     
    </Box>
  );
}
