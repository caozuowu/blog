
function FIB(n) {
    if (n <= 1) {
        return n
    }else {
        return FIB(n-1) + FIB(n-2)
    }
}