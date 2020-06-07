import { CrossIntro } from "../pages/cross_domain/cross_intro";
import { RouteConfig } from 'react-router-config';
import { CrossResolve } from "../pages/cross_domain/cross_resolve";
import { Parent } from "../components/Parent";

export const routeConfigs: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component: CrossIntro
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
