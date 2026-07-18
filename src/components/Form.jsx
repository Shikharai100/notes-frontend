import React, {useState} from 'react'

const Form = ({
  title,
  setTitle,
  details,
  setDetails,
  formButton,
}) => {
  return (
    <form
      className="flex lg:w-1/2 items-start p-5 bg-black text-white"
      onSubmit={formButton}
    >      

        <div className='flex w-1/2  items-start gap-4 flex-col  '> 
        <h1 className='text-white text-4xl font-bold'> Your Notes</h1>

        <input 
        value={title}
        onChange={(element) => {
          setTitle(element.target.value);
        }}
        type='text' 
        placeholder='Enter Task Heading'
        className='px-3 w-full py-2 border-2 font-medium border-pink-200 outline-none rounded'/>

        <textarea 
        value={details}
        onChange={(element) => {
          setDetails(element.target.value);
        }} 
        placeholder='Enter Details' 
        className='px-3 w-full font-medium h-20 py-2 border-2 flex items-start outline-none border-pink-200 rounded' />

        <button 
        className='bg-pink-200 active:bg-pink-100 active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Notes
          </button>

        </div>
        <div className='w-2/5'>
        <img className='h-48 mx-10 my-10 ' 
        src="https://cdn-icons-png.flaticon.com/512/2038/2038509.png" alt="image.png"  />
        </div>
      
    </form>
  );
};

export default Form;
