import React from 'react';
import {Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Box,
    Divider,
    Typography,
    colors,
    Avatar,
    makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const TextCard = ({title,href,description,className, ...rest}) => {
    const classes = useStyles();
    return(
        <Card className = {clsx(classes.root,className)}
        {...rest}>
         <CardContent>

            <Typography color="textPrimary"
            align="center"
            gutterBottom
            variant="h3">
                {title}
            </Typography>

            <Typography color="textPrimary"
            align="center"
            variant="body2">
                {description.split('\n').map((item, i) => <p key={i}>{item}</p>)}
            </Typography>
         </CardContent>
         <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
          component={RouterLink}
          to={href}
        >
          Go to
        </Button>
      </CardActions>
        </Card>
    )
}

export default TextCard;