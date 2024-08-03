import { useState } from "react";
import ContainerTransactions from "../components/styled/ContainerTransactions";
import ModalTransaction from "../components/styled/ModalTransaction";
import Navbar from "../components/styled/Navbar";
import Saldo from "../components/styled/Saldo";
import { Typography } from "@mui/material";



export function Home() {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false); 
    
    return(
        <>
            <Navbar handleOpen={handleOpen} />
            <ModalTransaction open={open} handleClose={handleClose} />
            <Typography marginY={'2rem'} textAlign={'center'} variant="h4" component="h1"> My Transactions </Typography>
            <ContainerTransactions />
            <Saldo />
        </>
    )
}




