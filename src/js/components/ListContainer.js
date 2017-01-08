import React, { Component, PropTypes } from 'react';
import ajax from '../ajax';
import {parseString} from 'xml2js';

import List from './List';

class ListContainer extends Component {
    constructor() {
        super();
        this.state = {
            'names': []
        };
    }


    getNames(params) {
        ajax(`/${params.clientRange}.xml`)
        .then((res,rej) => {

                this.parser(res)

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

    componentWillMount() {
        this.removeNames();
    }

    componentWillReceiveProps(nextProps) {
        this.removeNames();
        this.getNames(nextProps.params)
    }

    componentDidMount() {
        this.getNames(this.props.params)
    }

    render() {
        return  (
            <div>
                <List clientRange={this.state.names} />
            </div>
        )
    }
}

export default ListContainer
