import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import OrderItem from './components/OrderItem'
import Toolbar from './components/Toolbar'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});

const contextStyle = () => ({
  display:'flex',
  flexDirection:'roww'
})


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

const DnDTest = () => {
  const [state,setState] = useState({
    items: getItems(10),
    selected: getItems(5,10)
  })

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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <OrderGroup id="droppable" itemList={state.items}/>
      <OrderGroup id="droppable2" itemList={state.selected}/>
    </DragDropContext>
        );

}

export default DnDTest;

/*

*/

/*
const Order = ({item,index}) => {
  return (
    <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                )}>
                {item.content}
            </div>
        )}
    </Draggable>
  )
}
 */