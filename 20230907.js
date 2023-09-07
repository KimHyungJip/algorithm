// 주어진 문자열에서 가장 많이 등장하는 문자를 찾아 반환하는 함수를 작성하세요.

const str = "programming";

function a(str){
    let count=[]
    for (const char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    let maxCount=0
    let arr=''
    for (const key in count) {
        if (count[key]>maxCount) {
            arr=key
            maxCount = count[key]
        }
    } 
    return arr;
}

console.log(a(str))