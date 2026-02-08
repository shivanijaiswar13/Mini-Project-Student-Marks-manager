//Data (array)
let marks = [45,78,60,32,90];

// Print all marks(forEach)
marks.forEach((mark)=>{
    console.log(mark);
});

// Total marks (reduce)

let total = marks.reduce((sum, mark)=>{
    return sum+mark;
},0)
console.log("total marks", total);

//Average marks
let average = total/marks.length
console.log("Average marks:", average);

//Pass Student(filter)

// Assume:pass marks = 40

let passStudent = marks.filter((mark)=>{
    return mark>=40;
});
console.log("pass student marks:",passStudent);

//Grace marks(map)

//every student have +5 grace marks

let updatedMarks = marks.map((mark)=>{
    return mark+5;
});
console.log(updatedMarks);



