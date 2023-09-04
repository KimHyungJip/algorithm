// 문제: 주어진 정수 배열에서 가장 긴 증가하는 부분 수열의 길이를 찾는 함수를 작성하세요.

const nums = [10, 9, 2, 5, 3, 7,8, 101, 18];

function a(nums){
  
    const n = nums.length
    const dp = new Array(n).fill(1)
    
    for(let i=0; i<n;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]&&dp[i] < dp[j] + 1){
                dp[i]=dp[j]+1
            }
        }
    }
    return Math.max(...dp)
}

console.log(a(nums))