
var mark = [
    {value: 1000, symbol: "M"},
    {value: 900,  symbol: "CM"},
    {value: 500,  symbol: "D"},
    {value: 400,  symbol: "CD"},
    {value: 100,  symbol: "C"},
    {value: 90,   symbol: "XC"},
    {value: 50,   symbol: "L"},
    {value: 40,   symbol: "XL"},
    {value: 10,   symbol: "X"},
    {value: 9,    symbol: "IX"},
    {value: 5,    symbol: "V"},
    {value: 4,    symbol: "IV"},
    {value: 1,    symbol: "I"},
]
    
var intToRoman = function(num) {
    var result = "";
    for (var i = 0; i < mark.length; i++) {
        var value = mark[i].value
        while (value <= num) {
            num -= value;
            result += mark[i].symbol
        }
    }
    console.log(result)
    return result;
}

intToRoman(1994)
