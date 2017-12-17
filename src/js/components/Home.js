import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';

import '../../style/home.scss';

const Home = () => {
    return (<div className="c-content-module">
        <h1>The Oldest Theatrical Agency in London</h1>
        <p>
            Felix de Wolfe was established in 1947 and remains one of the longest running independent
            entertainment and literary agencies in the United Kingdom. Over this period we have represented
            some of the country’s most talented performers and creatives, both in the UK and globally. We pride
            ourselves on the quality of our client base which includes actors, presenters, directors,
            choreographers, composers and authors, and on the dedicated level of service we deliver. We are
            members of the Personal Managers Association (PMA), Women in Film and Television (WFTV) and
            the Royal Television Society (RTS).
        </p>
    </div>);
}

export default Home
