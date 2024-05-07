#!/usr/bin/env node
import inquirer from "inquirer";
class Student{
    static counter=1000;
    id:number;
    name:string;
    courses:string[];
    blance:number;
    constructor(name:string){
        this.id=Student.counter++;
        this.name=name;
        this.courses=[];  
        this.blance=100;
    }
    // METHOD TO ENROLLED STUDENT IN A COURSE
    enroll_course(course:string){
        this.courses.push(course);
    }
    // METHOD TO VIEW BLANCE STYDENT
    view_blance(){
        console.log(`blance for ${this.name} ,$${this.blance}`);
    }
    // METHOD TO PAY FEES
    pay_fees(amount:number){
        // subtraction opretor assagined
        this.blance-=amount;
        console.log(`$${amount}fees paid sucessfully for ${this.name}`)
        console.log(`remaining blance $${this.blance}`)

    }
    // METHOD TO DISPLAY STUDENT STATUS
    show_status(){
        console.log(`id:${this.id}`);
        console.log(`name:${this.name}`);
        console.log(`coures:${this.courses}`);
        console.log(`blance:${this.blance}`);
    }
}
    // DEFINING A STUDENT MANAGER CLASS TO MANGE
    class Student_manager {
        students: Student[]
        
        constructor() {
            this.students=[];
        }
        //METHOD TO ADD A NEW STUDENT.
        add_student(name:string){
            let students=new Student(name);
            this.students.push(students);
            console.log(`student:${name} , added sucessfuly,student id:${students.id}`);
        }
        //METHOD TO ENROLL A STUDENT
        enroll_student(student_id:number,course:string) {
            let student=this.find_student(student_id);
         if(student){
            student.enroll_course(course);
            console.log(`${student.name} enroll in ${course}`);
         }  
    
        }
        //METHOD VIEW TO STUDENT BLANCE.
        view_student_blance(student_id:number){
          let student=this.find_student(student_id);
          if(student){
            student.view_blance();
          }else{
            console.log("student not found correct id")
          }
        }
     // METHOD TO PAY FEES
      pay_student_fees(student_id:number,amount:number){

        let student=this.find_student(student_id);
         if(student){
      student.pay_fees(amount)
     }else{
      console.log("student not found,please a enter correct student id.")
      }
     }
      //METHOD TO DISPLAY STUDENT STATUS
 show_student_status(student_id:number){
   let student=this.find_student(student_id);
     if(student){
    student.show_status();
      }

         
        }

     //find. student id
     find_student(student_id:number){
           return this.students.find(std=>std.id===student_id);
    
    }    
     }
    
        //MAIN FUNCTION TO RUN THE PROGRAMS
    async function main(){
        console.log("welcom to student mangement");
    console.log("=".repeat(50));
    

    let student_manager=new Student_manager ();
     //while loop to keep prorrams runing
     while(true){
     let choice=await inquirer.prompt([
    {
        name:"choice",
        type:"list",

        message:"select an option",
    choices:["add student","enroll student","view student blance","pay fees",
        "show status","exit"
        ]
        }
    ]);
        //switch cases
    switch(choice.choice){
    case "add student":
    let name_input=await inquirer.prompt([{
        name:"name",
    type:"input",
        message:"enter a student Name :",
    }])
        student_manager.add_student(name_input.name);
        break;
    case "enroll student":
   let course_input=await inquirer.prompt([{
    name:"student_id",
        type:"number",
    message:"enter a student id:",
        },{
    name:"course",
    type:"input",
        message:"enter a course name",
    }
   ]);
   student_manager.enroll_student(course_input.student_id,course_input.course);
       break;
    case "view student blance":
  let blance_input=await inquirer.prompt([{
   name:"student_id",
    type:"number",
    message:"enter a student id :",
    }])
   student_manager.view_student_blance(blance_input.student_id);
   break;
    case "pay fees":
    let fees_input=await inquirer.prompt([
    {
    name:"student_id",
    type:"number",
    message:"enter a student id:"
    },{
    name:"amount",
   type:"number",
    message:"enter a amount id:"
        }
    ]) ;
    student_manager.pay_student_fees(fees_input.student_id,fees_input.amount);                        
    break;
    case "show status":
    let status_input=await inquirer.prompt([
    {
    name:"student_id",
   type:"number",
    message:'enter a student id:',
    }
    ]);
    student_manager.show_student_status(status_input.student_id);
    break;
    case "exit":
    console.log("EXITING------.");
     process.exit();


        }
        
                            
    }
}
   //invok/calling function
    main();
                                    
            
       
                                    

                     
  
        
