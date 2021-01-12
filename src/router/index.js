import { createRouter, createWebHistory } from 'vue-router';

//import pages
import UserDetail from '../pages/users/UserDetails.vue';
import ProductDetails from '../pages/products/ProductDetails.vue';
import ProductPublication from '../pages/products/ProductPublication.vue';
import ProductsList from '../pages/products/ProductsList.vue';
import ContactUser from '../pages/requests/ContactUser.vue';
import RequestRecivied from '../pages/requests/RequestRecivied.vue';
import Notfound from '../pages/NotFound.vue'
import UserAuth from '../pages/auth/UserAuth.vue';

//import vuex store
import store from '../store/index.js';

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    component: ProductsList,
  },
  {
    path: '/products/:id',
    component: ProductDetails,
    props: true,
    children: [
      {
        path: 'contact',
        component: ContactUser,
      }
    ]
  },
  {
    path: '/publish',
    component: ProductPublication,
    meta: { requireAuth: true}
  },
  {
    path: '/users/:id',
    component: UserDetail,
  },
  {
    path: '/requests',
    component: RequestRecivied,
    meta: { requireAuth: true}
  },
  {
    path: '/auth',
    component: UserAuth,
    meta: { requireUnauth: true}
  },
  {
    path: '/:notFound(.*)',
    component: Notfound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(function(to, _, next) {
  if(to.meta.requireAuth && !store.getters.isAuthenticated){
    next('/auth');
  } else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
    next('/')
  } else {
    next();
  }
});

export default router
