n, m = map(int, input().split(" "))

arr = []

def backtracking(index, n, m):
    if index == m:
        for i in result:
            print(i,)

N, M = map(int, input().split())
out = []

def solve(depth, N, M):
    if depth == M:
        print(' '.join(map(str, out)))
        return
    for i in range(N):
        out.append(i+1)
        solve(depth+1, N, M)
        out.pop()

solve(0, N, M)