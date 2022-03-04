import React from "react";
import styles from "./Header.module.css";
import {Button, Dropdown, Input, Layout, Menu, Typography} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import logo from "../../assets/logo.gif";

export const Header: React.FC = () => {
    return <div className={styles['app-header']}>

        <div className={styles['top-header']}>
            <div className={styles.inner}>
                <Typography.Text >让步伐随心而动</Typography.Text>
                <Dropdown.Button
                    style={{marginLeft: 15}}
                    overlay={
                        <Menu>
                            <Menu.Item>中文</Menu.Item>
                            <Menu.Item>English</Menu.Item>
                        </Menu>
                    }
                    icon={<GlobalOutlined/>}
                >语言</Dropdown.Button>
                <Button.Group className={styles['button-group']}>
                    <Button>注册</Button>
                    <Button>登陆</Button>
                </Button.Group>
            </div>
        </div>

        <Layout.Header className={styles['main-header']}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <Typography.Title className={styles.title}
                              level={3}>旅游网</Typography.Title>
            <Input.Search
                className={styles['search-input']}
                placeholder={'请输入目的地、主题、或关键字'}/>
        </Layout.Header>

        <Menu mode={'horizontal'} className={styles['main-menu']}>
            <Menu.Item key={1}>首页</Menu.Item>
            <Menu.Item key={2}>周未游</Menu.Item>
            <Menu.Item key={3}>跟团游</Menu.Item>
            <Menu.Item key={4}>自由行</Menu.Item>
            <Menu.Item key={5}>私家团</Menu.Item>
            <Menu.Item key={6}>定制游</Menu.Item>
        </Menu>
    </div>
}
