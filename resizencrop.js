var fs = require("fs"),
  path = require("path"),
  gm = require("gm").subClass({ imageMagick: true });

const landscape = [
  { name: "robert_irons", positionX: 30, positionY: 0 },
  { name: "joshua_lacey", positionX: 60, positionY: 0 },
  { name: "samuel_ranger", positionX: 90, positionY: 0 },
  { name: "grace_gill", positionX: 90, positionY: 0 },
  { name: "anna-marie_wayne", positionX: 120, positionY: 0 },
  { name: "nina_pavlovic", positionX: 120, positionY: 0 },
  { name: "katie_ray", positionX: 80, positionY: 50 },
  { name: "sara_topham", positionX: 80, positionY: 0 },
  { name: "anna_marie_cseh", positionX: 130, positionY: 0 },
  { name: "ray_macallan", positionX: 100, positionY: 0 },
  { name: "yorgos_karamalegos", positionX: 90, positionY: 0 },
  { name: "geoffroy_lickel", positionX: 170, positionY: 0 },
  { name: "jane_mccarry", positionX: 130, positionY: 40 },
  { name: "john_hales", positionX: 150, positionY: 50 },
  { name: "stefano_cassetti", positionX: 130, positionY: 0 },
  { name: "siwan_henderson", positionX: 150, positionY: 0 },
  { name: "ollie_corbett", positionX: 80, positionY: 0 },
  { name: "yorgos_karamalegos", positionX: 150, positionY: 50 }
  // { name: "safiyya_ingar", positionX: 130, positionY: 0 }
];
landscape.map((actor, index) => {
  gm(path.join(__dirname, `cache/actor_images/${actor.name}.jpg`))
    .crop(300, 300, actor.positionX, actor.positionY)
    .write(`actor_images/${actor.name}.jpg`, err => {
      if (!err) {
        console.log("############### ", actor.name, " cropped");
      } else {
        console.error("one: ", err);
      }
    });
});

const placement = {
  ashwin_bolar: 40,
  charlie_clapham: 50,
  lex_daniel: 40,
  mikhael_deville: 30,
  brett_fancy: 70,
  david_gillies: 20,
  shiv_grewal: 60,
  john_hales: 40,
  // daniel_kobbina: 20,
  francesco_martino: 90,
  // martin_mcdougall: 40,
  david_peart: 30,
  joseph_rye: 30,
  george_rossi: 20,
  keiron_self: 20,
  sean_sloan: 30,
  antony_somers: 40,
  marvin_springer: 40,
  steve_whiteley: 30,
  august_wittgenstein: 40,
  matthew_wycliffe: 30,
  naomi_allisstone: 40,
  claire_cage: 40,
  samantha_holland: 30,
  judith_humphreys: 30,
  christine_mckenna: 40,
  rhian_morgan: 20
};

const files = fs.readdirSync(__dirname + "/cache/actor_images");

files.map(file => {
  let check = landscape.filter(name => {
    return name.name === file.replace(".jpg", "");
  });
  if (!check.length && file) {
    console.log("#############  resizing ", file);
    gm(path.join(__dirname, "/cache/actor_images/" + file))
      .resize(300)
      .crop(
        300,
        300,
        0,
        placement[file.replace(".jpg", "")]
          ? placement[file.replace(".jpg", "")]
          : 0
      )
      .write(path.join(__dirname, "/actor_images/" + file), err => {
        console.error("two: ", err, file);
      });
  }
});
