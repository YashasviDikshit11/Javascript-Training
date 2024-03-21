// Write a program to display following output as shown in figure
//Pattern 1   
// 1
// 2 3
// 4 5 6
// 7 8 9 10
function pattern1(rows) {
    let a = 1;
    for (let i = 1; i <= rows; i++) {
        let temp_row = ' ';
        for (let j = 1; j <= i; j++) {
            temp_row += a + ' ';
            a++;
        }
        console.log(temp_row);
    }
}
pattern1(4);


//Pattern 2
// 1
// 2 2
// 3 3 3
// 4 4 4 4
function pattern2(rows) {
    for (let i = 1; i <= rows; i++) {
        let temp_row = ' ';
        for (let j = 1; j <= i; j++) {
            temp_row += i + ' ';

        }
        console.log(temp_row);
    }
}
pattern2(4);

//Pattern 3
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern3(rows) {
     for (let i = rows; i >= 1; i--) {
        let temp_row = '';
        for (let j = 1; j <= i; j++) {
            temp_row += j + ' ';
        }
        console.log(temp_row);
    }
    for (let i = 2; i <= rows; i++) {
        let temp_row = '';
        for (let j = 1; j <= i; j++) {
            temp_row += j + ' ';
        }
        console.log(temp_row);
    }
}

pattern3(5);