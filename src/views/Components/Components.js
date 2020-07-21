import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Home from "./RealComponents/Home/Home";

import styles from "assets/jss/material-kit-react/views/components.js";
import About from "./RealComponents/About/About";
import Contact from "./RealComponents/Contact/Contact";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

import "assets/scss/material-kit-react.scss?v=1.8.0";
const useStyles = makeStyles(styles);
var hist = createBrowserHistory();
export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  console.log(hist);
  return (
   
       <BrowserRouter>
    
      <Header
        brand="GS CONSTRUCTIONS"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "black"
        }}
        {...rest}
      />
      <Parallax  image={require("assets/img/model-pic.jpg")}>
        <div  className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Organization Name</h1>
                <h3 className={classes.subtitle}>
                 Your Slogan
                </h3>
                
              </div>
              
            </GridItem>
            
          </GridContainer>
          
        </div>
        

      </Parallax>
      
      <Route exact path="/" component={Home} />
      <Route  path="/Shazaam-React" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
  
      <Footer />
  
      </BrowserRouter>

   
  );
}
/*
<SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />*/

        /*
        /*
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
*/