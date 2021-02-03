import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Divider,
    Button,
    Box,
    Typography,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth:186
    }
}))

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

const OrderCard = ({ className, order,...rest }) => {
  const classes = useStyles()
    return(
      <Card className={clsx(classes.root,className)}
        {...rest}>
         <CardContent>
           <Typography
            color="textPrimary"
            align="left"
            variant="body2">
              Client name
           </Typography>
           <Box display="flex" justifyContent="space-between" >
           <Typography
            color="textSecondary"
             variant="caption">
             Content: {order.content}
           </Typography>
           <Typography
            color="textSecondary"
            variant="h6">
             #{order.id}
           </Typography>
           </Box>
         </CardContent>
         <Divider/>
         {/*
         <CardActions>
          <Button
            color="primary"
            fullWidth
            variant="text"
          >
            Details
          </Button>
         </CardActions>
        */}
      </Card>
    )
};

const OrderItem = ({item,index}) => {
  return(
    <Draggable
     key={item.id}
     draggableId={item.id}
     index={index}>
       {(provided,snapshot) => (
         <div 
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
            <OrderCard order={item} />
          </div>

       )}
     </Draggable>
  )
}

export default OrderItem;