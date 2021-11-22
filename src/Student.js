import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Student = (props) => {
   
    const array = props.student.grades;
    let tagInput;

    // calculating the average of the grades
    var res = array.reduce(function(prev, curr){
        return (Number(prev) || 0) + (Number(curr) || 0);
    });

    var averge = res / props.student.grades.length;

    
    return (
        <div className="student-data-container">
            <div className="student-container">
                <div className="img-container">
                    <img src={props.student.pic} alt='avatar of user' width="200" height="200"/>
                </div>
                <div className="data-container">
                    <h1>{props.student.firstName} {props.student.lastName}</h1>
                    <div className="data-inner-container">
                        <p>Email: {props.student.email}</p>
                        <p>Company: {props.student.company}</p>
                        <p>Skill: {props.student.skill}</p>
                        <p>Average: {averge}%</p>
                    </div>
                    <div id="tag-container" className={`${props.student.tagArr.length > 0 ? '' : 'hide-tags'}`}>
                        {props.student.tagArr.map((tag) => (
                    
                    <div className="tags">{tag}</div>
                
                    ))}
                    </div>
                
                    <div className={`${props.student.toggleExpandGrades ? '' : 'hide-grades'}`}>
                        {props.student.grades.map((grade, index) => (
                    
                        <p>Test {index + 1}: {grade}%</p>
                    
                        ))}
                    </div>
                    <div id='tag-input-container'>
                        <input type="text" placeholder='Add a Tag' id="tag_input" name="add_tag" value={tagInput} onKeyPress ={(e) => props.addTags(props.student.id, e)} />   
                    </div>

            </div>
            </div>
            <div id="icon-container">
                    <div  className={`${props.student.toggleExpandGrades ? 'hide-grades' : ''}`} id='plus-icon' onClick={() => props.toggleDisplay(props.student.id)}>
                        <FontAwesomeIcon className="icon-size" icon={faPlus} />
                    </div>
                    <div className={`${props.student.toggleExpandGrades ? '' : 'hide-grades'}`} id='minus-icon' onClick={() => props.toggleDisplay(props.student.id)}>
                        <FontAwesomeIcon className="icon-size" icon={faMinus} />
                    </div>
            </div>
                       

        </div>
    )
}

export default Student

