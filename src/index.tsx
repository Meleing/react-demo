import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Layout } from 'antd';
import './styles/index.less';
import { Switch, Router } from 'react-router-dom';
import { routeConfigs } from './config/route';
import { renderRoutes } from 'react-router-config';
import { createHashHistory } from 'history';
import { TopHeader } from './components/TopHeader';
import { AllMenu } from './components/Menu';

const history = createHashHistory();

const { Header, Sider, Content } = Layout;

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router history={history}>
                <Layout className='whole-container'>
                    <Header className='top-header'><TopHeader></TopHeader></Header>
                    <Layout>
                        <Sider className='accordion-left'><AllMenu></AllMenu></Sider>
                        <Content className='main-content'>
                            <Switch>
                                { renderRoutes(routeConfigs) }
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
