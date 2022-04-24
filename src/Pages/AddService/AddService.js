import { useForm } from "react-hook-form";
import React from 'react';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/services",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25 mx-auto mt-4">
      <input className="mt-3" placeholder="Enter Name" {...register("name", { required: true, maxLength: 20 })} />
      <input className="mt-3" placeholder="Enter Photo URL " {...register("img", { required: true} )} />
      <input className="mt-3" placeholder="Enter Price" type="number" {...register("price", { required: true})} />
      <input className="mt-3" placeholder="Enter description"  {...register("description", { required: true})} />
      <input className="mt-3" type="submit" />
    </form>
  );
} 
 


export default AddService;