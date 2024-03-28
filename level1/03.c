#include <stdio.h> 
int main() { 
    int n = 5, sum = 0; 
    do { 
        for (int i = n; i > 0; i--) { 
            sum += i; 
        } 
        n -= 2; 
    } 
    while (n >= 1); 
    printf("%d", sum); 
    return 0; 
}