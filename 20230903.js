// 두 개의 정수 배열 nums1과 nums2가 주어집니다. 
// 두 배열을 합친 새로운 배열을 반환하세요. 
// 단, 합친 배열은 정렬된 상태여야 합니다.

nums1=[1,2,3];
nums2=[2,5,6];
console.log(nums1,nums2)

function a(nums1,nums2){
    let i=0;
    let j=0;
    var answer = []
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            answer.push(nums1[i])
            i++
        }else{
            answer.push(nums2[j])
            j++
        }
    }

    while(i<nums1.length){
        answer.push(nums1[i])
        i++
    }
    while(j<nums2.length){
        answer.push(nums2[j])
        j++
    }
    return answer
}

console.log(a(nums1,nums2))


