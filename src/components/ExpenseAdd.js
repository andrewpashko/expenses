import React from 'react';
import {
  Input,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  InputAdornment
} from '@material-ui/core';

const ExpenseAdd = (props) => {
  return (
    <Dialog maxWidth={'sm'} fullWidth={true} open={props.open.modalOpen} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Додати витрати</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel htmlFor="adornment-amount">Витрати</InputLabel>
          <Input
            id="expense_input"
            autoComplete="off"
            type="text"
            startAdornment={<InputAdornment position="start">&#8372;</InputAdornment>}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Відмінити
        </Button>
        <Button onClick={props.newExpense} id="add-expense" color="primary">
          Додати
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ExpenseAdd;