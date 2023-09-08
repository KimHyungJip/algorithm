// 주어진 정수 배열 nums에서 두 숫자를 선택하여 더한 결과 중,
//  특정한 합(target)과 가장 가까운 값을 찾아 반환하는 함수를 작성하세요.

const name = ["may", "kein", "kain", "radi"]
const yearning	 =[5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]

function solution(name, yearning, photo) {
    var answer = [];
    var arr=[]
    var i=0
    for(const nic of name){
        arr[nic] = yearning[i]
        i++
    }

    for (const pic of photo) {
        let sum = 0;
        for(let a=0;a<pic.length;a++){
            if(arr[pic[a]]>=0){
                sum += arr[pic[a]]
            }
        }
        answer.push(sum)
    }

    return answer;
}

console.log(solution(name,yearning,photo))