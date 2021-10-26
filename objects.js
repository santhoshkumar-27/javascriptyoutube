const student = {
    studentName : "sandykumar",
    studentId : 145,

    studentStartExam : function(){
        console.log(this.studentName);
    }
}


student.studentStartExam();