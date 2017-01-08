import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Delay from './Delay';

import '../../style/list.scss';

class List extends Component {
    render() {

        return <div>
            <div className="c-client-list">
                {this.props.clientRange.map((a,i) => {
                    return (
                        <Delay key={i} value={1} period={i*30}>{ delayed =>
                            <Motion defaultStyle={{o:0}} style={{o:spring(delayed)}}
                        key={i}>
                                {value => <div className="c-client-list__item" style={{ opacity:value.o }}>
                                <img src={"/src/" + a.image} />
                                <p>{a.caption[0]} </p>
                                </div>}
                            </Motion>
                        }</Delay>)
                    })}
            </div>
        </div>
    }
}


export default List
