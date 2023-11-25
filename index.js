// Function to Enter Students Detaisl
function StudentDetials(name,roll_no,class_name,section,marks){
    this.name = name;
    this.Roll_No = roll_no;
    this.class_name = class_name;
    this.section = section;
    this.marks = marks;
};

// Function to Enter Students Marks
function Marks(science,maths,social_science,english,hindi){
    this.science =science;
    this.maths = maths;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;
};

// Function to Calculate percentage of students marks
Marks.prototype.percentage = function(){
        const totalMarks = this.science + this.social_science + this.maths + this.english + this.hindi;
        const numberOfSubjects = 5;
        const per =  totalMarks / numberOfSubjects;
        return per;
}

// Function to Print marks of top 3 subjects
Marks.prototype.printTop3Subjects = function () {
    const subjects = [
        { name: 'Science', marks: this.science },
        { name: 'Maths', marks: this.maths },
        { name: 'Social Science', marks: this.social_science },
        { name: 'English', marks: this.english },
        { name: 'Hindi', marks: this.hindi },
    ];

    // Sort subjects by marks in descending order
    subjects.sort((a, b) => b.marks - a.marks);

    // Print the top three subjects
    console.log("Top 3 Subjects based on Marks:");
    for (let i = 0; i < 3; i++) {
        console.log(`${i + 1}. ${subjects[i].name}`);
    }
}


// These are Student 1 object
let student1 = new StudentDetials("Rishi",12,"5th","B");
let studentmarks1 = new Marks(72,75,79,80,67);
// For Student 2
let student2 = new StudentDetials("Raj",21,"2th","A");
// Marks(Science, Maths, Social Science English, Hindi)
let studentmarks2 = new Marks(23,54,67,54,55);

// Function to print Report Card
function printReportCard(student_info,student_marks) {
    const patterns = [
        "+--------------------+",
        "|     REPORT CARD    |",
        "+--------------------+",
        `| Name     - ${student_info.name}   |`,
        `| Roll no. - ${student_info.Roll_No}      |`,
        `| Class    - ${student_info.class_name}     |`,
        `| Section  - ${student_info.section}       |`,
        `| Science  - ${student_marks.science}      |`,
        `| S.Sc     - ${student_marks.social_science}      |`,
        `| Maths    - ${student_marks.maths}      |`,
        `| English  - ${student_marks.english}      |`,
        `| Hindi    - ${student_marks.hindi}      |`,
        `| Prectage - ${student_marks.percentage()} %  |`,
        "+--------------------+",
    ];

    patterns.forEach(row =>{
        console.log(row);
    });
}

printReportCard(student1,studentmarks1);
studentmarks1.printTop3Subjects();

printReportCard(student2,studentmarks2);
studentmarks2.printTop3Subjects();
