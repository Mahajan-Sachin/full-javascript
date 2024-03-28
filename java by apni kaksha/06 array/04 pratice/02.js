//apply 10% offer
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    let offer=((10*val)/100);
    items[i]=items[i]-offer;
    console.log(`value after offer ${items[i]}`);
    i++;
}

//2nd method
for(let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log(items);