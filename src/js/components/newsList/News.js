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

        if (this.props.match.params.client && this.props.newsArray.length) {
            this.scrollTo(this.props.match.params.client);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.client && newProps.newsArray.length) {
            this.scrollTo(newProps.match.params.client);
        }
    }

    render() {
        return (<ul className="c-news-list">
                    {this.props.newsArray.map((a,i) => {
                        let clientName = extractName(a);
                        return <li id={clientName} className=" c-news-list__item" key={clientName}>
                            <div className="c-news-list__image">
                                <img className="c-news-list__item-image" src={`/mobile/assets/actor_images/${clientName}.jpg`} />
                            </div>
                            <div className="c-news-list__main-text">{Parser(a)}</div>
                        </li>
                    })
            }
        </ul>)
    }
}

News.propTypes = {
    getNews: PropTypes.func,
    newsArray: PropTypes.array,
    match: PropTypes.shape({
        match: PropTypes.shape({
            client: PropTypes.string
        })
    })
}

export default News
