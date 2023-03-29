import React, { useState, useEffect, useCallback } from 'react';

import StudentsList from './components/StudentsList';

import './App.css';


function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchStudentsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');

      const response = await fetch('https://localhost:44325/api/Getstudents'
      
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedData = data.map((Data) => {
        
        return {
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
       
      </section>
      <section>
        <button onClick={fetchStudentsHandler}>Fetch Data</button>
      </section>
      
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
