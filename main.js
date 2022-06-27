const randomize = document.getElementById("randomize");
const flagFr = document.getElementById("fr-flag");
const flagEn = document.getElementById("en-flag");
const version = document.getElementById("version");
const championName = document.getElementById("name");
const championTitle = document.getElementById("title");
const championImg = document.getElementById("champion");

var img = document.createElement("img");

// XML Request

function selectLang() {
  xmlRequest = new XMLHttpRequest();

  xmlRequest.open("GET", "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/" + localStorage["lang"] + "/champion.json", false);
  xmlRequest.send(null);
  xmlRequest = xmlRequest.responseText;
  xmlRequest = JSON.parse(xmlRequest);
}

if (localStorage["lang"] == undefined) { localStorage["lang"] = "fr_FR"; }

selectLang();

// ---------------------------------------------------------

champions = Object.keys(xmlRequest.data);

version.innerHTML += xmlRequest.version;

var currentSkin = 0; // A mettre dans l'event et à changer en random

// Switch language event

flagFr.addEventListener("click", () => {
  if (localStorage["lang"] != "fr_FR") {
    localStorage["lang"] = "fr_FR";
    selectLang();
  }
});

flagEn.addEventListener("click", () => {
  if (localStorage["lang"] != "en_US") {
    localStorage["lang"] = "en_US";
    selectLang();
  }
})

// Randomize champion generator

randomize.addEventListener("click", () => {
  for (let i = 0; i <= 35; i++) {
    var currentChamp = Math.floor(Math.random() * 159.9);

    championName.innerHTML = xmlRequest.data[champions[currentChamp]].name;
    championTitle.innerHTML = xmlRequest.data[champions[currentChamp]].title;

    img.src = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champions[currentChamp] + "_" + currentSkin + ".jpg";
    championImg.append(img);
  }
});