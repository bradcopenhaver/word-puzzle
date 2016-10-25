var original;
var byLetter = "";
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

var letters = [];
var newSentence = "";

var splitString = function(stringToSplit, separator) {
  return words = stringToSplit.split(separator);
}

var replaceVowels = function(arrayOfLetters) {
  for (index=0; index<arrayOfLetters.length; index+=1){
    vowels.forEach(function(vowel){
      if (arrayOfLetters[index] === vowel){
      arrayOfLetters[index] = "-";
    }
  })
    //REPLACE forEach function
    // for (i=0; i<vowels.length; i+=1){
    //   if (arrayOfLetters[index] === vowels[i]){
    //     arrayOfLetters[index] = "-";
    //   }

    // }
  }
}

var toSentence = function(arrayOfLetters) {
  for(i=0; i<arrayOfLetters.length; i+=1){
    newSentence += arrayOfLetters[i];
  }

};

//
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    original = $("input#original").val();

    letters = splitString(original, byLetter);

    replaceVowels(letters);
    toSentence(letters);
    $(".output").text(newSentence);
    $("form").hide();
    });
});
