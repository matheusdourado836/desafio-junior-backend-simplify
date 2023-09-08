import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [dialogTitle, setDialogTitle] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = (title) => {
        setDialogTitle(title);
        setOpen(true);
    };

    const handleClose = () => {
        setDialogTitle("");
        setOpen(false);
      };

    return <UserContext.Provider value={{user, setUser, open, handleClickOpen, handleClose, dialogTitle, setDialogTitle}}>{children}</UserContext.Provider>;
}