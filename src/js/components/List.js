import '../../style/list.scss';

import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Delay from './Delay';

import extractName from '../extractName';


class List extends Component {
    render() {

        return <div>
            <div className="c-client-list">
                {this.props.clientRange.map((a,i) => {
                    let spotlightLink = (/http(s)?\:\/\//.test(a.linko[0]) ? a.linko[0] : false);
                    let clientName = extractName(a.caption[0]);

                    return (
                        <Delay key={i} value={1} period={i*30}>{ delayed =>
                            <Motion defaultStyle={{o:0}} style={{o:spring(delayed)}}
                        key={i}>
                                {value => <div className="c-client-list__item" style={{ opacity:value.o }}>
                                <a href={spotlightLink} target="_blank">
                                    <img src={"/assets/" + a.image} />
                                </a>
                                <p>{a.caption[0]} </p>
                                <div className="c-client-list__item-nav">

                                    <a
                                    className={(this.props.news.includes(clientName) ? '' : 'hide')}
                                    href={'/news#' + clientName}>
                                        <img width="25px" height="25px" src="/assets/img/newspaper.svg" />
                                    </a>
                                    <a
                                     className={(spotlightLink ? '' : 'hide')}
                                     href={spotlightLink} target="_blank">
                                        <img width="25px" height="25px" src="/assets/img/text-file.svg" />
                                     </a>
                                </div>
                                </div>}
                            </Motion>
                        }</Delay>)
                    })}
            </div>
        </div>
    }
}


export default List
