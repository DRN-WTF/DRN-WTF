const tsel = [
    "DRN",
    "#drn",
    "Destroying Retarded N*",
    "iloveDRN",
    "Ḓ̵̡̛͍̞̯̊͂͜͠R̶̢̺͍̩͔̭̺̈͊͊̄͛͗̐̽͝N̴̨̨̲̙͚͌͛̉͋̓͗͛̃̈́͆̆͝"
];

function title(){
    var sa = tsel[Math.floor(Math.random()*tsel.length)]
    document.title = sa;
}

setInterval(title, 100);