import React from 'react';
import {NextPage} from 'next';
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Image as ImageIcon} from '@mui/icons-material';

const Tools: NextPage = () => {
  return (
    <Box sx={{display: 'flex', height: 'calc(100vh - 56px)'}}>
      <Drawer
        variant="permanent"
        sx={{[`& .MuiDrawer-paper`]: {boxSizing: 'border-box', position: 'relative'}}}>
        <List>
          <ListItem>
            <ListItemIcon>
              <ImageIcon/>
            </ListItemIcon>
            <ListItemText>图像清晰度增强</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      3333
    </Box>
  );
};
export default Tools;
