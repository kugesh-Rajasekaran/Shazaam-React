import React from 'react';
import HorizontalTab from './Utils/HorizontalTab';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import classNames from "classnames";

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
const useStyles = makeStyles(styles);

export default function Home(){
    const classes = useStyles();
        return(
            <div>
                      <div className={classNames(classes.main, classes.mainRaised)}>

                <div style={{paddingTop:"5%",paddingLeft:"8%"}}>
                <div style={{paddingLeft:"30%",paddingBottom:"4%"}}>
                <h2><u><EventAvailableIcon fontSize="large"/>Items Available With Us</u></h2>
              </div>
               <HorizontalTab/> 
               </div>
               </div>
              
            </div>
        )
    
}