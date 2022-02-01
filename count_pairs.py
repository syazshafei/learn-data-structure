# Python3 implementation of simple method
# to find count of pairs with given sum.

# Returns number of pairs in arr[0..n-1]
# with sum equal to 'sum'

# Expected time complexity O(n)


def getPairsCount(arr, n, sum):

    count = 0  # Initialize result

    # Consider all possible pairs
    # and check their sums
    for i in range(0, n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == sum:
                count += 1

    return count


# Driver function
arr = [1, 2, 3, 7, 9]
n = len(arr)
sum = 10
print("Count of pairs is",
      getPairsCount(arr, n, sum))
