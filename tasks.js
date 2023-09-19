
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

/**
 * Add Function
 *
 * @returns {void}
 */
function add(){

}

/**
 * Remove Function
 *
 * @returns {void}
 */
function remove(){
  
}

/**
 * List Function
 *
 * @returns {void}
 */
function list(){
  
}








// The following line starts the application
startApp("Codi")
