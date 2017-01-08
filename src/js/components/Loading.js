import React, { Component, PropTypes } from 'react';

import '../../style/loading.scss';

class Loading extends Component {
    render() {
        return <div className={`o-loading-overlay  ${(this.props.visible ? 'o-loading-overlay__visible' : 'o-loading-overlay__hidden')}`}></div>
    }
}

export default Loading;
