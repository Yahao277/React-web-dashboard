import React,{useState} from 'react'
import {
    makeStyles,
    Container,
    TextareaAutosize,
    Button,
    Typography
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight : '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    inputTextArea: {
      width: '100%',
      maxWidth: '100%',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3)
    },
    resultBox: {
        maxWidth: '100%',
        marginTop: theme.spacing(1)
    }
}))

const HashGenerator = () => {
    const classes = useStyles();
    let [inputText,setInputText] = useState('');
    let [result, setResult] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }
    const generateHash = () => {
        setResult('hash function pending todo:' + inputText)
    }

    return(
        <Page className={classes.root}
         title="Hash Generator">
        <Container>
             <Typography color="textPrimary" variant="h2">
                 Hash Generator
             </Typography>
             <TextareaAutosize
              placeholder="Input Box"
              rowsMin={12}
              onChange={handleInputChange}
              className={classes.inputTextArea}/>
              <Button variant="contained"
               color="primary"
               onClick={generateHash}>Get Hash</Button>
                   <Typography className={classes.resultBox}
                   color="textPrimary" variant="body1">
                       {result}
                   </Typography>
        </Container>
        </Page>
    )
}

export default HashGenerator;