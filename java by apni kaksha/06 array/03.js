//by using for
let heroes=["ironman","thor","hulk","shaktiman","spiderman"]
for(let i=0;i<heroes.length;i++){
    console.log("using normal for:",heroes[i]);
}
// for off
for(let hero of heroes){
    console.log("using for off:",hero)
}
//we can use functions also
for(let hero of heroes){
    console.log("using fn:",hero.toUpperCase())
}