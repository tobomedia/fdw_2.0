import {parseString} from 'xml2js';

function parseXML(res, err) {
    parseString(res.text,{trim:true}, (a,b) => {
        return b.gallery.pic;
    });
}

export default parseXML
