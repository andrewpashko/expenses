import React from 'react';
import { Grid, CardActions, Card } from '@material-ui/core';

const History = (props) => {
  let monthNames = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Тревень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
  return props.history().map((item) => (
    <Grid item xs={3} key={item.date}>
      <Card>
        <CardActions>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <p><i>{monthNames[item.date.split('/')[0] - 1]} {item.date.split('/')[1]}</i></p>
            <span>{item.expense} &#8372;</span>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  ));
}

export default History;