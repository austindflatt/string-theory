// Task 1 //
function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
    output = output + 'x';
    }
    return output;
}
  
  console.log(xify('hello'));
  console.log(xify('hi there'));

// Task 2 //
function yellingChars(yell) {
    let output = '';
    for (const character of yell) {
    output += character + "!";
    }
    return output;
}
console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));

// Task 3 //
function indexedChars(index) {
    let output = '';
    let x = 0;
    for (const character of index) {
    output += x + character; x++;
    }
    return output;
}

console.log(indexedChars('hello'));
console.log(indexedChars('bye'));

// Task 4 //
function numberedChars(str) {
    let output = '';
    let x = 1;
    for (const character of str) {
    output += x + character; x++;
    }
    return output;
}

console.log(numberedChars('hello'));
console.log(numberedChars('bye'));

// Task 5 //
function exclaim(change) {
    let output = '';
    let question = "?";
    let period = ".";
    for (let i = 0; i < change.length; i++) {
        if (change[i] === question || change[i] === period) {
            output += "!"
        } else {
            output += change[i];
        }
    }
    return output;
}

console.log(exclaim('What are you doing? Are you a fool?'));
console.log(exclaim('This is fine.'));

// Task 6 //
function repeatIt(repeat, n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output += repeat;
    }
    return output;
}

console.log(repeatIt('beetlejuice', 3));
console.log(repeatIt('oh hi!', 8));

// Task 7 //
function truncate(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (i < 15) {
        output += str[i];
        } else if (str.length < 15) {
            return str;
        }
    }
    return output + "...";
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate('Well, that\'s just, like, your opinion man.'));

// Task 8 //
function ciEmailify(email) {
    let output = '';
    for (let i = 0; i < email.length; i++) {
        if (email[i] === " ") {
            output += ".";
        } else {
            output += email[i];
        }
    }
    return output.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));

// Task 9 //
function reverse(str) {
    let output = '';
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}

console.log(reverse('colin'));
console.log(reverse('mesuara'));

// Task 10 //
function onlyVowels(str) {
}

console.log(onlyVowels('Colin Jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));