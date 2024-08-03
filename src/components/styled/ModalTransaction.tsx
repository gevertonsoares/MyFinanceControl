import { Box, Typography, Modal } from "@mui/material";
import TransactionForm from "../functionals/TransactionForm";


type ModalTransactionProps = {
    open: boolean;
    handleClose: () => void;
};


export default function ModalTransaction({ open, handleClose }: ModalTransactionProps) {

    return (
        <Modal
        open={open} 
        onClose={handleClose} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#222121',
                border: '2px solid #000',
                borderRadius:'2rem',
                boxShadow: 24,
                p: 4,
                }}>
                <Typography textAlign={'start'} marginBottom={2} id="modal-modal-title" variant="h6" component="h2">
                    Add Your Transaction
                </Typography>
                <TransactionForm />
            </Box>
        </Modal>
    );
}
