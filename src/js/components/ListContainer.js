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

    extractName(text) {
        let extract = /<h2>(.*)<\/h2>/g.exec(text);

        let convert = (extract ? extract[1].replace(/\s/g,'_').replace(/\'/, '').toLowerCase() : text.replace(/\s/g,'_').replace(/\'/, '').toLowerCase())

        return convert;
    }

    parser(res) {
        parseString(res.text,{trim:true}, (a,b) => {
            this.setState({'names': b.gallery.pic});
        });
    }

    parserNews(res) {
        parseString(res.text,{trim:true}, (a,b) => {
            let newsArr = [];
            b.root.collection[0].news.map((b) => {
                let clientName = this.extractName(b.text[0])
                newsArr.push(clientName);
            })

            this.setState({'news': newsArr});
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
        this.getNews();
        this.getNames(this.props.params);
    }

    render() {
        return  (
            <div>
                <List extract={this.extractName} clientRange={this.state.names} news={this.state.news} />
            </div>
        )
    }
}

export default ListContainer
