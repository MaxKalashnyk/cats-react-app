import React, { Component } from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import {catsData} from './catsData';
import {logo} from './dog-paw.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.catClickHandler = this.catClickHandler.bind(this);
  }

  state = {
    catsData: catsData,
    currentCat: 0
  }

  catClickHandler(event) {
  
    event.preventDefault();
    const currentDataKey = parseInt(event.target.dataset.index);
  
    this.setState({
      currentCat: currentDataKey
    });

  }

  render() {

    const catsLinkItems = this.state.catsData.map(cat => {
      return <SidebarItem click={this.catClickHandler} name={cat.catName} index={cat.id} key={cat.id.toString()} />
    });

    return (
      <div className="App">
        <aside className='main-sidebar'>
            <figure>
                <img src={logo} alt="cat-paw" className="main-sidebar__logo" />
                <figcaption>
                    <h2 className="main-sidebar__title">Будинок котів</h2>
                </figcaption>
            </figure>
            <nav className='main-sidebar__menu'>
                <ul className='menu-content'>{catsLinkItems}</ul>
            </nav>
        </aside>
         <main className="main-content">
            <section>
                <article className="article-content">
                    <h3 className="article-content__title">{this.state.catsData[this.state.currentCat].catName}</h3>
                        <figure>
                            <img src={this.state.catsData[this.state.currentCat].catSrc} alt="cat" className="article-content__image" />
                            <figcaption>
                                <p className="article-content__text">{this.state.catsData[this.state.currentCat].catDescription}</p>
                            </figcaption>
                        </figure>
                </article>
            </section>
        </main>
      </div>
    );

  }

}

export default App;
