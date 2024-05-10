import { FooterOnly } from '~/components/Layout';

import config from '~/config/';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import DesignByYou from '~/pages/DesignByYou';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.designByYou, component: DesignByYou, layout: FooterOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
