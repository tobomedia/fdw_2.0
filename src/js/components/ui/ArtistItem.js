import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router-dom';

const ArtistItem = (props) => {

    return (<div className="c-client-list__item">
        <a href={props.spotlightLink} target="_blank">
            <img src={"/mobile/assets/" + props.item.image} />
        </a>
        <div className="c-client-list__item-nav">
            <p>{
                    props.item.caption[0].substr(0,props.item.caption[0].indexOf(' '))
                }
                <br/>
                {
                    props.item.caption[0].substr(props.item.caption[0].indexOf(' ')+1)
                }
             </p>
            <span className={'c-client-list__link'}>
                {(props.hasNews ? (<Link to={`/news/${props.clientName}`}>
                    <img width="25px" height="25px" src="/mobile/assets/img/newspaper.svg" />
                </Link>) : null)}
            </span>
            {(props.spotlightLink ?
                <a className={(props.spotlightLink ? '' : 'hide')}
                    href={props.spotlightLink} target="_blank">
                    <img width="25px" height="25px" src="/mobile/assets/img/text-file.svg" />
                </a>
            : null)}
        </div>
    </div>)
}

ArtistItem.propTypes = {
    spotlightLink: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
    item: PropTypes.object,
    clientName: PropTypes.string,
    hasNews: PropTypes.bool
}

export default ArtistItem;
