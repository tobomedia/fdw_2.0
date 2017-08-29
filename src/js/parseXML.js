import {parseString} from 'xml2js';

function parseXML(res, err) {
    parseString(res,{trim:true}, (a,b) => {
        // debugger;
        return b;
    });
}

export default parseXML
