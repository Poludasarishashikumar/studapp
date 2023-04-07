import React,{useState} from 'react';
import Card from './UI/Card';
import Swal from "sweetalert2";
import Edit from './Edit';

// import classes from './Student.module.css';
import './Student.css';
// import SweetAlert from 'react-bootstrap-sweetalert';

import App from '../App';

const Student = (props) => {
  const [editIsShown, setEditIsShown] = useState(false);
  const [id,setId]=useState(props.Id1);
  const hideEditHandler = () => {
    setEditIsShown(false);
  };
  const addHandler=()=>{
    setEditIsShown(true);
  }
  async function deleteStudentHandler() {
    setId(props.Id1)
     await fetch('https://localhost:44325/api/DeleteStudents/'+id, {
      method: 'DELETE',
      
      
    }
    );
    Swal.fire({
      title: "Success",
      text: "Deletion successful",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
        // Redirect the user
        
        window.location.reload(true);
      });
    
  
  //  alert("Deleted Sucessfully");

    
  // Swal.fire({
  //   title: "Are you sure you want to delet this item?",
  //   text: "You will not be able to recover your data!",
  //   type: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#DD6B55",
  //   confirmButtonText: "Yes",
  //   closeOnConfirm: false
  // })
  // .then(willDelete => {
  //   if (willDelete) {
  //     // Redirect the user
  //     fetch('https://localhost:44325/api/DeleteStudents/'+id, {
  //     method: 'DELETE',
      
      
  //   }
  //   );
  //     window.location.reload(true);
  //   };
  // });
  
  // Swal({
  //   title: "Are you sure?",
  //   text: "You want to delete this user?",
  //   icon: "warning",
  //   dangerMode: true,
  // })
  // .then(willDelete => {
  //   if (willDelete) {
  //     // axios.post(`api_url/${this.state.user._id}`)
  //       .then(res => {
  //         Swal({
  //           title: "Done!",
  //           text: "user is deleted",
  //           icon: "success",
  //           timer: 2000,
  //           button: false
  //         })
  //     });
  //   }
  // });

    
    
  };
  
  return (
   
    
    <Card className='item'>
      <div className='item__description'>
      <div className='item__name'>{props.Id}</div>
        <h2>{props.firstName} {props.lastName}</h2>
        
        
       <div className='email__name'>{props.email}</div>
       <button onClick={deleteStudentHandler} >Delete</button>
       <button onClick={addHandler} >Edit</button>
       {editIsShown && <Edit onClose={hideEditHandler} Id={props.Id1}/>}
      </div>
    </Card>
    
    
  );
  
};

export default Student;
