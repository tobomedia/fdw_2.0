const extractName = (text) => {

    let extract = /<h2>(.*)<\/h2>/g.exec(text);
    
    let convert = (extract.length ? extract[1].replace(/\s/g,'_').replace(/\'/, '').toLowerCase() : text.replace(/\s/g,'_').replace(/\'/, '').toLowerCase())

    return convert;
};

export default extractName;
