import '../../style/list.scss';

import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Delay from './Delay';


class List extends Component {
    render() {

        return <div>
            <div className="c-client-list">
                {this.props.clientRange.map((a,i) => {
                    let spotlightLink = (/http\:\/\//.test(a.linko[0]) ? a.linko[0] : 'javascript://');
                    return (
                        <Delay key={i} value={1} period={i*30}>{ delayed =>
                            <Motion defaultStyle={{o:0}} style={{o:spring(delayed)}}
                        key={i}>
                                {value => <div className="c-client-list__item" style={{ opacity:value.o }}>
                                <a href={spotlightLink} target="_blank">
                                    <img src={"/src/" + a.image} />
                                </a>
                                <p>{a.caption[0]} </p>
                                <a className="fa fa-fw newspaper-o"></a>
                                </div>}
                            </Motion>
                        }</Delay>)
                    })}
            </div>
        </div>
    }
}


export default List
