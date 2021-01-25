//6-1 15596

long long sum(int *a, int n)
{
    int sum = 0;
    for (int i = 0; i< 6; i++) {
          sum += a[i];      
    }
}

int main() 
{
    int a[] = {3, 5, 6, 8, 1, 45};
    int n = 6;
    printf("%d", sum(a, n));
}
