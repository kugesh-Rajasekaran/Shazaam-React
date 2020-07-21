import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DescriptionIcon from '@material-ui/icons/Description';
import InfoIcon from '@material-ui/icons/Info';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 350,
    paddingBottom:"5%"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="ITEM-1" {...a11yProps(0)} />
        <Tab label="ITEM-2" {...a11yProps(1)} />
        <Tab label="ITEM-3" {...a11yProps(2)} />
        <Tab label="ITEM-4" {...a11yProps(3)} />
        <Tab label="ITEM-5" {...a11yProps(4)} />
        <Tab label="ITEM-6" {...a11yProps(5)} />
        <Tab label="ITEM-7" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div >
      <h3><u> <InfoIcon fontSize="large"></InfoIcon>Product Name</u></h3>
      <h4>Name Of The Product</h4>
       </div>
      <div style={{paddingTop:"30%"}}>
      <h3><u> <DescriptionIcon fontSize="large"></DescriptionIcon>DESCRIPTION</u></h3>
      <h4>Description Of The Products</h4>
       </div> 
      </TabPanel>
      
    </div>
  );
}