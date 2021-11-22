import React from 'react';
import Student from './Student';

const Students = (props) => {
  
  
  
    return (
        <div className="student-outer-container" >
            {props.studentSearchList.map((student, index) => (

                <div>

                        <Student  toggleDisplay={props.toggleDisplay} student={student} index={index} expandGrades={props.expandGrades} setExpandGrades={props.setExpandGrades} addTags={props.addTags}/>
                </div>
            
     
            
            ))}
                    
        </div>
    )
}

export default Students
