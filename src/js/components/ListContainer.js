import React, { Component, PropTypes } from 'react';
import ajax from '../ajax';
import {parseString} from 'xml2js';

import List from './List';

class ListContainer extends Component {
    constructor() {
        super();
        this.state = {
            'names': [],
            'news':  []
        };
    }


    getNames(params) {
        ajax(`/${params.clientRange}.xml`)
        .then((res,rej) => {
            this.parser(res)
        });
    }

    getNews() {
        ajax(`/news.xml`)
        .then((res,rej) => {
            this.parserNews(res)
        });
    }

    removeNames() {
        this.setState({'names': []})
    }

    parser(res) {
        parseString(res.text,{trim:true}, (a,b) => {
            this.setState({'names': b.gallery.pic});
        });
    }

    parserNews(res) {
        parseString(res.text,{trim:true}, (a,b) => {
            this.setState({'news': b.root.collection[0].news});
        });
    }

    componentWillMount() {
        this.removeNames();
    }

    componentWillReceiveProps(nextProps) {
        this.removeNames();
        this.getNames(nextProps.params);
    }

    componentDidMount() {
        this.getNames(this.props.params);
        this.getNews();
    }

    render() {
        return  (
            <div>
                <List clientRange={this.state.names} news={this.state.news} />
            </div>
        )
    }
}

export default ListContainer
