import React from  'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container }  from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps'; 
import BarChart from '../charts/BarChart';
import ReactSpeedometer from "react-d3-speedometer";


const Main =  () => {   
    const textColor = '#AAA';
    return(
        <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <AppsIcon />
                <Typography variant="h6">
                    Shopper stop
                </Typography>
                
            </Toolbar>                
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textSecondary" gutterBottom>
                        Graph data
                    </Typography>
                    <Typography variant="h6" align="center" color="textPrimary" paragraph>
            
                    </Typography>
                    <BarChart />                      
                    <ReactSpeedometer
                        maxValue={100}
                        value={473}
                        needleColor="red"
                        startColor="green"
                        segments={10}
                        endColor="blue"
                        textColor="grey"
                        textColor={textColor}
                        width={200}
                        height={200}
                    />                    
                    </Container>
            </div>
        </main>
        </>
    );
};

export default Main;