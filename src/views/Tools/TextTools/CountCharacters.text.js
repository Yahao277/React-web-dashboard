import React,{useState} from 'react';
import {
    Container,
    Typography,
    makeStyles,
    Button,
    TextareaAutosize,
    TextField,
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    inputArea: {
        width:'100%',
        maxWidth:'100%',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
    resultText: {
        marginTop: theme.spacing(1)
    }
}))

const CountCharacters = () => {
    const classes = useStyles();
    let [result,setResult] = useState("");
    let [inputText,setInputText] = useState("");
    const calculateCounts = () => {
        setResult("Total count is: " + inputText.length);
    }
    const handleInputText = (event) => {
        setInputText(event.target.value)
    }
    return(
        <Page className={classes.root}
        title='Count characters tool'>
            <Container>
                <Typography
                 color="textPrimary"
                 variant="h2">
                    Count Characters Tool
                </Typography>
                <TextareaAutosize
                 aria-label="empty textarea"
                 className={classes.inputArea}
                 placeholder="Input Box: Enter the text to count"
                 rowsMin={12}
                 onChange={handleInputText}
                 value={inputText} />
                 <Button
                  variant="contained"
                  color="primary"
                  onClick={calculateCounts}>
                      Count Text
                  </Button>
                 <Typography
                  className={classes.resultText}
                  color="textPrimary"
                  variant="body1">
                      {result}
                 </Typography>
            </Container>
        </Page>
    )
}

export default CountCharacters;