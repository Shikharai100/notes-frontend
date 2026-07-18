import React, {useState} from 'react'
import Form from "./components/Form";
import NoteCard from "./components/NoteCard";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const formButton = (element) => {
      element.preventDefault();
      //console.log("Form Submitted");

      const copyTask = [...task];
      copyTask.push({title,details})
      
      setTask(copyTask)      
      //console.log(task);
      setTitle('')
      setDetails('')
      
  }
const deleteNote = (idx) =>{
  const copyTask = [...task]

  copyTask.splice(idx,1)
  setTask(copyTask)
 // console.log("note deleted",idx);
}

  return (
    <div  className='min-h-screen lg:flex '>
     <Form
      title={title}
      setTitle={setTitle}
      details={details}
      setDetails={setDetails}
      formButton={formButton}
     />
     <div className='lg:w-1/2 p-10 bg-pink-200 h-screen overflow-auto border-l-4 border-white'>
     <h1 className='text-black text-4xl font-bold my-5'>
      Recent Notes
     </h1>

     <div className='flex flex-wrap gap-5'>
      {task.map((note, idx) => (
        <NoteCard
        key={idx}
        note={note}
        idx={idx}
        deleteNote={deleteNote}
      />
      ))}
      </div>
     </div>
    </div>
  )
}

export default App
