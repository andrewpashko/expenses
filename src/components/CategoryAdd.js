import React from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const CategoryAdd = (props) => {
  return (
    <Dialog maxWidth={'sm'} fullWidth={true} open={props.open.catModel} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Додати категорію</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="category_input"
          label="Категорія"
          type="text"
          fullWidth
          autoComplete="off"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Відмінити
        </Button>
        <Button onClick={props.saveCategory} color="primary">
          Додати
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CategoryAdd;