var rs = require("readline-sync");
var name="";
var ans="";
var point = 0;
const c = require('chalk');

const qued = [{que: "Which is first indian cricket tournament?",op1: "a :Bombay Series",op2: 
    "b :pepsi Cup",op3: "c :Bombay Triangular",op4: "d :None of these",ans: "c"},
    {que: "Where is the headquarter of the ICC?",op1: "a :London",op2: "b :Cape town",op3: "c :Sydney",op4: "d :Dubai",ans: "d"},
    {que: "When was ICC established?",op1: "a :1909",op2: "b :1953",op3: "c :1960",op4: "d :1877",ans: "a"},
    {que: "Who is the current Chairman of the ICC?",op1: "a :David Richardson ",op2: "b :Shashank Manohar",op3: "c :Narayanaswami Srinivasan",op4: "d :None of the above",ans: "b"},
    {que: "Who is Indian played their First ODI Match against _______.",op1: "a :England",op2: "b :Australia",op3: "c :South Africa",op4: "d :Pakistan",ans: "a"}]

var start = () =>{
    qued.forEach((e) =>{
        console.log("\n"+c.yellow(e.que));
        console.log(c.blueBright(e.op1));
        console.log(c.blueBright(e.op2));
        console.log(c.blueBright(e.op3));
        console.log(c.blueBright(e.op4));
        ans = rs.question("\nAns:");
        if(ans === e.ans){
            point=point+5;
            console.log(c.green("Correct"));
            console.log("Your point is: "+point);
        }else{
            point=point-2;
            console.log(c.red("Wrong Ans.."));
            console.log(c.green("\nCorrect Ans is: ")+e.ans);
            console.log(c.blue("Your point is: ")+point);
        }    
    });
    end();
}
        
var begin = () =>{
    name = rs.question("\nWhat is your Name:");
    console.log(c.yellow("\nHello ")+name);
    console.log(c.red("\nThere will be 5 questions."));
    console.log(c.red("\n+5 point for correct answer. -2 for wrong answer.\n"));

    start();
}

var end = () =>{
    console.log(c.yellow("\nThank you for appering this quiz..\n Hope you enjoy it!!"));
    console.log(c.blue("\nYour point is: ")+point);
}
begin();

