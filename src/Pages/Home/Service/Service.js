import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price,id} = service;
    const navigate=useNavigate()
const handleDetails=(id)=>{
navigate(`/service/${id}`)
}
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleDetails(id)} className='btn' style={{backgroundColor:"#00004d",color:"white"}}>Book: {name}</button>
        </div>
    );
};

export default Service;