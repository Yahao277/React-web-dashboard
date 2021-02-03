import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import TextCard from './TextCard';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CardItems = [
    {
        title: 'Find and Replace tool',
        href: '/app/tools/find_replace_text',
        description: 'tools to manipulate text strings'

    },
    {
        title: 'Prefix - suffix',
        href: '/app/tools/add_prefix',
        description: 'Add prefix or suffix to texts'
    },
    {
        title: 'Count characters',
        href: '/app/tools/count_characters',
        description: 'Count the characters of a document'
    },
    {
      title: 'Random number generator',
      href: '/app/tools/number_generator',
      description: 'Generate a random number'
    },
    {
      title: 'Hash Calculator',
      href: '/app/tools/hash_calculator',
      description: 'Generate a Hash'
    }

]

const TextView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Text tools"
    >
    <Container maxWidth={false}>
        <Grid container spacing={6}>
            {CardItems.map((item,i) => {
            return(
            <Grid item lg={4} sm={6} xl={3} xs={12} >
                <TextCard {...item} key={i}/>
            </Grid>);
            })}

            {/** Old version
             * <Grid item lg={4} sm={6} xl={3} xs={12}>
                <TextCard {...CardItems[1]}/>
            </Grid>
            <Grid item lg={4} sm={6} xl={3} xs={12}>
                <TextCard {...CardItems[2]}/>
            </Grid> */}
        </Grid>
    </Container>

    </Page>
  );
};

export default TextView;
