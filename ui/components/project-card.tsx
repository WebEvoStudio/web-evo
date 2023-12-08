import {Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';

export class Project {
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
export const ProjectCard = ({project}: {project: Project}) => {
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
