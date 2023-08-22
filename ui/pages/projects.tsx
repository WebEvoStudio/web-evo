'use client';
import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
} from '@mui/material';
import Section from '../components/section';
import {Images} from '../../core/libs/images';
import Image from 'next/image';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';

class Project {
  /**
   * 名称
   */
  name!: string;
  description?: string;
  previewImg?: string;
  headerImg?: string | StaticImport;
  sortServices?: string[];
  /**
   * @example ['react', 'python']
   */
  sortTechnologies?: string[];
  aspects?: {
    /**
     * @example ['react', 'python']
     */
    technology_stack?: string[],
    /**
     * @example ['Frontend', 'Backend', 'Mobile']
     */
    services_provided?: string[],
  };
}

export const Projects = () => {
  console.info(Images.topleRestaurant);
  const projects: Project[] = [
    {
      name: '特浦乐餐厅小程序',
      headerImg: Images.topleRestaurant,
      sortServices: ['微信小程序', '前端'],
      sortTechnologies: ['uni-app', 'vue', 'UnoCss'],
    },
  ];
  const ProductCard = ({project}: {project: Project}) => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={project.headerImg!} alt={''} layout="responsive"></Image>
          </CardMedia>
          <CardContent>
            <Typography>{project.name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project.sortServices?.map((it, key) => (<Chip variant={'outlined'} label={it} key={key}></Chip>))}
        </CardActions>
      </Card>
    );
  };
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
        {projects.map((it, key) => (<ProductCard key={key} project={it}></ProductCard>))}
      </Section>
    </Container>
  );
};
