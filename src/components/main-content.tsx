import React, { Component } from 'react';

import './main-content.scss';

class MainContent extends Component {
    render() {
        return (<div className='main-content' >
            <article className='main-article' />
            <article className='side-article' />
        </div>);
    }
}

export default MainContent;