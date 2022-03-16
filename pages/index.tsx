import React from 'react';
import styles from '../styles/hello.module.scss';
import Link from 'next/link';
import CommonHead from '../components/common-head';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {Button} from '@mui/material';

/**
 * @class Index
 * @extends React.Component
 */
export default function Index() {
  // const options: any = require('/assets/jsons/particles.json');
  /**
   * render the component
   * @return {JSX.Element}
   */
  return (
    <div className={styles['hello']}>
      <CommonHead/>
      <h1 className={styles['h1']}>欢迎来到Web开发人员中心</h1>
      <div className={styles['image']}>
        <Image src={Images.undrawProudCoder} alt={''}/>
      </div>
      <div>
        <Link href={'/blog'}>
          <div>
            <Button color={'primary'} variant="contained">View our work</Button>
          </div>
        </Link>
      </div>
      <div className={styles['h1']}>我们是一个对网络开发充满热情的开发人员团队</div>
      <div className={styles['image']}>
        <Image src={Images.undrawTeamCollaboration} alt={''}/>
      </div>
      <div className={styles['h1']}>我们在这里帮助您构建您的Web项目</div>
      <div className={styles['image']}>
        <Image src={Images.undrawUnderConstruction} alt={''}/>
      </div>
      <div className={styles['h1']}>我们提供丰富的技术文章支持，您可以在这里获得更多的帮助</div>
      <div className={styles['image']}>
        <Image src={Images.undrawBlogPost} alt={''}/>
      </div>
      {/* <Particles id="tsparticles" options={options}/>*/}
    </div>
  );
}
