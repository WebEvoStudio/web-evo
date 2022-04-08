import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {
  Box, Button, Collapse,
  Drawer, List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import {ExpandLess, ExpandMore, Image as ImageIcon, AddPhotoAlternate} from '@mui/icons-material';
import Uploader from '../components/uploader';
import Image from 'next/image';
import axios from "axios";
import ObjectUnit from "../core/unit/object-unit";

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
  const [selectedImages, setSelectedImages] = useState<{file: File, path: string}[]>([]);
  const run = () => {
    console.log(selectedImages);
    const host = 'https://tiia.tencentcloudapi.com';
    const params = ObjectUnit.toParams({
      Action: 'EnhanceImage',
      Version: '2019-05-29',
      Region: 'ap-shanghai',
    });
    const url = host + '?' + params;
    console.log(url);
    axios.post(url).then((res) => {
      console.log(res);
    });
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
      <Box>
        <Toolbar>
          <Uploader onChange={(e) => setSelectedImages(e)}/>
          <Button sx={{color: '#fff'}} variant="contained" onClick={run}>开始增强</Button>
        </Toolbar>
        <Box>
          {selectedImages.map((image, index) => (
            <Image key={index} src={image.path} width={200} height={200}/>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Tools;
