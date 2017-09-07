import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router-dom';

const ArtistItem = (props) => {

    return (<div className="c-client-list__item">
        <a href={props.spotlightLink} target="_blank">
            <img src={"/prototype/assets/" + props.item.image} />
        </a>
        <p>{props.item.caption[0]} </p>
        <div className="c-client-list__item-nav">
            <span className={'c-client-list__link'}>
                {(props.hasNews ? (<Link to={`/news/${props.clientName}`}>
                    <img width="25px" height="25px" src="/prototype/assets/img/newspaper.svg" />
                </Link>) : null)}
            </span>
            {(props.spotlightLink ?
                <a className={(props.spotlightLink ? '' : 'hide')}
                    href={props.spotlightLink} target="_blank">
                    <img width="25px" height="25px" src="/prototype/assets/img/text-file.svg" />
                </a>
            : null)}
        </div>
    </div>)
}

export default ArtistItem;
