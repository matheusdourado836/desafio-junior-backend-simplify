import { PriorityIndicator } from 'components/PriorityIndicator';
import { FiTrash2 } from 'react-icons/fi';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from 'config/firebase';
import EditTaskDialog from 'components/EditTask';
import { useState } from 'react';

export const TasksList = ({ tasks, user }) => {
    const styles = {
        todo: "cursor-pointer rounded flex justify-between gap-x-6 py-5 p-4 mb-4 bg-violet-300",
        done: "rounded flex justify-between gap-x-6 py-5 p-4 mb-4 bg-violet-300",
    };
    const [task ,setTask] = useState();
    const [open, setOpen] = useState(false);
    const deleteTask = async (taskId) => {
        await deleteDoc(doc(db, user.username, taskId));
    }

    const toggleDone = async (task) => {
        await updateDoc(doc(db, user.username, task.id), {
            done: !task.done
        })
    }

    const handleClickOpen = (task) => {
        setTask(task);
        setOpen(true);
    }

  return (
    <div className="container rounded drop-shadow-xl mx-auto mr-8 bg-cyan-100">
        <ul className="p-5">
            {tasks.map((task) => (
                <li key={task.id} className={task.done === true ? styles.done : styles.todo}>
                    <div className="flex min-w-0 gap-x-4">
                        <input type="checkbox" onChange={() => toggleDone(task)} checked={task.done === true} disabled={task.done === true}/>
                        <div className="min-w-0 flex-auto" onClick={task.done === true ? null : () => handleClickOpen(task)}>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{task.title}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-600">{task.description}</p>
                        </div>
                    </div>
                
                    <div className="shrink-0 sm:flex sm:flex-row sm:items-center">
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-center pr-6">
                            <p className="text-sm leading-6 text-gray-900">{task.priority}</p>
                            <PriorityIndicator  data={task.priority}/>
                        </div>
                        <button onClick={() => deleteTask(task.id)}><FiTrash2 className='stroke-1 hover:stroke-2' size={24}/></button>
                    </div>
                </li>
            ))}
        </ul>
        {open
            ? <EditTaskDialog task={task} selected={setOpen} />
            : null
        }
    </div>
  )
}
