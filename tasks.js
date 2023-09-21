
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  
  if (text.trim() === 'quit' || text.trim() === 'exit') {
    quit();
  }
  else if(text.slice(0,5).trim() == 'hello'){
    hello(text.slice(5).trim());
  }
  else if(text.slice(0,4).trim() === 'help'){
    help(text.slice(4).trim());
  }
  else if(text.trim().split(" ") [0]==="add"){
    add(text);
  }
  else if(text.trim().slice(0,6) == 'remove'){
    remove(text);
  }
  else if(text.trim().slice(0,4) == 'edit'){
    edit(text);
  }
  else if(text.trim() === 'list'){
    list();
  }
  else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(x){
  if(x === ""){
    console.log("hello!")
  }else{
    console.log(`hello ${x}!`)
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help the application
 *
 * @returns {void}
 */
function help(y){
  if(y === ""){
    console.log("help!")
  }else{
    console.log(`help ${y}!`)
  }
}


let tasks=["chawerma","pizza","bread","falefel"];

/**
 * Add Function
 *
 * @returns {void}
 */
function add(text){
  let addMessage=text.slice(4);
  if(addMessage.length > 0){
    tasks.push(addMessage.trim())
  }
  else{
    console.log("Please add something")
  }
}

/**
 * Remove Function
 *
 * @returns {void}
 */
function remove(text){
  let x= text.trim().split(' ')[1] ;
  if(x == null){
    tasks.pop();
  }else if(x > tasks.length){
    console.log("it does not exist")
  }
  else{
    tasks.splice(x,1)
  }
}



/**
 * Add Function
 *
 * @returns {void}
 */
function edit(text){
  
  let newText=text.trim().split(' ');
  let num= parseInt(newText[1]) ;

  if(newText.length === 1){
    console.log("error")
  }
  else if(newText.length === 2){
    tasks.pop();
    tasks.push(newText[1])
  }
  else{
    tasks.splice(num, 1,newText[2]);
  }
  
}

/**
 * List Function
 *
 * @returns {void}
 */
function list(){
  tasks.forEach((e,index) => {
    console.log(`${index+1}- ${e}`);
  });
}








// The following line starts the application
startApp("Codi")
