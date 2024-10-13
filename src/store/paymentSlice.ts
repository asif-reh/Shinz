import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: string;
}

interface PaymentState {
  transactions: Transaction[];
}

const initialState: PaymentState = {
  transactions: [],
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    updateTransactionStatus(state, action: PayloadAction<{ id: string; status: 'pending' | 'completed' | 'failed' }>) {
      const transaction = state.transactions.find(t => t.id === action.payload.id);
      if (transaction) {
        transaction.status = action.payload.status;
      }
    },
  },
});

export const { addTransaction, updateTransactionStatus } = paymentSlice.actions;
export default paymentSlice.reducer;