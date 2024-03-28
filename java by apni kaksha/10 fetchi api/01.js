//the fetch api provides an interface for fetching(sending/receiving) resources.
// it uses request andresponse objects.
//the fetch() method is used to fetch a resource(data)
const url="https://cat-fact.herokuapp.com/facts";
let promise=fetch(url);
console.log(promise);
const getfacts=async()=>{
    console.log("getting data.....");
    console.log(response);
};