import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
import Five from './five';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Challenges() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Challenge 1" {...a11yProps(0)} />
                    <Tab label="Challenge 2" {...a11yProps(1)} />
                    <Tab label="Challenge 3" {...a11yProps(2)} />
                    <Tab label="Challenge 4" {...a11yProps(2)} />
                    <Tab label="Challenge 5" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <One/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Two/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Three/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Four/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Five/>
            </TabPanel>
        </>
    )
}