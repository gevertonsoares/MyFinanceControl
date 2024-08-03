import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tipo = 'Entrada' | 'Saída';

export interface TransactionState {
    id: string;
    type: Tipo;
    valor: number;
    description: string;
}

export interface TransactionsSliceState {
    transactions: TransactionState[];
    saldo: number;
}

const initialState: TransactionsSliceState = {
    transactions: [],
    saldo: 0,
};

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<TransactionState>) => {
            const transaction = action.payload;
            state.transactions.push(transaction);
            state.saldo += transaction.type === 'Entrada' ? transaction.valor : -transaction.valor;
        },
    },
});

export const { addTransaction } = transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;