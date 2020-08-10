






var groupAnagrams = function(strs) {

   var count = new Array(26).fill(0)
   // count["z".charCodeAt()-"a".charCodeAt()] = 1;

   // console.log(count)
   var mark = {};
   var result = [];

   for (var str of strs) {

      count.fill(0)
      for (var i = 0; i < str.length; i++) {
         var char = str[i];
         count[char.charCodeAt()-'a'.charCodeAt()]++
      }
      var key = '#';
      for (var i = 0; i < count.length; i++) {
         key += count[i] + '#'
      }
      
      if (!mark[key]) {
         mark[key] = [str]
      }else {
         mark[key].push(str)
      }
   }

   for (var key in mark) {
      result.push(mark[key]);
   }

   console.log(mark);
   console.log(result);
   return result;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs)


