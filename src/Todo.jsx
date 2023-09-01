import React, {useState} from 'react'

const Todo = () => {
    let [tasks, setTasks]= useState([])
    let [text, setText]= useState('')
    let [error, setError]= useState(false)
    let [editButton, setEditButton] = useState(false)

    let [editId, setEditId] = useState('')
    let [editText, setEditText] = useState('')
 
    let handleChange = (e)=>{
        setText(e.target.value)
    }

    let handleSubmit = ()=>{
        if(text){
            tasks.push(text)
            let taskArr = [...tasks]
            setTasks(taskArr)
            setText('')
            if(error){
                setError(false)
            }

        }else{
            setError(true)
        }
    }
    let handleDelete = (id)=>{
        tasks.splice(id,1)
        let taskArr = [...tasks]
            setTasks(taskArr)
    }

    let handleEdit = (taskName, id)=>{
        setEditButton(true)
        setText(taskName)
        setEditId(id)
        setEditText(taskName)

    }
    let handleUpdate = ()=>{
        if(text){

            tasks[editId] = text;
            let taskArr = [...tasks]
            setTasks(taskArr)
            setText('')
            setEditButton(false)

            if(error){
                setError(false)
            }
        }else{
            setError(true)
        }


    }
    let handleCancel = ()=>{
        setEditButton(false)
        setText('')
    }

  return (
    <>
        <div className='font-mon font-normal'>
     <input onChange={handleChange} placeholder='Write your task here.' value={text}/> 
     {
        editButton
        ?
            <>
            <button className=' ml-2 p-1 border border-solid font-mon font-bold border-blue-700 bg-blue-700 text-white rounded-md hover:bg-transparent hover:text-blue-700 transition ease-out delay-600' onClick={handleUpdate}>Update</button>
            <button className=' ml-2 p-1 border border-solid font-mon font-bold border-blue-700 bg-blue-700 text-white rounded-md hover:bg-transparent hover:text-blue-700 transition ease-out delay-600' onClick={ handleCancel}>Cancel</button>
            </>
        :
            <button className=' ml-2 p-1 border border-solid font-mon font-bold border-blue-700 bg-blue-700 text-white rounded-md hover:bg-transparent hover:text-blue-700 transition ease-out delay-600' onClick={handleSubmit}>Submit</button>
     }
     </div>
     { error && <h1 className=' text-red-500 font-man text-lg font-extrabold'>Please write something..</h1>}
     <div>
        <ol>
            {
                tasks.map((task, index)=>(
                    <li className='mt-1 text-cyan-500 font-mon text-xl font-extrabold ' key={index}><span className='text-black'>{index+1}.</span> {task}
                    <button className=' ml-2 p-1 border border-solid font-mon font-bold border-red-700 bg-red-700 text-white rounded-md hover:bg-transparent hover:text-red-700 transition ease-out delay-600' onClick={()=>handleDelete(index)}>Delete</button>
                    <button className=' ml-2 p-1 border border-solid font-mon font-bold border-blue-700 bg-blue-700 text-white rounded-md hover:bg-transparent hover:text-blue-700 transition ease-out delay-600' onClick={()=>handleEdit(task, index)}>Edit</button>
                    </li>
                ))
            }
        </ol>
     </div>
   
    </>
  )
}

export default Todo