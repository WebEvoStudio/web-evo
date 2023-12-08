'use client';
import React from 'react';
import {
  Chip,
  Container,
} from '@mui/material';
import Section from '../components/section';
import {Images} from '../../core/libs/images';
import {ProjectCard} from '../components/project-card';
import {projects} from '../../data/projects';

export const Projects = () => {
  console.info(Images.topleRestaurant);
  const Tags = () => {
    return (
      <div>
        <Chip variant={'outlined'} label={'所有的'} sx={{mx: .5}}></Chip>
        <Chip variant={'outlined'} label={'web'} sx={{mx: .5}}></Chip>
        <Chip variant={'outlined'} label={'mobile'} sx={{mx: .5}}></Chip>
        <Chip variant={'outlined'} label={'react'} sx={{mx: .5}}></Chip>
      </div>
    );
  };
  return (
    <Container maxWidth={'lg'}>
      <Section title={'Projects'} desc={<Tags/>}>
        {projects.map((it, key) => (<ProjectCard key={key} project={it}></ProjectCard>))}
      </Section>
    </Container>
  );
};
