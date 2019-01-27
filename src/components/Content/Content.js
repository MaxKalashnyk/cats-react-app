import React, { Component } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import Main from '../Main/Main';
import MobileIcon from '../layout/MobileIcon';
import LogoMain from '../layout/LogoMain';

export class Content extends Component {

    state = {
        sidebarOpen: false
    }

    constructor() {
        super();
        this.currentItem = 0;
    }

    catClickHandler(event) {

        event.preventDefault();
        const currentDataKey = parseInt(event.target.dataset.index);

        this.currentItem = currentDataKey;
        
        this.setState({
            currentCat: currentDataKey
        });

    }

    
    mobileIconClickHandler = () => {

        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })

    }

  render() {

    const catsLinkItems = this.props.catsData.map(cat => {
        return <SidebarItem click={this.catClickHandler.bind(this)} name={cat.catName} index={cat.id} key={cat.id.toString()} />
    });

    return (
        <section>
            <MobileIcon click={this.mobileIconClickHandler.bind(this)} setStyle={this.state.sidebarOpen ? "menu-icon open" : "menu-icon"}/>
            <aside className={this.state.sidebarOpen ? "main-sidebar open" : "main-sidebar"}>
                <LogoMain />
                <nav className='main-sidebar__menu'>
                    <ul className='menu-content'>
                        {catsLinkItems}
                    </ul>
                </nav>
            </aside>
            <Main catsData={this.props.catsData} currentCat={this.currentItem} setStyleClass={this.state.sidebarOpen ? "main-content opened-sidebar" : "main-content"}/>
        </section>
    )
  }
}

export default Content
