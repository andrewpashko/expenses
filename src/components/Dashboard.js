import React, { Component } from 'react';
import CategoryItems from './CategoryItems';
import CategoryAdd from './CategoryAdd';
import ExpenseAdd from './ExpenseAdd';

import AddIcon from '@material-ui/icons/Add';
import {
  Typography,
  Fab,
  Grid
} from '@material-ui/core';

class Dashboard extends Component {
  state = {
    catModel: false,
    modalOpen: false,
    expenseId: false
  }

  handleClickOpen = () => {
    this.setState({ catModel: true, modalOpen: false, expenseId: false });
  };

  handleClose = () => {
    this.setState({ catModel: false, modalOpen: false, expenseId: false });
  };

  saveCategory = () => {
    let name = document.getElementById('category_input').value;
    this.props.addCategory(name);
    this.handleClose();
  };

  openDialog = (id) => {
    this.setState({modalOpen: true, expenseId: id});
  };

  newExpense = () => {
    let value = document.getElementById('expense_input').value;
    this.props.addExpense(this.state.expenseId, value);
    this.setState({modalOpen: false, expenseId: false});
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color="inherit">
              Цей місяць: <b>{this.props.calcMonthlyExpense} &#8372;</b>
            </Typography>
            <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen}>
              <AddIcon />
            </Fab>
          </Grid>
        </div>
        <Grid
            container
            spacing={24}
            direction="row"
            alignItems="center"
          >
            <CategoryItems currentDate={this.props.currentDate} categories={this.props.categories} openDialog={this.openDialog} />
          </Grid>
          <CategoryAdd handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} saveCategory={this.saveCategory} open={this.state} />
          <ExpenseAdd handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} newExpense={this.newExpense} open={this.state}/>
      </div>
    );
  }
}

export default Dashboard;