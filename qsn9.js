/* Q.9 Write a program to find the number of vowels, consonants, digits and white space characters in a string.
 */
const countCharacterType = (str) => {
  let vowels = 0,
    consonant = 0,
    whitespace = 0,
    digit = 0;
  for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if (
      (character >= "a" && character <= "z") ||
      (character >= "A" && character <= "Z")
    ) {
      character = character.toLowerCase();

      if (
        character == "a" ||
        character == "e" ||
        character == "i" ||
        character == "o" ||
        character == "u"
      ) {
        vowels++;
      } else {
        consonant++;
      }
    } else if (character >= "0" && character <= "9") {
      digit++;
    } else whitespace++;
  }
  console.log("vowels:", vowels);
  console.log("consonant:", consonant);
  console.log("digit:", digit);
  console.log("whitespace:", whitespace);
};

countCharacterType("pushpa is fire123");
