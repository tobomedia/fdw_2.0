import * as types from '../constants';
import ajax from '../../ajax';
import {parseString} from 'xml2js';

export const receiveActors = (actors) => {
    return {
        type: types.RECEIVE_ACTORS,
        data: actors
    }
}

export const receiveActresses = (actresses) => {
    return {
        type: types.RECEIVE_ACTRESSES,
        data: actresses
    }
}

export const receiveCreatives = (creatives) => {
    return {
        type: types.RECEIVE_CREATIVES,
        data: creatives
    }
}

export const receiveNews = (news) => {
    return {
        type: types.RECEIVE_NEWS,
        data: news
    }
}

export const getActors = (url) => {
    return (dispatch) => {
        Promise.all([
            ajax(`/${url}_a_k.xml`),
            ajax(`/${url}_l_z.xml`)])
        .then((response) => {
            let data =[];
            response.map((item,index)=> {
                parseString(item.text,{trim:true}, (a,b) => {
                    data=data.concat(b.gallery.pic);
                });
            });
            switch (url) {
                case 'actors':
                dispatch(receiveActors(data));
                break;
                case 'actresses':
                dispatch(receiveActresses(data));
                break;
            }
        });
    };
}

export const getCreatives = (url) => {
    return (dispatch) => {
        ajax(`/${url}.xml`)
        .then((response) => {
            let data =[];
            parseString(response.text,{trim:true}, (a,b) => {
                data=data.concat(b.gallery.pic);
            });
            dispatch(receiveCreatives(data));
        });
    };
}

export const getNews = (url) => {
    return (dispatch) => {
        ajax(`/news.xml`)
        .then((response) => {
            let data =[];
            parseString(response.text,{trim:true}, (a,b) => {
                dispatch(receiveNews(b.root.collection[0].news));
            });
        });
    };
}
