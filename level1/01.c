 #include <stdio.h>

int main() {
    int x = 3, i = 0;
    do {
        x = ++x;
        ++i;
    } while (i != 6);
    printf("%d", x);
    return 0;
}