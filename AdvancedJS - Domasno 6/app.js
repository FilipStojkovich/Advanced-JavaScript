fetch('./students.json')
    .then((response) => response.json())
    .then((json) => {
        let students = json;
        console.log(students);

        let averageGradeHigherThanThree = students.filter(function(student) {
            return student.averageGrade > 3;
        })
        console.log(
            "This are the students with an average grade higher than 3:", averageGradeHigherThanThree
            );

        let femaleStudentsWithAnAverageGradeOfFive = students.filter(function(student) {
            if(student.gender === 'Female' && student.averageGrade === 5) {
                return student.firstName && student.lastName;
            }
        })
        console.log(
            "This are the females with an average grade of 5:", femaleStudentsWithAnAverageGradeOfFive
            );

        let maleStudentsInSkopjeAndOverEighteen = students.filter(function(student) {
            if(student.gender === 'Male' && student.city === 'Skopje' && student.age >= 18) {
                return student.firstName && student.lastName;
            }
        })
        console.log(
            "This are the males that live in Skopje and are over 18:", maleStudentsInSkopjeAndOverEighteen
        );

        let femalesOverTwentyFour = students.filter((student) => student.gender === 'Female' && student.age > 24);

        let sumOfFemaleGradesOverTwentyFour = femalesOverTwentyFour.reduce((total, grade) => total + grade.averageGrade, 0);

        let averageGradesOfFemaleStudentsOverTwentyFour = sumOfFemaleGradesOverTwentyFour / femalesOverTwentyFour.length;

        console.log(
            "The average grades of all female students over the age of 24:", Number(averageGradesOfFemaleStudentsOverTwentyFour)
            );

        let maleStudentsStartingWithBAndGradeOverTwo = students.filter(function(student) {
            if(student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2) {
                return student.firstName && student.lastName;
            }
        })
        console.log("Male students that start with B and have average grade over than 2:", maleStudentsStartingWithBAndGradeOverTwo);
    });