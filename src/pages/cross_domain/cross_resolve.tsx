import * as React from 'react';
import './styles/cross_resolve.less';
import { Typography, Button, message } from 'antd';
import { test1 } from '../../service/cross_domain_server';

const { Title, Paragraph, Text } = Typography;

export class CrossResolve extends React.Component<{}, {}> {
    render() {
        return (
            <Typography>
                <Title>解决跨域的方法（前后端交互）</Title>
                <Title level={3}>1、jsonp</Title>
                <Paragraph></Paragraph>
                <Title level={3}>2、CORS(跨域资源共享)</Title>
                <Paragraph>
                    服务端设置响应头Access-Control-Allow-Origin，可以设置允许访问的域，如果设置为*，则允许所有域访问。
                </Paragraph>
                <Paragraph>
                    <Button type="primary" onClick={this.corsClick}>CORS演示</Button>
                </Paragraph>
                <Title level={3}>3、nginx反向代理</Title>
                <Paragraph></Paragraph>
                <Title level={3}>4、HttpClient</Title>
                <Paragraph></Paragraph>
            </Typography>
        )
    }

    corsClick = () => {
        test1().then(res => {
            message.info(JSON.stringify(res.data));
        }).catch(e => {
            message.error(e.message);
        })
    }
}