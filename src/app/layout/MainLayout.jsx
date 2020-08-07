import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Header from "components/header";
import Menu from "components/menu";
import Footer from "components/footer";
import Content from "components/content";



export class MainLayout extends PureComponent {
    static propTypes = {

    }

    render() {
        const { children, title, menu } = this.props;
        return (
            <div>
                <Header />
                <Menu />
                <Content children={children} />
                <Footer />
            </div>
        )
    }
}

export default MainLayout
