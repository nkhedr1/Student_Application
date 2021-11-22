import React from 'react';
import Students from './Students';



const Header = (props) => {
    let searchText = props.searchQuery
    let searchTagInput = props.tagQuery
    let studentSearchList = props.studentsList;
    let fullStudentList = [];
    let tagStudentTrigger = false
    let nameStudentTrigger = false
    
    // search for students by name
    function lookupStudent(student) {
        let fnameLower = student.firstName.toLowerCase();
        let lnameLower = student.lastName.toLowerCase();
        let fullName = fnameLower + ' ' + lnameLower;
       
        if (fullName.includes(searchText) && !studentSearchList.includes(student)) {
           
            studentSearchList.push(student);
            console.log("match2", searchText, props.searchQuery )
        } 
      
    }

    // search for students by tag   
    function lookupTagStudent(student) {
       
        tagStudentTrigger = false
      

        student.tagArr.forEach((tag) => {
            if (tag.search(searchTagInput) > -1) {
                console.log("howdy")
                tagStudentTrigger = true;
            }
        })
        
            
      
        if (tagStudentTrigger && !studentSearchList.includes(student)) {
           
            studentSearchList.push(student);
            console.log("match12", searchTagInput, props.tagQuery )
        } 
        tagStudentTrigger = false

  
    }

    // search for students by tag and name
    function lookupNameTagStudent(student) {

        tagStudentTrigger = false
        nameStudentTrigger = false

        let fnameLower = student.firstName.toLowerCase();
        let lnameLower = student.lastName.toLowerCase();
        let fullName = fnameLower + ' ' + lnameLower;

        if (fullName.includes(searchText) && !studentSearchList.includes(student)) {

            nameStudentTrigger = true
           
        } 

        student.tagArr.forEach((tag) => {
            if (tag.search(searchTagInput) > -1) {
                tagStudentTrigger = true;
            }
        })
            
      
        if (tagStudentTrigger && nameStudentTrigger && !studentSearchList.includes(student)) {
           
            studentSearchList.push(student);
          
        } 
       
        tagStudentTrigger = false
        nameStudentTrigger = false
        // if (searchText !== '' && searchTagInput !== '') {
        //     console.log('tagname')
        // }

  
    }
  
    const searchName = (e) => {
        studentSearchList = [];
        console.log('1st', e)
        searchText = e
        props.setSearchQuery(searchText)

        if (e === "") {
            console.log('e', e)
            studentSearchList = [];
            console.log('zer1', studentSearchList)
            studentSearchList = props.studentsArr3;
            console.log('zero', fullStudentList)
        }

        else if (e !== "" && props.tagQuery !== '') {

            props.studentsArr3.map(lookupNameTagStudent)
            console.log('tagname2',  e, props.tagQuery)
        }

        else {
            props.studentsArr3.map(lookupStudent)
            console.log('tagn2', e, props.tagQuery)
        }
           
        props.setStudents(studentSearchList)
        console.log('func')
   
    }

    const searchTag = (e) => {
        studentSearchList = [];
        console.log('1st', e.length)
        searchTagInput = e
        props.setTagQuery(searchTagInput)
        if (e === "") {
            console.log('e', e)
            studentSearchList = props.studentsArr3;
            console.log('zer1', studentSearchList)
            console.log('zero6', fullStudentList)
        }

        else if (e !== "" && props.searchQuery !== '') {
           
            props.studentsArr3.map(lookupNameTagStudent)
            console.log('tagname1', e, props.searchQuery)
        }

        else if (e !== "") {
            props.studentsArr3.map(lookupTagStudent)
            console.log('tagn1', e, props.searchQuery)
        }
      
        props.setStudents(studentSearchList)
        console.log('func2', searchTagInput, props.tagQuery)
   
    }

    return (
        <div className="page-container">
             <input type="text" placeholder='Search by name' id="name_input" name="name_search" value={searchText} onInput={(e) => searchName(e.target.value)} />
             <input type="text" placeholder='Search by tag' id="search_tag_input" name="tag_search" value={searchTagInput} onInput={(e) => searchTag(e.target.value)} />
            <Students toggleDisplay={props.toggleDisplay} studentsList={props.studentsList} expandGrades={props.expandGrades} setExpandGrades={props.setExpandGrades} addTags={props.addTags} studentSearchList={studentSearchList} />
        </div>
    )
}

export default Header
