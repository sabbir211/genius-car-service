import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/services/${id}`,{
            method:"delete",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>=1){
                alert(" document deleted successfully")
            const restServices=services.filter(element=>element._id!==id)
            setServices(restServices)
            }
        
        })
        }
    return (
        <div id='services' className='container'>
            <div className="row">
            <h1 className=' text-center mt-5' style={{color:"#00004d"}}> Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    handleDelete={handleDelete}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;