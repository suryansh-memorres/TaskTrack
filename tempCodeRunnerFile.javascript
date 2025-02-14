//Total Marks calculation

let students = {
    gradeOne: [{name: "Robin", marks: 95}, {name: "Rahul", marks: 85}],
    gradeTwo: {
        science: [{name: "Steven", marks: 90}, {name: "Cherry", marks: 80}],
        maths: [{name: "Crystal", marks: 100}, {name: "Alex", marks: 30}]
    }
};

function sumMarks(totalMarks) {
    if (Array.isArray(totalMarks)) {
        return totalMarks.reduce((prev, current) => prev + current.marks, 0);
    } else {
        let sum = 0;
        for (let breakDownMarks of Object.values(totalMarks)) {
            sum += sumMarks(breakDownMarks);
        }
        return sum;
    }
}
console.log(sumMarks(students));