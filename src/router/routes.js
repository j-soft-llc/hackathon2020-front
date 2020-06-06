
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'leader-detail', component: () => import('pages/LeaderDetail.vue') },
      { path: 'treatment-list', component: () => import('pages/TreatmentList.vue') },
      { path: 'chat-page', component: () => import('pages/ChatPage.vue') },
      { path: 'treatment-detail', component: () => import('pages/TreatmentDetail.vue') },
      { path: 'page-3', component: () => import('pages/Page-3.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
