//push method:used to add new items in array at end
let food_items=["potato","litchi","mango"]
food_items.push("chips","icecream","bnanana")
console.log(food_items)


// pop to del item and return it
a=food_items.pop()
console.log(a)
console.log(food_items)


//to string:convert array to string
console.log(food_items.toString())

//concat:join array and return it(means it doesnot change original ones) we can also join multiple arrays
let marvel_heroes=["thor","spider","hulk","ironman"]
let Dc_heroes=["batman","superman"]
let x=marvel_heroes.concat(Dc_heroes)
console.log(x)

let anime_heroes=["saitama","genos","deku","naruto"]
let anime_villan=["madra","king orichi"]
let m=x.concat(anime_heroes,anime_villan)
console.log(m)

// unshift:acts like push:add to atart
b=marvel_heroes.unshift("antman");
console.log(marvel_heroes)

//shift:del from start
l=marvel_heroes.shift()
console.log(marvel_heroes)
