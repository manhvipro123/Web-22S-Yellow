#include<iostream>
using namespace std;
long long arr(int n) {
    long long s = 1;
    for (int i = 1; i <= n; i++)
        s *= i;
    return s;
}
long long C(int k, int n) {
    return  arr(n) / (arr(k)*arr(n - k));
}
int main(){
    int n, k;
    cout << "Nhap k: ";
    cin >> k;
    cout << "Nhap n: ";
    cin >> n;
    cout << "To hop bang: " << C(k, n);
    system("pause");
    return 0;
}