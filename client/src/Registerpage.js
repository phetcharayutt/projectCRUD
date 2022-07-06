import React from 'react';
import { useForm } from "react-hook-form";
import { Link, } from "react-router-dom";


import "./App.css";

export default function App() {
  const {
    register,handleSubmit,
    formState: { errors }
  } = useForm();
  
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };


  const onSubmit = (data) => {
    
    console.log(JSON.stringify(data))
fetch('http://localhost:3333/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'ok'){
          window.location = '/Loginpage'
            alert('Register sucess')
        }else {
            alert('Register filed')
        }
      
      })
      .catch((error) => {
        console.error('Error:', error);
      });};















  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label>First Name</label>
      <input
        id="firstname"
        {...register("firstname", {
          required: true,
          maxLength: 20,
          pattern:/^[A-Za-z-](?=.*)(?!.*\W).{1,20}$/
        })}/>
      {errors?.firstname?.type === "required" && <p>This field is required</p>}
      {errors?.firstname?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
      {errors?.firstname?.type === "pattern" && (<p>Alphabetical characters only</p>
      )}
      <label>Last Name</label>
      <input 
        id="lastname" 
        {...register("lastname", { 
        required: true,
        maxLength: 20,
        pattern: /^[A-Za-z-](?=.*)(?!.*\W).{1,}$/
        })} />
      {errors?.lastname?.type === "required" && <p>This field is required</p>}
      {errors?.lastname?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
      {errors?.lastname?.type === "pattern" && (<p>Alphabetical characters only</p>
      )}    
     <label>username</label>
       <input 
        id="username"
        {...register("username", {
          required: true,
          maxLength: 12,
          pattern: /^[_A-Za-z0-9-](?=.*)(?!.*\W).{1,12}$/
        })}
      />
      {errors?.username?.type === "required" && <p>This field is required</p>}
      {errors?.username?.type === "maxLength" && (
        <p>username cannot exceed 12 characters</p>
      )}
      {errors?.username?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
     <label>password</label>
      <input 
      name="password" 
      type="password" 
      id="password" 
      {...register("password", { 
        required: true,
        min: 5,
        pattern: /^[A-Za-z0-9-](?=.*)(?!.*\W).{5,}$/
        })} />
      {errors?.password?.type === "required" && <p>This field is required</p>}
      {errors?.password?.type === "min" && (
        <p>username cannot exceed 6 characters</p>
      )}
      {errors?.password?.type === "pattern" && (
        <p>can not contain any other special character.</p>
      )}
      <input type="submit" />
      <Link className='sad'  to="/Loginpage"  >Already have an account? Log In</Link>
    </form>

  );
}

