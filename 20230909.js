function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    for (const sec of section) {
        if(sec<painted){
            continue
        }
        answer+=1
        painted = m+sec
    }
    return answer;
}
console.log(solution(8,4,[2, 3, 6]))