import React from 'react';
import {Metadata} from 'next';
import {commonMetadata} from '@/core/config/main.config';
import {Projects} from '@/ui/pages/projects';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 项目`,
};
const ProjectsPage = () => (<Projects></Projects>);
export default ProjectsPage;
