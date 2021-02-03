import React,{useState} from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    makeStyles,
    Button,
    Divider,
    TextareaAutosize,
    TextField,
    colors
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  inputTextArea:{
      width: '100%',
      maxWidth: '100%',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3)
  },
  prefixTextField:{
      width: '100%',
  },
  suffixTextField: {
      width:'100%',
      marginBottom: 10
  },
  outputTextArea: {
      width: '100%',
      maxWidth: '100%',
      padding: theme.spacing(1),
      marginTop: 10,
      marginBottom: 10
  },
  buttons: {
      marginRight: 10
  }
}));

const AddPrefixSuffix = () => {
    const classes = useStyles();
    let [inputText,setInputText] = useState("");
    let [outputText,setOutputText] = useState("");
    let [preffix,setPreffix] = useState("");
    let [sufffix,setSufffix] = useState("");

    const handleInput = (event) =>{
        setInputText(event.target.value)
    }
    const handlePrefix = (event) => {
        setPreffix(event.target.value)
    }
    const handleAddClick = () => {
        let result="";
        inputText.split("\n").map((item,index)=>{
            console.log(item + index)
            let old = item;
            let newitem = item.replace(/.+/g,preffix + old + sufffix);
            result += newitem + '\n';
            
        })
        setOutputText(result)
    }
    const handleSuffix = (event) => {
        setSufffix(event.target.value)
    }
    const handleOutput = (event) => {
        setOutputText(event.target.value)
    }
    return(
        <Page className={classes.root}
        title="Add Prefix or Suffix">
            <Container>
                <Typography
                 color="textPrimary"
                 variant="h2">
                    Add Prefix and/or Suffix into Each Line
                </Typography>
                <TextareaAutosize
                 aria-label="empty textarea"
                 placeholder="Input Box"
                 rowsMin={12}
                 onChange={handleInput}
                 value={inputText}
                 className = {classes.inputTextArea} />
                <Typography
                 color="textPrimary"
                 variant="body1"
                 >
                    Add this prefix into the beginning of each line:
                </Typography>
                <TextField 
                 variant="outlined"
                 onChange={handlePrefix}
                 className={classes.prefixTextField} />
                <Typography
                 color="textPrimary"
                 variant="body1">
                    Add this suffix into the end of each line:
                </Typography>
                <TextField 
                 variant="outlined"
                 onChange={handleSuffix}
                 className={classes.suffixTextField} />
                    <Button 
                     className = {classes.buttons}
                     variant="contained" 
                     onClick={handleAddClick}
                     color="primary" >Add Prefix or Suffix</Button>
                    <Button 
                     className = {classes.buttons} 
                     variant="contained" 
                     color="primary">Select output Text</Button>
                    <Button 
                     className = {classes.buttons} 
                     variant="contained" 
                     color="primary">Clear Text</Button>
                <TextareaAutosize
                 aria-label="empty textarea"
                 placeholder="Output Box"
                 rowsMin={12}
                 onChange={handleOutput}
                 value={outputText}
                 className = {classes.outputTextArea} />
            </Container>
        </Page>
    )
}

export default AddPrefixSuffix;