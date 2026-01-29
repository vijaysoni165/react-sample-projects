    import React, { useState } from 'react'

    function ToDOList() {
        const [task, setTask] = useState("");
        const [todolist, settodoList] = useState([]);

        const addTask = () => {
            if(task.trim() === '') return ;
            settodoList([...todolist, task]);
            setTask('');
        }
        const deleteTask = (index) =>{
            const newList = [...todolist];
            newList.splice(index, 1);
            console.log(newList.splice(index, 1))
            settodoList(newList);
            
        }


    return (
        <div style={{padding:20}}>
            <h2>TO DO List</h2>
        <input type='text' value={task} onChange={(e)=> setTask(e.target.value)}  />
        <button onClick={addTask}>Add</button>
        <ul className='List'>
            {todolist.map((item, index) => (
                <li key={item}>{item}
                <button onClick={()=> deleteTask(index)}></button>
                </li>

            ))}
            
        </ul>
        </div>
    )
    }

    export default ToDOList
