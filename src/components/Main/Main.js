import React from 'react';

const Main = (props) => {
    return (
        <main className={props.setStyleClass}>
            <section>
                <article className="article-content">
                    <h3 className="article-content__title">{props.catsData[props.currentCat].catName}</h3>
                        <figure>
                            <img src={props.catsData[props.currentCat].catSrc} alt="cat" className="article-content__image" />
                            <figcaption>
                                <p className="article-content__text">{props.catsData[props.currentCat].catDescription}</p>
                            </figcaption>
                        </figure>
                </article>
            </section>
        </main>
      )
}

export default Main
