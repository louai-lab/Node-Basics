const { error } = require('console');

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

let filePath='database.json';
const process=require("process");
const fs = require('fs');

var argument =process.argv;
if(argument[2]){
  filePath=argument[2]
}

let empty=[];
let newData=JSON.stringify(empty);

if(fs.existsSync(filePath)){
  console.log("found");
}
else{
  fs.appendFile(filePath,newData,function(err){
  })
}


async function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")

  const fs = require('fs');

  try{
    await fs.readFile(filePath,{encoding:'utf-8'},(error,loadedString)=>{
      tasks=JSON.parse(loadedString);
      // console.log(tasks);
    })
  }
  catch(error){
    console.log("errror",error)
  }

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
  else if(text.trim().split(' ') [0]==='check'){
    check(text);
  }
  else if(text.trim().split(' ') [0]==='uncheck'){
    unCheck(text);
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
// const fs=require('fs').promises;

async function quit(){
  // const data="this is the first";

  const myTasks=JSON.stringify(tasks);

  try{
    await fs.writeFile(filePath,myTasks,{encoding:'utf-8'});
    console.log('congratulations');
    console.log(myTasks)
  }catch(error){
    console.error('Errorrr');
  }


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


let tasks=[{
  task: "chawerma",
  done:true
  },
  {
    task: "falefel",
    done:true
    },
    {
      task: "suchi",
      done:false
      },
      {
        task: "rez 3ajej",
        done:true
        },

  ];

/**
 * Add Function
 *
 * @returns {void}
 */
function add(text){
  let addMessage=text.trim().slice(4);

  let newObject = {task:addMessage , done:false}
  

  if(addMessage.length > 0){
    tasks.push(newObject);
  
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
 * Check Function
 *
 * @returns {void}
 */
function check(text){
  let x=text.trim().slice(5);

  if(x==="" || x===undefined || x===null || x>tasks.length ||x<=0){
    console.log("bad input")
  }
  else{
    
    tasks[x-1].done =true; 
    
  }
}


/**
 * UnCheck Function
 *
 * @returns {void}
 */
function unCheck(text){
  let x=text.trim().slice(7);

  if(x==="" || x===undefined || x===null || x>tasks.length ||x<=0){
    console.log("bad input")
  }
  else{
    
    tasks[x-1].done =false; 
    
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
  
    let status = "[ ]"
    if(e.done==true) status="[✓]"
    console.log(`${status} - ${index+1} - ${e.task}`);
  });
}








// The following line starts the application
startApp("Codi")
