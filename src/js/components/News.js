import React, { Component, PropTypes } from 'react';

import ajax from '../ajax';
import {parseString} from 'xml2js';
import Parser from 'html-react-parser';

import extractName from '../extractName';

import '../../style/list.scss';

class News extends Component {
    constructor() {
        super();
        this.state = {
            'news': []
        };
    }


    getNews(params) {
        ajax(`/news.xml`)
        .then((res,rej) => {
            this.parser(res)
        });
    }

    removeNames() {
        this.setState({'news': []})
    }

    scrollTo(id) {
        document.querySelector(`#${id}`).scrollIntoView();
    }

    parser(res) {
        parseString(res.text,{trim:true}, (a,b) => {
            this.setState({'news': b.root.collection[0].news});

            if (this.props.match.params.client) {
                this.scrollTo(this.props.match.params.client);
            }
        });
    }

    componentDidMount() {
        this.getNews();
    }
    render() {
        return <ul className="c-news-list">
            {
                (this.state.news ?
                        this.state.news.map((a,i) => {

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
        </ul>
    }
}

export default News
