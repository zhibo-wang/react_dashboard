/**
 * Created by wzb on 2017/10/17.
 */

import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import Content from './Container';
import Layout from 'antd';

class Main extends Component {


    render(){
        return(
            <Layout>
                <Header>
                    <img src="" alt=""/>
                </Header>
                <Layout>
                    <Nav/>
                </Layout>
                <Layout>
                    <Content/>
                </Layout>
            </Layout>
        )
    }
}

export default Main;
