import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from 'react-router-dom';
import ViewCard from './ViewCard';
const View = (props) => {
    let id=useLocation().state;
    console.log('view_id',id)

    return (
        <div className='container text-center'>
            <ViewCard id={id} />
        </div>
        
    );
}





export default View;
