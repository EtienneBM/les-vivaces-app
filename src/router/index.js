import { createRouter, createWebHistory } from 'vue-router';

import UserDetail from '../pages/users/UserDetails.vue';
import UserRegistration from '../pages/users/UserRegistration.vue';
import UsersList from '../pages/users/UsersList.vue';
import ProductDetails from '../pages/products/ProductDetails.vue';
import ProductPublication from '../pages/products/ProductPublication.vue';
import ProductsList from '../pages/products/ProductsList.vue';
import ContactUser from '../pages/requests/ContactUser.vue';
import RequestRecivied from  '../pages/requests/RequestRecivied.vue';
import Notfound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    component: ProductsList
  },
  {
    path: '/products/:id',
    component: ProductDetails
  },
  {
    path: '/publish',
    component: ProductPublication
  },
  { 
    path: '/users',
    component: UsersList
  },
  {
    path: '/users/:id',
    component: UserDetail,
    children: [
      {
        path: 'contact',
        component: ContactUser
      }
    ]
  },
  {
    path: '/register',
    component: UserRegistration
  },
  {
    path: '/requests',
    component: RequestRecivied
  },
  {
    path: '/:notFound(.*)',
    component: Notfound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
