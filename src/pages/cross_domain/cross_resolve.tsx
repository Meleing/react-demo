import * as React from 'react';
import './styles/cross_resolve.less';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

export class CrossResolve extends React.Component<{}, {}> {
    render() {
        return (
            <Typography>
                <Title>解决跨域的方法（前后端交互）</Title>
                <Title level={3}>1、jsonp</Title>
                <Paragraph></Paragraph>
                <Title level={3}>2、CORS</Title>
                <Paragraph></Paragraph>
                <Title level={3}>3、nginx反向代理</Title>
                <Paragraph></Paragraph>
                <Title level={3}>4、HttpClient</Title>
                <Paragraph></Paragraph>
            </Typography>
        )
    }
}