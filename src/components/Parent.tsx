import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

export class Parent extends React.Component<any, {}> {
    render() {
        return (
            <div>
                { renderRoutes(this.props.route.routes) }
            </div>
        )
    }
}