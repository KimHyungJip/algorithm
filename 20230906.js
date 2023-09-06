// 주어진 정수 배열 nums에서 중복된 숫자를 찾아내는 함수를 작성하세요. 
// 중복된 숫자가 여러 개일 수 있으며, 중복된 숫자를 모두 찾아서 배열로 반환해야 합니다.

const nums = [4, 3, 2, 7, 8, 2, 1, 4];

function a(nums){
    const count={}
    const arr=[]
    for (const num of nums) {
        if(count[num]){
            arr.push(num)
        }else{
            count[num] = 1
        }
    }
    return arr;
}

console.log(a(nums))