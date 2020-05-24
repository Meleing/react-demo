import * as React from 'react';
import './styles/cross_intro.less';
import { Typography, Table, Button, message } from 'antd';
import { test, test1 } from '../../service/cross_domain_server';

const { Title, Paragraph, Text } = Typography;
const columns = [
    {
        title: '当前页面url',
        dataIndex: 'curUrl',
    },
    {
        title: '被请求页面url',
        dataIndex: 'requestUrl',
    },
    {
        title: '是否跨域',
        dataIndex: 'isCross',
    },
    {
        title: '原因',
        dataIndex: 'reason',
    },
];
  
const data = [
    {
        key: '1',
        curUrl: 'http://www.a.com',
        requestUrl: 'http://www.a.com/b.html',
        isCross: '否',
        reason: '同源（协议、域名、端口号相同）',
    },
    {
        key: '2',
        curUrl: 'http://www.a.com',
        requestUrl: 'https://www.a.com',
        isCross: '跨域',
        reason: '协议不同',
    },
    {
        key: '3',
        curUrl: 'http://www.a.com',
        requestUrl: 'http://www.b.com',
        isCross: '跨域',
        reason: '域名不同',
    },
    {
        key: '4',
        curUrl: 'http://www.a.com',
        requestUrl: 'http://test.a.com',
        isCross: '跨域',
        reason: '域名不同',
    },
    {
        key: '5',
        curUrl: 'http://www.a.com:8001',
        requestUrl: 'http://www.a.com:8002',
        isCross: '跨域',
        reason: '端口号不同',
    },
];
export class CrossIntro extends React.Component<{}, {}> {
    render() {
        return (
            <Typography>
                <Title>跨域简介</Title>
                <Title level={3}>一、为什么会出现跨域问题</Title>
                <Paragraph>
                    出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定。
                </Paragraph>
                <Paragraph>
                    同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。
                </Paragraph>
                <Paragraph>
                    所谓同源（即指在同一个域）就是两个页面具有相同的<Text code>协议（protocol）</Text>，<Text code>主机（host）</Text>和<Text code>端口号（port）</Text>。
                </Paragraph>
                <Title level={3}>二、什么是跨域</Title>
                <Paragraph>
                    当一个请求url的<Text strong>协议</Text>、<Text strong>域名</Text>、<Text strong>端口</Text>三者之间任意一个与当前页面url不同即为跨域。
                </Paragraph>
                <Table columns={columns} dataSource={data} pagination={false} />
                <Title level={3}>三、跨域带来了哪些影响</Title>
                <Paragraph>
                    1、无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB
                </Paragraph>
                <Paragraph>
                    2、无法接触非同源网页的 DOM
                </Paragraph>
                <Paragraph>
                    3、<Text strong>无法向非同源地址发送 AJAX 请求</Text>
                </Paragraph>
                <Title level={3}>四、跨域示例</Title>
                <Button onClick={this.clickHandler}>点我</Button>
                <Button onClick={this.clickHandler1}>点我</Button>
            </Typography>
        )
    }
    clickHandler = () => {
        test().then(res => {
            message.info(JSON.stringify(res.data));
        }).catch(e => {
            message.error(e.message);
        })
    }
    clickHandler1 = () => {
        test1().then(res => {
            message.info(JSON.stringify(res.data));
        }).catch(e => {
            message.error(e.message);
        })
    }
}