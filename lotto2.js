//로또 용지 준비
const arr = []

for (let i = 0; i<= 45 ; i++ ) {
    arr.push(i)

}
console.log(arr)

//배열에서부터 6번뽑기
for (let i = 0; i < 6 ; i++ ) {

    const idx = parseInt(Math.random() * arr.length)  // parseInt : 문자열을 숫자로 변환
    //arr.length = 0 ~ 44

    console.log(arr.splice(idx, 1))


    // 배열 idx 번째부터 1개 제거
}