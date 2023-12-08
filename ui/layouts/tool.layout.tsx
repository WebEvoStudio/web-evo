import React, {useEffect, useState} from 'react';
import {
  Box, Breadcrumbs, Collapse,
  Drawer, IconButton, Link, List,
  ListItem, ListItemButton,
  ListItemIcon, ListItemText,
  Tooltip, Typography,
} from '@mui/material';
import {
  AddPhotoAlternate, ExpandLess, ExpandMore,
  Image as ImageIcon, NavigateNext, ImageOutlined,
  NotificationsOutlined, PlayArrowOutlined,
} from '@mui/icons-material';
import {LoadingButton} from '@mui/lab';

interface Menu {
  title: string;
  icon: React.ReactElement;
  href: string;
  open?: boolean;
  children?: Menu[];
}

const ToolLayout = ({children, onRun, running, runText}: any) => {
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
            icon: <AddPhotoAlternate/>,
            href: '/tools/image',
          },
        ],
      },
    ]);
  }, []);
  const drawerStyle = {
    [`& .MuiDrawer-paper`]: {boxSizing: 'border-box', position: 'relative'},
    display: {xs: 'none', sm: 'block'},
  };
  const handleClick = (index: number) => {
    setMenus(menus.map((menu, _index) => _index === index ? {...menu, open: !menu.open} : menu));
  };
  const SideBar = () => (
    <Drawer
      variant="permanent"
      sx={drawerStyle}>
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
                    <ListItem button key={index} sx={{pl: 4, color: '#00B0FF'}}>
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
  );
  const breadcrumbs = [
    <Link underline="none" key="1" color="inherit" href="/">
      WebEvolution
    </Link>,
    <Link
      underline="none"
      key="2"
      color="inherit"
      href="/tools"
    >
      工具
    </Link>,
    <Typography key="3" color="text.primary">
      图像清晰度增强
    </Typography>,
  ];
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)'}}>
      <Box
        sx={{
          height: '40px', background: '#f2f2f2',
          display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end', padding: '0 60px',
        }}>
        <Tooltip title={runText} placement={'bottom'}>
          <LoadingButton
            variant={'contained'}
            size={'small'}
            loading={running}
            loadingPosition="start"
            color={'primary'}
            startIcon={<PlayArrowOutlined/>}
            onClick={onRun}
          >Run</LoadingButton>
        </Tooltip>
      </Box>
      <Box sx={{flex: 1, display: 'flex', height: 'calc(100% - 70px)'}}>
        <Box sx={{width: '40px', background: '#f2f2f2', margin: '1px 0'}}>
          <Tooltip placement={'right'} title={'图像清晰度增强'}>
            <IconButton >
              <ImageOutlined />
            </IconButton >
          </Tooltip>
        </Box>
        <Box sx={{flex: 1, height: '100%'}}>
          {children}
        </Box>
        <Box sx={{width: '40px', background: '#f2f2f2', margin: '1px 0'}}>
          <Tooltip placement={'left'} title={'通知'}>
            <IconButton >
              <NotificationsOutlined />
            </IconButton >
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{height: '30px', background: '#f2f2f2', display: 'flex', alignItems: 'center', padding: '0 10px'}}>
        <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default ToolLayout;
