import { FooterOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import DesignByYou from '~/pages/DesignByYou';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/cart', component: Cart },
    { path: '/design-by-you', component: DesignByYou, layout: FooterOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
