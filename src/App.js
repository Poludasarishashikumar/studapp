import React, { useState, useEffect, useCallback } from 'react';

import StudentsList from './components/StudentsList';
import Swal from "sweetalert2";
import './App.css';
import BasicForm from './components/BasicForm';
import Edit from './components/Edit';



function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailerr,setEmailError]=useState(false);
 
  const url='https://localhost:44325/api/Getstudents';
  const fetchStudentsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      

      const response = await fetch(url);
      // console.log(response);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
console.log(data);
      const transformedData = data.map((Data) => {
        
        return {
          studentId:Data.studentId,
          id: Data.studentId1,
          lastName: Data.lastName,
          firstName: Data.firstName,
          email: Data.email,
          status:Data.recStatus,
        };
      
      
      });
      setStudents(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchStudentsHandler();
    
  }, [fetchStudentsHandler]);

  // function addStudentHandler(student) {
  //   console.log(student);
  // }
  async function addStudentHandler(student) {
    const response = await fetch('https://localhost:44325/api/PostStudents', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(response.status===404)
    {
      
      // setEmailError(true);
      setTimeout(() => {setEmailError(true)}, 1000);
      setTimeout(() => {setEmailError(false)}, 4000);
      
      alert("email already exists")
      
    }
    else{
    const data = await response.json();
    Swal.fire({
      title: "Success",
      text: "Created successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
    fetchStudentsHandler();
  }
}

  
  

  let content = <p>Found no students.</p>;

  if (students.length > 0) {
    content = <StudentsList students={students} />;
    
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        
      <BasicForm onAddStudent={addStudentHandler} />
      {emailerr &&<p className="error-text">The Email Already Exists</p>}
      </section>
     
      <section>{content}
     
      </section>
    </React.Fragment>
  );
}

export default App;
