import { AppRouteRecordRaw } from '../types';

const KNOWLEDGE: AppRouteRecordRaw = {
  component: undefined,
  path: '/knowledge/list',
  name: 'knowledge-list',
  meta: {
    locale: 'menu.knowledge',
    requiresAuth: true,
    icon: 'icon-layers',
    order: 0,
  }
};

export default KNOWLEDGE;
