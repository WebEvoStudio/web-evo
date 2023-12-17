import {Project} from '@/ui/components/project-card';
import {Images, webEvoPoster} from './images';

export const projects: Project[] = [
  {
    name: '特浦乐餐厅小程序',
    description: '特浦乐快餐主打“出餐快，吃的香”，坚持用新鲜的食材认真做好每一道菜，让顾客在享受美食的同时也能享受便捷的服务。',
    headerImg: Images.topleRestaurant,
    sortServices: ['微信小程序', '前端'],
    sortTechnologies: ['uni-app', 'vue', 'UnoCss'],
  },
  {
    name: 'WebEvo官网',
    description: '可信赖的技术合作伙伴, 我们通过加速开发流程，填补您软件项目中的技术空白，帮助您实现更好的结果，并在减少部署时间的同时提供高质量的解决方案。',
    headerImg: webEvoPoster,
    sortServices: ['Web', '前端'],
    sortTechnologies: ['react', 'next.js'],
  },
];
