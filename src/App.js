
import './App.css';
import {useState, useEffect} from 'react';
import Header from './Header';

function App() {

let [studentsArr, setStudents] = useState ([]);
let [studentsArr3, setStudents3] = useState ([]);
let [searchQuery, setSearchQuery] = useState('');
let [tagQuery, setTagQuery] = useState('');
let [expandGrades, setExpandGrades] = useState(false);
useEffect(() => {
 const getStudents = async () => {
  const studentsArr2 = await fetchStudents()
  studentsArr2.map(student => student.toggleExpandGrades = false )
  studentsArr2.map(student => student.tagArr = [] )
  setStudents(studentsArr2)
  setStudents3(studentsArr2)
  console.log(studentsArr2)
 }

 getStudents()
     
}, [])

const addTags = (id, e) => {

  setStudents(
    studentsArr.map((student) => {
      if (student.id === id) {      
        if (e.code === "Enter" && !student.tagArr.includes(e.target.value.toLowerCase())) {
          student.tagArr.push(e.target.value.toLowerCase());     
          console.log('yes1', student.tagArr)
          e.target.value = ''         
          
        }
        else if (e.code === "Enter" && student.tagArr.includes(e.target.value.toLowerCase())) {
            e.target.value = ''
        }       
    
      }
      return student
    })
  )

  setStudents3(
    studentsArr.map((student) => {
      if (student.id === id) {      
        if (e.code === "Enter" && !student.tagArr.includes(e.target.value.toLowerCase())) {
          student.tagArr.push(e.target.value.toLowerCase());     
          console.log('yes', student.tagArr)
          e.target.value = ''         
          
        }
        else if (e.code === "Enter" && student.tagArr.includes(e.target.value.toLowerCase())) {
            e.target.value = ''
        }       
    
      }
      return student
    })
  )

}

const toggleDisplay = (id) => {

  setStudents(
    studentsArr.map((student) => {
      if (student.id === id) {
        if (student.toggleExpandGrades) {
          student.toggleExpandGrades = false
        }

        else {
          student.toggleExpandGrades = true
        }
        
      console.log('true1')
      }

      else {
        console.log('false1')
      }
     return student
    })
  )

  console.log(id)
}


const fetchStudents= async () => {
  const res = await fetch ('http://localhost:5000/students')
  const data = await res.json()
  console.log(data)
  return data;
 
}

  return (
    <div className="App">
      <Header toggleDisplay={toggleDisplay} studentsList={studentsArr} setStudents={setStudents} searchQuery={searchQuery} setSearchQuery={setSearchQuery} expandGrades={expandGrades} setExpandGrades={setExpandGrades} addTags={addTags} tagQuery={tagQuery} setTagQuery={setTagQuery} studentsArr3={studentsArr3} setStudents3={setStudents3}/>
    </div>
  );
}

export default App;
