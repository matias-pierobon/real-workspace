import React from 'react'
import { Layout, Menu } from 'antd'

import Explorer from '../Explorer'
import SidePanel from '../SidePanel'
import './App.css'

const { Header, Sider, Content } = Layout

const App = () => (
    <app>
        <Layout> 
            <Sider className="sidebar">
                <div className="logo">
                    ReAl Workspace
                </div>
                <SidePanel />
            </Sider>
            <Layout>
                <Content className="content"><Explorer/></Content>
            </Layout>
        </Layout>
    </app>
)

export default App