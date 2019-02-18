import React from 'react';
import {
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
  CardActionArea
} from '@material-ui/core';

const CategoryItems = (props) => {
  let calcSingleCatForMonth = (item) => {
    return item.values
      .filter((expense) => (expense.date === props.currentDate) ? expense : false )
      .reduce((sum, current) => sum + current.value, 0);
  }

  return props.categories.map((item) => (
    <Grid item xs={4} key={item.id}>
      <Card>
        <CardActionArea onClick={props.openDialog.bind(this, item.id)}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {item.name}
            </Typography>
          </CardContent>
          <Divider light />
          <CardContent>
            <Typography gutterBottom variant="body2">
              За місяць: {calcSingleCatForMonth(item)} &#8372;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));
}

export default CategoryItems;