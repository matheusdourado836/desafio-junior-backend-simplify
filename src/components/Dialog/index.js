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
import { v4 as uuid } from 'uuid';
import { db } from 'config/firebase';
import { doc, setDoc } from "firebase/firestore"; 

export default function FormDialog() {
    const {user, open, handleClose, dialogTitle} = useContext(UserContext);
    const [taskTitle, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [selectedPriority, setSelectedPriority] = useState(null);
    const [error, setError] = useState('');

    const handlePrioritySelected = (priority) => {
        setSelectedPriority(priority);
      };

    const saveTask = async () => {
        if (taskTitle.trim() === '' || description.trim() === '' || selectedPriority === null) {
            setError('Por favor, preencha os campos antes de salvar.');
            return; 
        }
        setError('');
        const id = uuid();
        const task = {
            id: id,
            title: taskTitle,
            description: description,
            priority: selectedPriority,
            done: false
        };
        await setDoc(doc(db, user.username, id), task);
        setTitle("");
        setDescription("");
        setSelectedPriority(null);
        handleClose();
    }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Título"
            type="text"
            required
            fullWidth
            variant="standard"
            onChange={(e) => {setTitle(e.target.value);}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descrição"
            type="text"
            required
            fullWidth
            variant="standard"
            onChange={(e) => {setDescription(e.target.value);}}
          />
          <PriorityButtons onPrioritySelected={handlePrioritySelected} />
          {error && <p className="text-red-500">{error}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={saveTask}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
