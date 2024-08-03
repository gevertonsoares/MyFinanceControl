import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { FormEvent, useState, ChangeEvent } from "react";
import { v4 as generateUUID } from "uuid";
import { useDispatch } from 'react-redux'
import { addTransaction, Tipo } from "../../store/modules/transaction/TransactionSlice";


export default function TransactionForm() {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState<Tipo>('Entrada');
    const [numericValue, setNumericValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleOptionChange = (e: SelectChangeEvent) => {
        setSelectedOption(e.target.value as Tipo);
    };

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumericValue(e.target.value);
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescriptionValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newTransaction = {
            id: generateUUID(),
            type: selectedOption,
            valor: Number(numericValue),
            description: descriptionValue
        };

        dispatch(addTransaction(newTransaction));
        setNumericValue('');
        setDescriptionValue('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
            <FormControl>
                <InputLabel id="type-label">Tipo</InputLabel>
                <Select
                    labelId="type-label"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    label="Tipo"
                    sx={{
                        bgcolor: 'white',
                        borderRadius: '10px',
                    }}
                >
                    <MenuItem value="Entrada">Entrada</MenuItem>
                    <MenuItem value="Saída">Saída</MenuItem>
                </Select>
            </FormControl>
            <TextField
                color="primary"
                label="Valor"
                value={numericValue}
                onChange={handleValueChange}
                type="number"
                sx={{
                    bgcolor: 'white',
                    border: 'solid 10px',
                    borderRadius: '10px',
                }}
                required
            />
            <TextField
                label="Description"
                value={descriptionValue}
                onChange={handleDescriptionChange}
                type="text"
                sx={{
                    bgcolor: 'white',
                    border: 'solid 10px',
                    borderRadius: '10px',
                }}
                required
            />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    );
}
