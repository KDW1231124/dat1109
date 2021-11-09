//로또 용지 준비

let arr = [];
for(let i = 0; i < 6; i++){          //배열에서부터 6번뽑기
    arr.push(Math.floor(Math.random()*45)+1)

    for(let c = 0; c<i; c++){
        if (arr[i] === arr[c]) {
            arr.pop();
            i--;
        }
    }
}
console.log(arr);

//배열 요소 삭제 함수를 이용한 중복 제거 로직