var casper = require("casper").create({
  pageSettings: {
    loadImages: false, //The script is much faster when this field is set to false
    loadPlugins: false,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
  }
});

var fs = require("fs");

var csvConvert = require("csv-convert");

var username = casper.cli.options.username;
var password = casper.cli.options.password;

casper.on("page.error", function(msg, trace) {
  this.echo("Error: " + msg, "ERROR");
});

casper
  .start()
  .thenOpen(
    "https://portal.spotlight.com/portal/signin/?referrer=AgentWeb&returnUrl=https://www.spotlight.com//agentweb",
    function() {
      console.log("website opened");
    }
  );

//Now we have to populate username and password, and submit the form
casper.then(function() {
  console.log("Login using username and password");

  casper.evaluate(
    function(username, password) {
      document.getElementById("Username").value = username;
      document.getElementById("Password").value = password;
      document.getElementById("sign-in-button").click();
    },
    username,
    password
  );
});

casper.on("resource.received", function(resource) {
  if (resource.stage !== "end") {
    return;
  }
  if (resource.url.indexOf("PinList/all/csv") !== -1) {
    console.log(resource.url);
    casper.download(resource.url, "./ExportData.csv");
  }
});

casper.thenOpen(
  "https://www.spotlight.com/agentweb/Clients/PinList/all/csv",
  function() {
    console.log("download link loaded ");
  }
);

casper.then(function() {
  var pins = fs.read("./ExportData.csv");
  var parsed = csvConvert(pins);

  for (var i = 0; i < parsed.length; i++) {
    casper.thenOpen("https://www.spotlight.com/" + parsed[i].pin, function() {
      var name = this.evaluate(function() {
        var n = document.querySelector("h1");
        if (n) {
          return n.innerText
            .toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/\'/g, "");
        } else {
          return null;
        }
      });

      // handle clients who have multiple types in spotlight i.e. actor & presenter
      if (name) {
        var url = this.evaluate(function() {
          return document.querySelectorAll("a")[1].href;
        });
      } else {
        var url = this.evaluate(function() {
          return document.querySelector("img").src;
        });
        name = this.evaluate(function() {
          return document
            .querySelector(".artistName")
            .innerText.toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/\'/g, "");
        });
      }

      console.log("Downloading >", name);
      if (name !== null) {
        casper.download(
          url.replace(/\~[0-9]+x[0-9]+/, "~540x540"),
          "cache/actor_images/" + name + ".jpg"
        );
      }
    });
  }
});

casper.run();
