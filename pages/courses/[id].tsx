import React, {useEffect, useState} from 'react';
import {Box, Card, Container} from '@mui/material';
import axios from 'axios';
import Markdown from '../../core/unit/markdown';
const CourseDetail = () => {
  const [catalogs, setCatalogs] = useState<any[]>([]);
  useEffect(() => {
    axios.get(`/codelabs/first-flutter-app.md`)
        .then(({data}) => {
          console.log(data);
          console.log(Markdown.getSecondTitle(data));
          setCatalogs(Markdown.getSecondTitle(data));
        });
  }, []);
  return (
    <Box sx={{display: 'flex', mt: 2}}>
      <Box width={256} sx={{ml: 2, minWidth: 256, mt: -1}}>
        {catalogs.map((it, index) => (
          <Card key={index} sx={{my: 1, padding: 1, display: 'flex', alignItems: 'center'}}>
            <Box
              sx={{
                width: 26,
                height: 26,
                backgroundColor: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1,
                borderRadius: '50%',
              }}
            >{index + 1}</Box>
            <div>{it}</div>
          </Card>
        ))}
      </Box>
      <Container maxWidth={'md'}>
        <Card>1</Card>
      </Container>
    </Box>
  );
};
export default CourseDetail;
