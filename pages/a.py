def pypart(n):
    myList = []
    for i in range(1,n+1):
        myList.append("*"*i)
    print("\n".join(myList))
 
# Driver Code
n = 5
pypart(n)