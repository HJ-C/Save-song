import Users from './pages/Users'
import Home from './pages/Home'
import Songs from './pages/Songs'

export default [
    {
        path : '/',
        component:Home
    },

    {
        path : '/songs',
        component: Songs
    },

    {
        path : '/users',
        component:Users
    },

]