import { useContext } from 'react';
import { UserContext } from "context/UserContext";
import {MdLogout} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const {user, handleClickOpen} = useContext(UserContext);
    return(
        <>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight">Task Master</span>
            </div>

            <div>
                <p className='font-semibold text-xl tracking-tight text-white'>Bem-Vindo {user.username}</p>
            </div>
            
            <div className='flex items-center'>
                <button onClick={() => handleClickOpen("Nova Tarefa")} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Criar nova tarefa</button>
                <MdLogout className="ml-8 cursor-pointer" size={26} onClick={() => navigate('/')} />
            </div>
        </nav>
        </>
    )
}