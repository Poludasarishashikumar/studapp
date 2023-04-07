import { useContext,useState ,useEffect} from 'react';
import Swal from "sweetalert2";
import Modal from './UI/Modal';

import classes from './Edit.module.css';
import BasicForm from './BasicForm';
import useInput from './hooks/use-input';

// const isNotEmpty = (value) => value.trim() !== '';
// const isEmail = (value) => value.includes('@' );

const Edit = (props) => {
  const [id,setId]=useState(null);
  const [firstNameValue,setFirstName]=useState('');
  const [lastNameValue,setLastName]=useState('');
  const [emailValue,setEmail]=useState('');


const firstNameChangeHandler=(event)=>{
  setFirstName(event.target.value);
}
const lastNameChangeHandler=(event)=>{
  setLastName(event.target.value);
}
const emailChangeHandler=(event)=>{
  setEmail(event.target.value);
}
console.log(props.Id);
useEffect(()=>{
  fetchStudentsHandler();
},[])
function fetchStudentsHandler(){
  setId(props.Id);
    const url='https://localhost:44325/api/Getstudents/'+props.Id;
    
    
      

       fetch(url).then((result)=>{
        result.json().then((resp)=>{
          setFirstName(resp.firstName)
          setLastName(resp.lastName)
          setEmail(resp.email)
        })
      })
    }
      // console.log(response);
      

//       const data =  response.json();
// console.log(data);
//       const transformedData = data.map((Data) => {
        
//         return {
//           studentId:Data.studentId,
//           id: Data.studentId1,
//           lastName: Data.lastName,
//           firstName: Data.firstName,
//           email: Data.email,
//           status:Data.recStatus,
//         };
//       });
//     }
      
     
//   async function addStudentHandler(student) {
//     const response = await fetch('https://localhost:44325/api/UpdateStudents', {
//       method: 'POST',
//       body: JSON.stringify(student),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if(response.status===404)
//     {
      
//       // // setEmailError(true);
//       // setTimeout(() => {setEmailError(true)}, 1000);
//       // setTimeout(() => {setEmailError(false)}, 4000);
      
//       alert("email already exists")
      
//     }
//     else{
//     const data = await response.json();
//     Swal.fire({
//       title: "Success",
//       text: "Created successfully",
//       icon: "success",
//       confirmButtonText: "OK",
//     }).then(function () {
//       // Redirect the user
      
//       window.location.reload(true);
//     });
//   }
// }
// const [dup,setDupErr]=useState(false);
//   const {
//     value: firstNameValue,
//     isValid: firstNameIsValid,
//     hasError: firstNameHasError,
//     valueChangeHandler: firstNameChangeHandler,
//     inputBlurHandler: firstNameBlurHandler,
//     reset: resetFirstName,
//   } = useInput(isNotEmpty);
  //sldkj





  // console.log(firstNameValue);
  // const {
  //   value: lastNameValue,
  //   isValid: lastNameIsValid,
  //   hasError: lastNameHasError,
  //   valueChangeHandler: lastNameChangeHandler,
  //   inputBlurHandler: lastNameBlurHandler,
  //   reset: resetLastName,
  // } = useInput(isNotEmpty);







  // const {
  //   value: emailValue,
  //   isValid: emailIsValid,
  //   hasError: emailHasError,
  //   valueChangeHandler: emailChangeHandler,
  //   inputBlurHandler: emailBlurHandler,
  //   reset: resetEmail,
  // } = useInput(isEmail);

  // let formIsValid = false;

  // if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  //   formIsValid = true;
  // }









  
  // if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  //   formIsValid = true;
  // }

  const submitHandler = event => {
    event.preventDefault();

    // if (!formIsValid) {
    //   return;
    // }
    async function addStudentHandler(student) {
      const response = await fetch('https://localhost:44325/api/UpdateStudents/'+props.Id, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
     
      // const data = await response.json();
      // Swal.fire({
      //   title: "Success",
      //   text: "Created successfully",
      //   icon: "success",
      //   confirmButtonText: "OK",
      // });
      
    
  }
    // console.log('Submitted!');
    // console.log(firstNameValue, lastNameValue, emailValue);
    const student = {
     
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
    };

    addStudentHandler(student);
  

    // resetFirstName();
    // resetLastName();
    // resetEmail();
  };

  // const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  // const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  // const emailClasses = emailHasError && dup ? 'form-control invalid' : 'form-control';
  const modelActions=<div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onClose}>
    Close
  </button>
 
</div>

  return (
    <Modal onClose={props.onClose}>
     
      {/* <BasicForm /> */}
      <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            // onBlur={firstNameBlurHandler}
          />
          {/* {firstNameHasError && <p className="error-text">Please enter a first name.</p>} */}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            // onBlur={lastNameBlurHandler}
          />
          {/* {lastNameHasError && <p className="error-text">Please enter a last name.</p>} */}
        </div>
      </div>




      <div className='form-control'>
        <label htmlFor='name'>EMail</label>
        <input
          type='text'
          id='name'
          // id='name1'
          value={emailValue}
          onChange={emailChangeHandler}
          // onBlur={emailBlurHandler}
        />



        
        {/* {emailHasError && <p className="error-text">Please enter a valid email address.</p>} */}
      </div>
      <div className='form-actions'>
        <button disabled={false}>Update</button>
      </div>
    </form>
      { modelActions }
      
    </Modal>
  );
};

export default Edit;
