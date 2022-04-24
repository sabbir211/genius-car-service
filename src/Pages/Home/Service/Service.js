import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service,handleDelete}) => {
    const {name, img, description, price,_id} = service;
    const navigate=useNavigate()
const handleDetails=(id)=>{
navigate(`/service/${id}`)
}



    return (
        <div className='h-100'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:$ {price}/Day</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleDetails(_id)} className='btn me-2' style={{backgroundColor:"#00004d",color:"white"}} >Book: {name}</button>
            <button onClick={()=>handleDelete(_id)} className='btn' style={{backgroundColor:"#00004d",color:"white"}}> Delete</button> 

         </div>
    );
};

export default Service;