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
import Page from 'src/components/Page';
import {GoogleMap, 
  withGoogleMap, 
  withScriptjs,
  Marker
} from 'react-google-maps';

 const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
}))

//TODO: save on .env file 
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = () => {
    return(
        <GoogleMap
         defaultZoom={20}
         defaultCenter={{lat:41.556839,lng:2.008374}} >
         <Marker key={120} position={{lat:41.556839,lng:2.008374}}/>
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const styles = {
  mapdiv:{
    height: '100vh',
    width: '80vw',
    marginTop: '20px'
  }
}

const MapsView = () => {
  const classes = useStyles();
  return(
    <Container>
      <Typography variant="h2" color="textPrimary">
              Maps
      </Typography>
      <Divider />
      <div style={styles.mapdiv}>
        <WrappedMap
           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_API_KEY}&libraries=geometry,drawing,places`}
           loadingElement={<div style={{height: '90%',width: '90%'}} />}
           containerElement={<div style={{height: '90%',width: '90%'}} />}
           mapElement={<div style={{height: '90%',width: '90%'}} />}
      />
      </div>
    </Container>
  )
}   
    

export default MapsView;

    /*   

              <Grid container  spacing={3} direction="column" className={classes.GridStyle}>
                <Grid item>
                  <OrderCard order={data[0]}/>
                </Grid>
                <Grid item>
                  <OrderCard order={data[1]}/>
                </Grid>
                <Grid item>
                  <OrderCard order={data[2]}/>
                </Grid>
              </Grid>




 const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
}))

TODO: save on .env file 
const GOOGLE_API_KEY = "AIzaSyDIwL93o841bz4UWUUjqyTkXWMhlXLe5t4"

const Map = () => {
    return(
        <GoogleMap
         defaultZoom={20}
         defaultCenter={{lat:41.556839,lng:2.008374}} >
         <Marker key={120} position={{lat:41.556839,lng:2.008374}}/>
         <SearchBox controlPosition="TOP_LEFT">

         </SearchBox>
        </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const styles = {
  mapdiv:{
    height: '100vh',
    width: '80vw',
    marginTop: '20px'
  }
}

const MapsView = () => {
  const classes = useStyles();
  return(
    <Container>
      <Typography variant="h2" color="textPrimary">
              Maps
      </Typography>
      <Divider />
      <div style={styles.mapdiv}>
        <WrappedMap
           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_API_KEY}&libraries=geometry,drawing,places`}
           loadingElement={<div style={{height: '90%',width: '90%'}} />}
           containerElement={<div style={{height: '90%',width: '90%'}} />}
           mapElement={<div style={{height: '90%',width: '90%'}} />}
      />
      </div>
    </Container>


  )
}   
    
    
    <Page className={classes.root}
     title="Maps">
        <Container>
          <Typography variant="h2" color="textPrimary">
              Maps
          </Typography>
          <Container>
          <WrappedMap
           googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}
           &libraries=geometry,drawings,places`}
           loadingElement={<div style={{height: '50%',width: '50%'}} />}
           containerElement={<div style={{height: '50%',width: '50%'}} />}
           mapElement={<div style={{height: '50%',width: '50%'}} />}
            />
          </Container>
        </Container>

    </Page>
    */