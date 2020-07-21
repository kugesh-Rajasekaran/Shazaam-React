import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import classNames from "classnames";

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MapUtil from './Utils/MapUtil';
const useStyles = makeStyles(styles);

export default function Contact() {
  const classes = useStyles();
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ paddingBottom: "40%" }}>

          <div style={{ paddingLeft: "45%", paddingTop: "5%" }}>

            <h2><u><EventAvailableIcon fontSize="large" />Contact</u></h2>
            
          </div>

          <div style={{ paddingLeft: "35%", paddingTop: "2%" }}>

            <MapUtil />

          </div>
          <div style={{ paddingLeft: "46%", paddingTop: "25%" }}>

            <h3><u>Locate Us</u></h3>

          </div>
        </div>


      </div>
    </div>
  )

}