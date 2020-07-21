import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import classNames from "classnames";

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
const useStyles = makeStyles(styles);

export default function About(){
    const classes = useStyles();
        return(
            <div>
                      <div className={classNames(classes.main, classes.mainRaised)}>

                <div style={{paddingTop:"8%"}}>
                <div style={{paddingLeft:"27%",paddingBottom:"40%"}}>
                <h2><u><EventAvailableIcon fontSize="large"/>Some Stories About The Company</u></h2>
              </div>
               </div>
               </div>
            </div>
        )
    
}