import React, {Component} from 'react';
import './App.scss';
import DownLogo from "./components/shared/down-logo/down-logo";
import Header from "./components/header/header";
import SideNav from "./components/side-nav/side-nav";
import Content from "./components/content/content";

function App() {
    return (
        <React.Fragment>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Header />
                    <SideNav/>
                    <Content/>
                </div>
            </div>
            <DownLogo/>
        </React.Fragment>
    );
}

export default App;
