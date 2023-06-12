import React, {useEffect, useState} from 'react';
import {Col, Row} from '@nextui-org/react';
/**
 * Portfolio page component
 * @return {JSX.Element}
 */
export default function Portfolio(): JSX.Element {
  const [state, setState] = useState<{projects: any[]}>({
    projects: [],
  });
  useEffect(() => {
    const projects = [
      {
        title: '不虑管理平台',
        description: '不虑APP基础内容的配置管理以及各种服务商(医院｜商家)的内容发布与管理和客服人员沟通管理平台',
        cover: 'https://picsum.photos/200/300'},
      {title: 'Project 2', description: 'Description 2', cover: 'https://picsum.photos/200/300'},
      {title: 'Project 3', description: 'Description 3', cover: 'https://picsum.photos/200/300'},
      {title: 'Project 4', description: 'Description 4', cover: 'https://picsum.photos/200/300'},
    ];
    setState( {...state, projects: projects});
  }, []);
  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the portfolio page.</p>
      <div className="project-list">
        <Row className="project-item">
          {state.projects.map((project: any, index) => (
            <Col key={index}>
              {/* <Card cover={<img className={'cover'} src={project.cover}/>}>*/}
              {/* <Meta title={project.title} description={project.description}/>*/}
              {/* </Card>*/}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
