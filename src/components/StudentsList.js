import React from 'react';

import Student from './Student';
import classes from './StudentsList.module.css';

const StudentList = (props) => {
  return (
    <ul className={classes['students-list']}>
      {props.students.map((student) => (
        <Student
          key={student.id}
          Id={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          email={student.email}
          status={student.status}
        />
      ))}
    </ul>
  );
};

export default StudentList;
