//  do/while 루프

// while문과 비슷하나 반복 조건을 루프의 처음이 아니라 루프의 끝에서 검사한다.
//조건문을 판단하기 전에 do 블록의 코드를 먼저 실행합니다.
//
// 그리고, 조건문을 판단하여, 조건문의 결과가 true이면 do 블록의 코드를 다시 실행합니다.
//
// 이 과정을 반복합니다.

//do while문은 일단 문장을 한 번 실행하고 나서 조건을 검사하고 싶을 때 사용.

//구조
//do {
// 반복할 코드
//}
//while (조건문);


// do 반복문은 최소 한번은 반복됩니다. 그리고 i 가 5보다 작지 않을 때까지 계속 반복됩니다.

var i = 1, j = 2;

while (i > 3) { // 변수 i의 초기값은 1이기 때문에 이 while 문은 한 번도 실행되지 않음.
    e("i : " + (i++) + "<br>");
}

do { // 변수 j의 초기값은 2이기 때문에 이 do / while 문은 두번만 실행됨.
   ("j : " + (j++) + "<br>");
} while (j > 3);
console.log(i)
console.log(j)

//while문과의 차이점
//
//
//
// while문은
//
// 처음 while문을 실행시켰을 때 while문의 결과가 false이면
//
// while문 안의 코드블록은 한 번도 실행되지 않을 수도 있습니다.
//
// do...while문은
//
// 조건문의 결과와 상관없이 무조건 do 블록의 코드가 적어도 1번은 실행됩니다.
//
