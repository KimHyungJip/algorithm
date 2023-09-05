// 정수 배열 nums가 주어집니다.
// 이 배열에서 두 숫자를 선택하여 더한 결과 중 가장 큰 값을 찾아 반환하세요.

const nums = [1, 2, 3, 4, 5];


//시간복잡도 O(nlogn)
function a(nums){
  
    const arr = nums.reverse()
   
    return arr[0]+arr[1]
}
//시간복잡도 O(n)
function b(nums){
  
    let num1 = 0
    let num2 = 0

    for (const num of nums) {
        if(num1<num){
            num2 = num1
            num1 = num
        }else if(num2<num){
            num2 = num
        }
    }
   
    return num1+num2
}


console.log(a(nums),b(nums))