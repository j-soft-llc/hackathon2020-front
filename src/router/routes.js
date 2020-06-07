import store from '../store';

let entryUrl = null;

async function guard(to, from, next) {
  console.log(store().getters.getLoggedin && process.env.NODE_ENV === 'development');
  if (localStorage.getItem('token') || process.env.NODE_ENV === 'development') {
    if (entryUrl) {
      const url = entryUrl;
      entryUrl = null;
      next(url);
    } else {
      next();
    }
  }
  if (localStorage.getItem('token') || process.env.NODE_ENV === 'development') {
    next();
  } else {
    entryUrl = to.path;
    next('/auth');
  }
}

function authGuard(to, from, next) {
  if (localStorage.getItem('token') || process.env.NODE_ENV === 'development') {
    next('/home');
  } else {
    next();
  }
}

// export const beforeEach = (to, from, next) => {
//   const findedRecord = to.matched.find((record) => record.meta.title);
//   if (!findedRecord) {
//     next();
//   }
//   next();
// };

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
      { path: 'relevant', component: () => import('pages/Relevant.vue') },
      { path: 'treatment-list', component: () => import('pages/TreatmentList.vue') },
      { path: 'treatment-detail', component: () => import('pages/TreatmentDetail.vue') },
      { path: 'leader-detail/:id', component: () => import('pages/LeaderDetail.vue') },
      { path: 'chat-page', component: () => import('pages/ChatPage.vue') },
      { path: 'more', component: () => import('pages/More.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'profile-edit', component: () => import('pages/ProfileEdit.vue') },
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
