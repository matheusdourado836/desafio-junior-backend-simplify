import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PriorityButtons from 'components/PriorityButtons';
import { useContext, useState } from 'react';
import { UserContext } from "context/UserContext";
import { db } from 'config/firebase';
import { doc, setDoc } from "firebase/firestore"; 

export default function EditTaskDialog({task, selected}) {
    const {user} = useContext(UserContext);
    const [open, setOpen] = useState(true);
    const [taskTitle, setTitle] = React.useState(task.title);
    const [description, setDescription] = React.useState(task.description);
    const [selectedPriority, setSelectedPriority] = useState(task.priority);

    const handlePrioritySelected = (priority) => {
        setSelectedPriority(priority);
    };

    const handleClose = () => {
        setOpen(false);
        selected(false);
    }

    const updateTask = async () => {
        const innerTask = {
            id: task.id,
            title: taskTitle,
            description: description,
            priority: selectedPriority
        };
        await setDoc(doc(db, user.username, task.id), innerTask).catch((error) => console.log(error));
        handleClose();
    }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Tarefa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Título"
            type="text"
            value={taskTitle}
            fullWidth
            variant="standard"
            onChange={(e) => {setTitle(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descrição"
            type="text"
            value={description}
            fullWidth
            variant="standard"
            onChange={(e) => {setDescription(e.target.value);}}
          />
          <PriorityButtons onPrioritySelected={handlePrioritySelected} priorityValue={task.priority} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={updateTask}>Atualizar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
