import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {ExpandLess, ExpandMore, Image as ImageIcon, AddPhotoAlternate} from '@mui/icons-material';

interface Menu {
  title: string;
  icon: React.ReactElement;
  href: string;
  open?: boolean;
  children?: Menu[];
}

const Tools: NextPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  useEffect(() => {
    setMenus([
      {
        title: '图像处理',
        icon: <ImageIcon />,
        href: '/tools/image',
        open: true,
        children: [
          {
            title: '图像清晰度增强',
            icon: <AddPhotoAlternate />,
            href: '/tools/image',
          },
        ],
      },
    ]);
  }, []);
  const handleClick = (index: number) => {
    setMenus(menus.map((menu, _index) => _index === index ? {...menu, open: !menu.open} : menu));
  };
  return (
    <Box sx={{display: 'flex', height: 'calc(100vh - 56px)'}}>
      <Drawer
        variant="permanent"
        sx={{[`& .MuiDrawer-paper`]: {boxSizing: 'border-box', position: 'relative'}}}>
        <List>
          {menus.map((menu, index) => (
            <div key={index}>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.title}/>
                {menu.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {menu.children?.length && (
                <Collapse in={menu.open}>
                  <List disablePadding component="div">
                    {menu.children.map((child, index) => (
                      <ListItem button key={index} sx={{pl: 4}}>
                        <ListItemIcon>{child.icon}</ListItemIcon>
                        <ListItemText primary={child.title}/>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
      <Box></Box>
    </Box>
  );
};
export default Tools;
