import React from 'react';
import {
    makeStyles,
    Button,
    Box,
    Container,
    Grid,
    Divider,
    Typography
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {},
    createButton: {
        marginRight: theme.spacing(1)
    },
}));

const Toolbar = ({className, ...rest}) => {
    const classes = useStyles();

    return(
        <div className={clsx(classes.root,className)}
         {...rest}>
             <Box display="flex"
              justifyContent="space-between">
                <Typography variant="h2" color="textPrimary">
                Planning Drag and Drop
                </Typography>
                {/*
                  <Button 
                   className={classes.createButton}
                   color="primary"
                   variant="contained"> Create Order </Button>
                */}
             </Box>
        </div>
    )
}

export default Toolbar;