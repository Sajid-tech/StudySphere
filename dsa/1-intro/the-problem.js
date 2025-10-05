const studentDatabase = ['sajid','majid','wajid','john','lorem']

// algorithm to find the specfic student 

const findStudent = (allStudents,studentName)=>{
    for(let i =0 ; i <allStudents.length; i++ ){
        if(allStudents[i] === studentName){
            console.log(`Found ${studentName} in indexing of ${i}`)
        }
    }

}

findStudent(studentDatabase,'john')