

import * as React from "react";
import './styles/top_header.less';
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

export class AllMenu extends React.Component<{}, {}> {
    render() {
        return (
            <Menu
                // defaultSelectedKeys={['1']}
                defaultSelectedKeys={['5']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
            >
                <SubMenu key="sub1" title='跨域'>
                    <Menu.Item key="5"><Link to={'/cross/intro'}>跨域介绍</Link></Menu.Item>
                    <Menu.Item key="7"><Link to={'/cross/resolve'}>跨域解决方法</Link></Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
