def twoSum(arr,n,target):

    for i in range(0,n):
        for j in range(i+1,n):
            if(arr[i] + arr[j] == target):
                
                return(i,j)
                


arr = [1,2,3,4,5,6,7,8]
n = 8
target = 7
print(twoSum(arr,n,target))

    



