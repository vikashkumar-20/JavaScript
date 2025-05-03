    // String: String is a primitive data type that represents a sequence of character.

    // String created with single, dobule qutotes.

    const str = "Hello world, I am Vikash Kumar I am Vikash Kumar";
    console.log(str.length);
    //including all spaces


    //Escapse Character: If we want to use ' "  / then we want to use /(Backslash) before that character.


    str1 = "\"Vikash \\ VikashV humayan Kumar\"";
    console.log(str1);

    //String search method

    //a: indexOf() : It gives index. && lastIndexOf() : It gives lastindex of str eg: "VikashV" then it gives last V

    console.log(str1.indexOf('h'));
    console.log(str1.indexOf('h', 8));

    console.log(str1.lastIndexOf('V'));
    console.log(str1.lastIndexOf('z', 15));

    //Convert a string into array. Array.from()

    console.log(Array.from(str1));

    // includes()

    console.log(str.includes('o', 12));


    //startsWith()  & endsWith () : It gives ture if it matches or false for not matches

    console.log(str.startsWith('H'));
    console.log(str.endsWith('Kumar'));



    //search(): It gives also index of a string if found and gives -1 for not found. 

    // It is the same like indexOf() but there is a diff btw both we can tackle case sensitive 
    // or we can also use regex in search()

    console.log(str.search("vikash")) // Output -1 because "Vikash"

    console.log(str.search(/vikash/i)) // Here tackle case sensitive using regex


    //match() & matchAll() : match() returns the array of single element if matches and null for not matches. 
    //matchAll(): returns the all element in the array format if matches and null for not matches. 

    console.log(str.match('vikash')); // null "Vikash"
    console.log(str.match(/vikash/i));

    //output
    /* 
    [
        'Vikash',
        index: 18,
        input: 'Hello world, I am Vikash Kumar',
        groups: undefined
    ]
    */

    console.log(str.match(/vikash/gi)); // [ 'Vikash', 'Vikash' ] match for vikash globally and ignore case sensitive.


    let res = str.matchAll("vikash"); // Object [RegExp String Iterator] {} because we have "Vikash" V is capital.
    console.log(res);

    console.log(...str.matchAll("Vikash"));

    // or 

    console.log(...str.matchAll(/vikash/gi)); //(...)spread operator is used here to see the result. 
    // Instead of (...) we can also use for...of loop.


    // Output

    /* 
    [
    'Vikash',
    index: 18,
    input: 'Hello world, I am Vikash Kumar I am Vikash Kumar',
    groups: undefined
    ] [
    'Vikash',
    index: 36,
    input: 'Hello world, I am Vikash Kumar I am Vikash Kumar',
    groups: undefined
    ]
    */


    //using for..of loop 


    let result = str.matchAll(/vikash/gi);

    // for (let item of result) {
    //     console.log(item);
    // }

    // for (let item of result) {
    //     console.log(item[0]); // Vikash
    //                           // Vikash
    // }


    // for (let {index } of result) {
    //     console.log(index);  // 18 36
    // }

    for (let index of result) {
        console.log(index.index);  // 18 36
    }




    // Extracting String Characters 


    // slice(start, end) 

    // str = Hello world, I am Vikash Kumar I am Vikash Kumar 
    console.log(str.slice(0,5)); // Hello
    console.log(str.slice(0)); // Hello world, I am Vikash Kumar I am Vikash Kumar
    console.log(str.slice(-12)); //Vikash Kumar
    console.log(str.slice(-12, -1)); //Vikash Kuma


    //substring(start, end)

    console.log(str.substring(0,5)); // Hello
    console.log(str.substring(0));  // Hello world, I am Vikash Kumar I am Vikash Kumar
    console.log(str.substring(-1));  // Hello world, I am Vikash Kumar I am Vikash Kumar // There is no negative index

    // replace(string, " ") & replaceAll(string, " "): Replace the matching string with given string.

    console.log(str.replace("h" ,"r")); // Replace one first element "h" with "r"

    console.log(str.replaceAll("h" ,"r")); // Replace all element "h" with "r"

    //Extracting  String Character 

    //charAt(position): It gives the character if found and if not found then it gives empty string.

    console.log(str.charAt(47)); // r

    // charCodeAt(positon): find the character at that postion and returns the ASCII code of that character. If not found then returns NaN
    console.log(str.charCodeAt(39)); // 97 - a

    console.log(str.charCodeAt(80)); // NaN

    // Es2022 we have a new method at(): This returns the value at this index if it is found and Undefined if not found.

    console.log(str.at(39)); //a 
    console.log(str.at(80)); //undefined
    console.log(str.at(-1)); //r 


    //diff btw chatAt() and at() : chatAt() don't allow negative index but at() allows.



    //Replacing string content

    //replace() and replaceAll(): Replace a specified value with another value

    //Case Senstive Replacement: To perform a case-sensitive replacement, you can use the i flag in the reglar expression.

    let strrr = "     VikASH Kumar Vikash Kumar     ";
    console.log(strrr.replace('V',"A"));


    console.log(strrr.replaceAll('V',"A"));

    console.log(strrr.replaceAll(/v/gi, "V")); //ignore case senstive and use glovally.


    // !!Other Useful Methods

    //toUpperCase() and toLowerCase() : It converts a string in to UpperCase and LowerCase.

    console.log(strrr.toUpperCase()); ///VIKASH KUMAR VIKASH KUMAR
    console.log(strrr.toLowerCase()); // vikash kumar vikash kumar


    //Split(): Split the string into an array of substring based on delimeter.

    console.log(strrr.trim().split(" ")); 
    /* Output 
    [ 'VikASH', 'Kumar', 'Vikash', 'Kumar' ]
    */


    //trim(): Remove the space from start and end of the string
    console.log(strrr.trim()); //VikASH Kumar Vikash Kumar


    //length: gives the length of string

    console.log(strrr.length);


    //reverse() 

    console.log(strrr.trim().split(" ").reverse());  //[ 'Kumar', 'Vikash', 'Kumar', 'VikASH' ]

    // join(): convert array to string

    console.log(strrr.trim().split(",").reverse().join());  // VikASH Kumar Vikash Kumar


    // String.fromCharCode(number): it converts a number into string.

    //Practice Question 

    //Question1: Write a Js function that prints the letters 'a' through 'z' in the console.
    // You should use a loop to iterate through the letters and print on a new line.

    function printLetter() { 
        for(let i=97; i<=122; i++)
        {
            console.log(String.fromCharCode(i));
        }
    }
    printLetter();

    //Question2: Write a function to count the number of vowels in a string.

    function countAllVowel(strr){
        let count = 0;
        const vowels = "aeiou"

        strr = strr.toLowerCase();

        for (let char of strr) {
            console.log(char);
            if(vowels.includes(char))
            {
                count++;
            }
            
            
        }
        return count;
        
    } 

    console.log(countAllVowel("VikashaaaAeo"))


    // How many vowels are presnt ? 

    function countVowel(strr){
        let count = 0;
        const vowels = "aeiou"

        strr = strr.toLowerCase();

        for (let char of strr) {
            console.log(char);
            if(vowels.includes(char))
            {
                count++;
            }
            
            
        }
        return count;
        
    } 

    // console.log(countAllVowel("Vikasssshaa"))

    function countVowel(str5){

        let count = 0;
        const vowels = "aeiou"

        str5 = str5.toLowerCase();

        for (let char of vowels) {
            console.log(char);
            if(str5.includes(char))
            {
                count++;
            }
            
            
        }
        return count;
    }

    // console.log(countVowel("Vikasssshaa"))

    // Write a program to check all vowels is present or not !!


    function checkPresentVowel(str5){

        
        const vowels = "aeiou"

        str5 = str5.toLowerCase();

        for (let char of vowels) {
            console.log(char);
            if(!str5.includes(char))
            {
                return false;
            }
            
            
        }
        return true;
    }

    console.log(checkPresentVowel("Vikasssshaaeiou"))


    // Check the string is pangram or not !! i.e all alphabet is present or not.

    const checkPamgram = (str555) => { 

        let allAlphabet = '';
        for(let i=97; i<=122; i++)
        { 
            allAlphabet = allAlphabet + String.fromCharCode(i);
            
        }
        console.log(allAlphabet);
        str555 = str555.toLowerCase();

        for(let char of allAlphabet)
        {
            if(!str555.includes(char))
            {
                return false;
            }
            
        }
        return true;

    }

    // console.log(checkPamgram("vikash"))


    //Second Method

    const checkPamgra = (strz) =>  { 

        strz = strz.toLowerCase().split('');
        console.log(strz);

        let newArr = strz.filter((curr) => 
            curr.charCodeAt() >= 'a'.charCodeAt() && 
            curr.charCodeAt() <= 'z'.charCodeAt())

        newArr = [...new Set(newArr)];
        
        if(newArr.length == 26)
        {
            return "Given String is Pamgram"
        }
        else
        {
             return "Given String is Not Pangram"
        }
    }


    console.log(checkPamgra("vikash @ Kumar abcdefghijklmnopqrstuvwzyz--24t@%^@#"))
