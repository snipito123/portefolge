function tilfeldigHilsen() {
    console.log("hei");
    document.getElementById("linje1").textContent = "hei";
}
function bilTilOslo() {
    console.log("Fremme i Oslo.");
}
function bilTilDombås() {
    console.log("Fremme på Dombås");
}
function bil(sted, metode, linje) {
    const melding = "kjører " + metode + " til " + sted;
    console.log(melding);
    document.getElementById(linje).textContent = melding;
}
function hilsen(juhu) {
    console.log(juhu);
}
tilfeldigHilsen();
bil("Oslo", "lynraskt", "linje4");
hilsen("halla balla");
bil("Dombås", "som ein snegle");
bil("Haugesund", "i rasende fart");
hilsen("hei");
bil("Dombås", "hoppende");