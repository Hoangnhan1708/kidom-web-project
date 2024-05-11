import { FooterOnly } from '~/components/Layout';

import config from '~/config/';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Product from '~/pages/Product';
import AboutUs from '~/pages/AboutUs';
import Blog from '~/pages/Blog';
import Faq from '~/pages/Faq';
import Policy from '~/pages/Policy';
import Search from '~/pages/Search';

import DesignByYou from '~/pages/DesignByYou';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.product, component: Product },
    { path: config.routes.aboutus, component: AboutUs },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.search, component: Search },
    { path: config.routes.faq, component: Faq },
    { path: config.routes.policy, component: Policy },
    { path: config.routes.designByYou, component: DesignByYou, layout: FooterOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };