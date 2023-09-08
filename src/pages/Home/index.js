import { useContext, useState, useEffect } from 'react';
import { UserContext } from 'context/UserContext';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from 'config/firebase';
import FormDialog from 'components/Dialog';
import { TasksList } from 'components/TasksList';

export default function Home() {
    const {user} = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    const getTasks = async () => {        
        const unsubscribe = onSnapshot(query(collection(db, user.username)), (querySnapshot) => {
            let tasks = [];
            querySnapshot.forEach((document) => {
                tasks.push({id: document.id, ...document.data()});
            })
            setTasks(tasks.filter((task) => task.done === false));
            setDoneTasks(tasks.filter((task) => task.done === true));
        })
        return () => unsubscribe();
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-top h-screen w-full bg-gradient-to-r from-blue-500 to-blue-300 px-6 py-10 lg:px-8">
                    <h2 className="mt-10 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-700">
                        Suas tarefas
                    </h2>
                    <div className='flex justify-between p-4'>
                    {tasks.length > 0
                        ? <div className="pt-8 pr-12 text-base font-semibold leading-7 w-2/5"> <p className="text-gray-900 text-center text-xl font-bold pb-4">A fazer</p><TasksList tasks={tasks} user={user} /> </div>
                        : <p className='text-2xl font-bold m-auto text-center'>Nenhuma tarefa para fazer ainda...</p>
                    }
                    {doneTasks.length > 0
                        ? <div className="pt-8 text-base font-semibold leading-7 w-2/5"> <p className="text-gray-900 text-center text-xl font-bold pb-4">Feitas</p> <TasksList tasks={doneTasks} user={user} /> </div>
                        : <p className='text-center text-2xl font-bold'>Nenhuma tarefa concluída ainda...</p>
                    }
                    </div>
            
            </div>
            <FormDialog />
        </>
    )
}