console.log(window)//window is builtin object:the window objects rep a open window in a browser.it is browser's object(not javascript's) & is automatically created in browser example
window.console.log("hello1")//as wecan see normal results came actually by default console.log used window "window is a global object with lots of prop and methods"
window.alert("hello")

// we can acess all our html code in javascript by window object actuallyall our html code is converted in document object of window object
console.dir(window.Object)//used to print prop of documents

//when a web page is created the browser creates a document object model(DOM) of the page(tree like structure)every inter obj is called node

// we can get dom of a particular node too like
console.dir(document.body)
//even  we can change prop of a particular node too like
console.log(document.body.style.backgroundColor="yellow")

//we use dom manipulation to manipulate particular node easily

