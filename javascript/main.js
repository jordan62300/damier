function teste() {
for (var i=0; i< 64; i++){
    document.getElementById("echec").appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
}
}
