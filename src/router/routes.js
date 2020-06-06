import store from '../store';

let entryUrl = null;

async function guard(to, from, next) {
  console.log(store().getters.getLoggedin);
  if (localStorage.getItem('token')) {
    if (entryUrl) {
      const url = entryUrl;
      entryUrl = null;
      next(url);
    } else {
      next();
    }
  }
  if (localStorage.getItem('token')) {
    next();
  } else {
    entryUrl = to.path;
    next('/auth');
  }
}

function authGuard(to, from, next) {
  if (localStorage.getItem('token')) {
    next('/home');
  } else {
    next();
  }
}

export const beforeEach = (to, from, next) => {
  const findedRecord = to.matched.find((record) => record.meta.title);
  if (!findedRecord) {
    next();
  }
  // let title;
  // if (findedRecord?.meta) {
  //   title = findedRecord.meta.title;
  //   if (title) {
  //     AppModule.setTitle(title);
  //   }
  // }
  next();
};

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/auth',
    beforeEnter: authGuard,
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Auth.vue'),
      },
    ],
  },
  {
    path: '/home',
    beforeEnter: guard,
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
