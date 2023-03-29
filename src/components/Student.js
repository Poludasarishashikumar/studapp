import React from 'react';
import Card from './UI/Card';
// import classes from './Student.module.css';
import './Student.css';

const Student = (props) => {
  
  return (
   
    
    <Card className='item'>
      <div className='item__description'>
      <div className='item__name'>{props.Id}</div>
        <h2>{props.firstName} {props.lastName}</h2>
        
        
       <div className='email__name'>{props.email}</div>
      </div>
    </Card>
    
    
  );
  
};

export default Student;
