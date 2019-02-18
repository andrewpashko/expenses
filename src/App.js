import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import History from './components/History';
import uuid from 'uuid';

import './App.css';
import { Grid } from '@material-ui/core';

class App extends Component {
  state = {
    categories: [
      {
        id: uuid(),
        name: 'Категорія 1',
        values: [
          {
            date: '2/2019',
            value: 100
          },
          {
            date: '1/2019',
            value: 200
          }
        ]
      },
      {
        id: uuid(),
        name: 'Категорія 2',
        values: [
          {
            date: '1/2019',
            value: 100
          },
          {
            date: '12/2018',
            value: 200
          }
        ]
      },
      {
        id: uuid(),
        name: 'Категорія 3',
        values: [
          {
            date: '2/2019',
            value: 100
          },
          {
            date: '1/2019',
            value: 200
          }
        ]
      },
      {
        id: uuid(),
        name: 'Категорія 4',
        values: [
          {
            date: '2/2019',
            value: 100
          },
          {
            date: '11/2018',
            value: 10
          },
          {
            date: '12/2018',
            value: 20
          },
          {
            date: '10/2018',
            value: 30
          },
          {
            date: '8/2018',
            value: 10
          },
          {
            date: '9/2018',
            value: 20
          },
          {
            date: '6/2018',
            value: 30
          },
          {
            date: '1/2019',
            value: 20
          },
          {
            date: '8/2018',
            value: 250
          }
        ]
      },
    ],
  };

  componentDidMount() {
    this.calcMonthlyExpense();
  }

  generateCurrentDate = () => {
    let date = new Date();
    let generatedDate =  '' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return generatedDate;
  }

  calcMonthlyExpense = (date) => {
    return this.state.categories.reduce((sum, current) => {
      let month;
      if (date) {
        month = date;
      } else {
        month = this.generateCurrentDate();
      }

      let catSum = current.values
        .filter((expense) => (expense.date === month) ? expense : false )
        .reduce((sum, current) => sum + current.value, 0);
      return sum + catSum
    }, 0);
  }

  addExpense = (id, newExpense) => {
    if (isNaN(newExpense) || newExpense === 0) {
      return false;
    } else {
      let expense = {
        date: this.generateCurrentDate(),
        value: +newExpense
      }
      let categoryById = this.state.categories.filter((item) => {
        if (item.id === id) {
          item.values = [expense, ...item.values]
          return item;
        } else {
          return item;
        }
      });
      this.setState({ categories: categoryById });
    }
    this.calcMonthlyExpense();
  };

  addCategory = (catName) => {
    if (catName === '' || catName === null) {
      return false;
    }
    let newCategory = {
      id: uuid(),
      name: catName,
      values: []
    }
    this.setState({ categories: [newCategory, ...this.state.categories] });
  }

  getPreviousMonths = () => {
    const categories = this.state.categories;
    let allDates = [];
    //@todo Better solution for nested loop
    for (let cat of categories) {
      for (let val of cat.values) {
        if (val.date !== this.generateCurrentDate()) {
          allDates.push(val.date);
        }
      }
    }

    const uniqueDates = [...new Set(allDates)];
    let filtered  = uniqueDates.sort((a,b) => {
      let dateA = a.split('/')
      let dateB = b.split('/')
      return new Date(dateB[1], dateB[0]) - new Date(dateA[1], dateA[0]);
    });

    let generatedExpenses = [];
    for (let date of filtered) {
      let monthExpense = this.calcMonthlyExpense(date);
      generatedExpenses.push({
        date,
        expense: monthExpense
      })
    }
    return generatedExpenses;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          categories={this.state.categories}
          calcMonthlyExpense={this.calcMonthlyExpense()}
          addCategory={this.addCategory}
          addExpense={this.addExpense}
          currentDate={this.generateCurrentDate()}
        />
        <div className='history-wrap'>
          <h2>Історія</h2>
          <Grid
            container
            spacing={24}
            direction="row"
            alignItems="center"
          >
            <History history={this.getPreviousMonths} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;