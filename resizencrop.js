var fs = require('fs'),
    path = require('path'),
    gm = require('gm').subClass({imageMagick: true});

    const landscape = [
        {name:'robert_irons', positionX:30, positionY:0},
        {name:'joshua_lacey', positionX:60, positionY:0},
        {name:'matthew_marrs', positionX:190, positionY:0},
        {name:'grace_gill', positionX:90, positionY:0},
        {name:'safiyya_ingar', positionX:130, positionY:0},
        {name:'nina_pavlovic', positionX:120, positionY:0},
        {name:'katie_ray', positionX:80, positionY:50},
        {name:'sara_topham', positionX:80, positionY:0},
        {name:'anna-marie_wayne', positionX:190, positionY:0}
    ];
landscape.map((actor,index) => {
    gm(path.join(__dirname,`actor_images/${actor.name}.jpg`))
    .crop(300,300,actor.positionX,actor.positionY).write(`actor_images/${actor.name}.jpg`, (err) => {
        if (!err) {
            console.log('############### ', actor.name, ' cropped');
        } else {
            console.error(err);
        }
    });
});

const files = fs.readdirSync(__dirname+'/actor_images');

files.map((file) => {
    let check = landscape.filter((name) => {
        console.log(name.name === file.replace('.jpg',''));
        return name.name === file.replace('.jpg','');
    });
    if (!check.length && file) {
        console.log('#############  resizing ', file);
        gm(path.join(__dirname,'/actor_images/'+file)).resize(300)
        .crop(300,300,0,0)
        .write(path.join(__dirname,'/actor_images/'+file), (err) => {
            console.error(err);
        });
    }
});
