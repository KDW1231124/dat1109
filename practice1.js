// 배열
const arr = ["tiger", "lion", "eagle"]
//length는 3
console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// (1)-1 :맨 마지막 추가 .push
const changedLength = arr.push("monkey")
//1개가 추가되었으니 바뀐 Length는 4
console.log(changedLength)
//(1)-2 : 배열이름[배열이름.length]
arr[arr.length] = 'cat'
console.log(arr)

// (2) 배열 안 항목의 인덱스 찾기 .indexOf
// tiger는 arr[0] -> 인덱스 0번 -> 결과값 0
console.log(arr.indexOf("tiger"))
// lion는 arr[1] -> 인덱스 1번 -> 결과값 1
console.log(arr.indexOf("lion"))
// monkey는 배열안에 없으므로 -> 결과값 -1
console.log(arr.indexOf("monkey"))

// (3) 인덱스 위치에 있는 항목 추가, 제거 .splice(pos,순서)
// 3-1 추가
const num = [0,1,2,3]
// 배열 2번째 위치한곳에 숫자 5를 추가한다.
num.splice(2,0,5) // [0, 1, 5, 2, 3]
console.log(num)
// 배열 2번째 위치한곳에 숫자 5,7을 추가한다.
num.splice(2,0,5,7)  //[0, 1, 5, 7, 2, 3]
console.log(num)
// 3-2 제거
// 배열 1번째 부터 1개를 제거한다.
num.splice(1,1) // [0, 2, 3]
console.log(num)

// 배열 1번째 부터 2개를 제거한다.
num.splice(1,2) //[0, 3]
console.log(num)