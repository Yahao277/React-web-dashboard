import React,{useState} from 'react';
import {
    makeStyles,
    TextareaAutosize,
    Typography,
    Button,
    Container,
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    findArea: {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    replaceArea: {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    outputArea: {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    buttons : {
        marginRight: theme.spacing(1),
    }
}));

const FindReplaceText = () => {
    const classes = useStyles();
    const txt1 = "Find and Replace Tool";
    const findthis = "Find this:";
    const replacethis = "Replace this:";
    const buttonStyles = {
        variant : 'contained',
        color : 'primary'
    }
    let [findText,setFindText] = useState("");
    let [replaceText,setReplaceText] = useState("");
    let [outputText,setOutputText] = useState("");

    const handleFindArea = (event) => {
        setFindText(event.target.value)
    }
    const handleReplaceArea = (event) => {
        setReplaceText(event.target.value)
    }
    const handleClick = () => {
        setOutputText(outputText.replaceAll(findText,replaceText))
    }
    const handleOutputArea = (event) => {
        setOutputText(event.target.value)
    }

    return(
        <Page className={classes.root}
        title="Find and Replace Tool">
            <Container>
                <Typography
                 color="textPrimary"
                 variant="h2">
                    {txt1}
                </Typography>
                <Typography
                 color="textPrimary"
                 variant="body1">
                     {findthis}
                </Typography>
                <TextareaAutosize 
                 className={classes.findArea}
                 onChange={handleFindArea}
                 rowsMin={6} />
                <Typography
                 color="textPrimary"
                 variant="body1">
                    {replacethis}
                </Typography>
                <TextareaAutosize 
                 className={classes.replaceArea}
                 onChange={handleReplaceArea}
                 rowsMin={6} />
                    <Button
                     className={classes.buttons}
                     onClick={handleClick}
                     {...buttonStyles}
                     >Replace</Button>
                     <Button
                      className={classes.buttons}
                      {...buttonStyles}> Select output Text</Button>
                    <Button
                     className={classes.buttons}
                     {...buttonStyles}>Clear Text</Button>
                <TextareaAutosize 
                 className={classes.outputArea}
                 onChange={handleOutputArea}
                 value={outputText}
                 placeholder="Text to replace"
                 rowsMin={12}/> 
            </Container>
        </Page>
    )
}

export default FindReplaceText;