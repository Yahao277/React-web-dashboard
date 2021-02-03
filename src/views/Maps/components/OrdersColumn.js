import React from 'react';
import {
  makeStyles,
  Container,
  Box,
  Divider,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Card,
  CardContent,
  colors,
  Grid
} from '@material-ui/core';
import {
  DragDropContext,
  Draggable,
  Droppable
} from 'react-beautiful-dnd';
import clsx from 'clsx';
import OrderItem from './OrderItem';

const useStyles = makeStyles((theme) => ({
  GridStyle: {
    backgroundColor: colors.indigo[100],
    borderRadius: 5,
    elevation: 1,
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'column',
    overflow:'auto',
  },
  BoxStyle:{
    marginBottom: theme.spacing(3)
  }
}))

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const data = [
  {
    price: 20,
   id:1},
   {
     price:30,
     id:2
   },
   {price:40,id:3}
]

const OrdersColumn = ({droppableId,...rest}) => {
  const classes = useStyles()
  return(
    <Card>
      <CardContent>
      <Box className={classes.BoxStyle}>
          <Typography color="textPrimary"
            align="center"
            variant="h6">
              Persona A
          </Typography>
      </Box>
      <Divider spacing={3}/>
      <Droppable droppableId={droppableId}>
        {(provided,snapshot) => {
          
        }}
      <Grid container  spacing={3} direction="column" className={classes.GridStyle}>
        <Grid item>
          <OrderCard order={data[0]}/>
        </Grid>
        <Grid item>
          <OrderCard order={data[1]}/>
        </Grid>
        <Grid item>
          <OrderCard order={data[2]}/>
        </Grid>
      </Grid>
      </Droppable>

      </CardContent>
    </Card>
  )
}

export default OrdersColumn;

/*
      <Box className={classes.BoxStyle}>
      <CardContent>
          <Typography color="textPrimary"
            align="center"
            variant="h6">
              Persona A
          </Typography>
      </Box>
      <Divider spacing={3}/>
      <Grid container  spacing={3} direction="column" className={classes.GridStyle}>
        <Grid item>
          <OrderCard/>
        </Grid>
        <Grid item>
          <OrderCard/>
        </Grid>
        <Grid item>
          <OrderCard/>
        </Grid>
      </Grid>
*/