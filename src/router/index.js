import Vue from 'vue'
import Router from 'vue-router'
// Layout Admin Dashboard
import Default from '@/components/UIComponents/Layout'
// Home
import Home from '@/components/Home'
// Employee
import ProjectList from '@/components/project/List'
import ProjectDetail from '@/components/project/Detail'
// import EmployeeCreate from '@/components/employee/Create'
// import EmployeeEdit from '@/components/employee/Edit'
// end components

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '//',
      redirect: '/home',
      meta: 'Home',
      name: 'home',
      component: Default,
      children: [
        {
          path: 'home',
          meta: 'List',
          component: Home
        },
        {
          path: 'project',
          redirect: '/project',
          meta: 'Project',
          name: 'project',
          component: {
            render (c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              meta: 'List',
              component: ProjectList
            },
            // {
            //   path: 'create',
            //   name: 'stock-create',
            //   meta: 'Create',
            //   component: StockCreate
            // },
            {
              path: 'detail',
              name: 'project-detail',
              meta: 'Detail',
              props: true,
              component: ProjectDetail
            }
          ]
        }
        // {
        //   path: 'stock',
        //   redirect: '/stock',
        //   meta: 'Stock',
        //   name: 'stock',
        //   component: {
        //     render (c) {
        //       return c('router-view')
        //     }
        //   },
        //   children: [
        //     {
        //       path: '',
        //       meta: 'List',
        //       component: StockList
        //     },
        //     {
        //       path: 'create',
        //       name: 'stock-create',
        //       meta: 'Create',
        //       component: StockCreate
        //     },
        //     {
        //       path: 'edit/:id',
        //       name: 'stock-edit',
        //       meta: 'Edit',
        //       props: true,
        //       component: StockEdit
        //     }
        //   ]
        // }
        // {
        //   path: 'stock',
        //   redirect: '/stock',
        //   meta: 'Stock',
        //   name: 'stock',
        //   component: {
        //     render (c) {
        //       return c('router-view')
        //     }
        //   },
        //   children: [
        //     {
        //       path: '',
        //       meta: 'List',
        //       component: StockList
        //     },
        //     {
        //       path: 'create',
        //       name: 'stock-create',
        //       meta: 'Create',
        //       component: StockCreate
        //     },
        //     {
        //       path: 'edit/:id',
        //       name: 'stock-edit',
        //       meta: 'Edit',
        //       props: true,
        //       component: StockEdit
        //     }
        //   ]
        // }
      ]
    },
  ]

// end routes
})
