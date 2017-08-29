import React, { Component, PropTypes } from 'react';
import extractName from '../../extractName';
import Parser from 'html-react-parser';

import '../../../style/list.scss';

class News extends Component {
    constructor() {
        super();
    }

    scrollTo(id) {
        document.querySelector(`#${id}`).scrollIntoView();
    }

    componentDidMount() {
        this.props.getNews();

        if (this.props.match.params.client) {
            this.scrollTo(this.props.match.params.client);
        }
    }

    render() {
        return (<ul className="c-news-list">
            {
                (this.props.news ?
                        this.props.news.map((a,i) => {

                            let clientName = extractName(a.text[0]);

                            return <li id={clientName} className=" c-news-list__item" key={clientName}>
                                <div className="c-news-list__image">
                                    <img className="c-news-list__item-image" src={`/prototype/assets/actor_images/${clientName}.jpg`} />
                                </div>
                                <div className="c-news-list__main-text">{Parser(a.text[0])}</div>
                                    </li>
                        })
                        :<span>No News Yet</span>)
            }
        </ul>)
    }
}

export default News
