
import './App.css'
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentlList';
import RandomNumber from './components/RandomNumber';
import Title from './components/Title';



function App() {
  const students = ['Ridoy', 'Nafees', 'Alok', 'Surya', 'Niraj', 'Ashish', 'Gurpreet', 'Yousuf'];
  const newStudents = ['Ram', 'Shyam', 'Mohan', 'Sohan', 'Seeta', 'Geeta'];
  

  return (
    <>
     <Title titleText="Hello World"/>
    <Title titleText="KGCoding"/>
    <Title titleText="Subscribe"/>
    <Title titleText="Learning Props"/>
    
     <Heading />
     <RandomNumber />
     <StudentList students={students}/>
     <Paragraph />
      <Button />
     
      <DynamicComponent />
       
       <Title/>
      <StudentList students={newStudents} />

    
     
     
      
    </>
  )
}

export default App
