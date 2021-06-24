console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 2000);
}

function getStudent(){
    setTimeout(function() {
        let srt = "";
        students.forEach(function (student) {
            srt += `<li>  ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = srt;
        console.log("Student has been fetched");


    }, 5000);

}


let newStudent = {name:`Sunny`,subject:`Python`};
enrollStudent(newStudent,getStudent);
// getStudent();

