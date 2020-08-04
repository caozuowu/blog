

var isPalindrome = function (x) {

    var reverted = 0;
    while (x > reverted) {
        reverted = reverted*10 + x%10;
        x = x/10;
    }

    console.log(reverted, x);

}

isPalindrome(1234554321)

