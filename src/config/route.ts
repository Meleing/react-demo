import { CrossIntro } from "../pages/cross_domain/cross_intro";
import { RouteConfig } from 'react-router-config';
import { Test1 } from "../pages/test/Test1";
import { Test2 } from "../pages/test/Test2";
import { CrossResolve } from "../pages/cross_domain/cross_resolve";
import { Parent } from "../components/Parent";

export const routeConfigs: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component: Test2
    },
    {
        path: "/test1",
        component: Test1
    },
    {
        path: "/cross",
        component: Parent,
        routes: [
            {
                path: '/cross/resolve',
                component: CrossResolve,
            }, {
                path: '/cross/intro',
                component: CrossIntro
            }
        ]
    },
]
