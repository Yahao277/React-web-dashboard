import React,{useState} from 'react';
import {
    makeStyles,
    Container,
    Grid,
    Card,
    CardContent,
    Box,
    Divider,
    Paper,
    Typography,
    colors
} from '@material-ui/core';

import Toolbar from './components/Toolbar';
import OrderItem from './components/OrderItem';
import OrdersColumn from './components/OrdersColumn';
import styled from '@emotion/styled';

import {
  DragDropContext,
  Draggable,
  Droppable
} from 'react-beautiful-dnd';
import{ getItems,reorder,move} from './functions';



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    containerStyle: {
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        overflow:'auto',
      },
    gridItemStyle:{
      margin: theme.spacing(1)
    },
    BoxStyle:{
      backgroundColor: 'lightgrey',
      padding: theme.spacing(1)
    }
}))

const ScrollContainer = styled.div`
  box-sizing: border-box;
  background: lightgrey;
  padding: 10px;
  overflow-y: scroll;
  width: 16vw;
  height: 80vh;
  position: relative;
`;
const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});


/*Droppable component*/
const OrderGroup = ({id,itemList}) => {
  return(
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => (
          <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              {itemList.map((item, index) => (
                <OrderItem key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
          </div>
      )}
    </Droppable>
  )
}


/*Core component*/
const DragDropContent = ({itemList}) => {
  const classes = useStyles();
  return(
    <Container className={classes.root}>
      <Toolbar/>
      <Grid container className={classes.containerStyle}>
        <Grid item className={classes.gridItemStyle}>
          <Paper>
              <Box className={classes.BoxStyle}>
                  <Typography color="textPrimary"
                    align="center"
                    variant="h6">
                      List A 
                  </Typography>
              </Box>
              <ScrollContainer>
                <OrderGroup id="droppable" itemList={itemList.items} />
              </ScrollContainer>
            </Paper>
        </Grid>
        <Grid item className={classes.gridItemStyle}>
          <Paper>
              <Box className={classes.BoxStyle}>
                  <Typography color="textPrimary"
                    align="center"
                    variant="h6">
                      List B
                  </Typography>
              </Box>
              <ScrollContainer>
                <OrderGroup id="droppable2" itemList={itemList.selected} />
              </ScrollContainer>
            </Paper>
        </Grid>
      </Grid>
    </Container>
  )
} 

/*Drag and drop planning*/
const PlanningView = () => {
  const classes = useStyles();
  const columns = 3;
  const [state,setState] = useState({
    items: getItems(10),
    selected: getItems(5,10)
  });

  const id2List = {
    droppable: 'items',
    droppable2: 'selected'
  }

  const getList = id => state[id2List[id]];

  const onDragEnd = result => {
    const {source,destination} = result;

    if(!destination){ return; }

    if (source.droppableId === destination.droppableId){
      let items = reorder(
       getList(source.droppableId),
       source.index,
       destination.index);
      
       let stat = {items,selected:state.selected};
      
       if( source.droppableId === 'droppable2'){
         stat = { items:state.items ,selected: items};
       }

       setState(stat);
       
    }else{
      const result = move(getList(source.droppableId),
      getList(destination.droppableId),
      source,
      destination);

      setState({
        items: result.droppable,
        selected: result.droppable2
       })
    }
  }

  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <DragDropContent itemList={state}/>
    </DragDropContext>
  )
}

export default PlanningView;
