// .......................................( Slow Track Js Final Assignment)....................
// I comment the all programs statment. 


// 1. Write a js program to convert lowercase string to uppercase.
var str= "hello world ";
var res= str.toUpperCase();
console.log("",res); 

// 2.Write a js program to convert uppercase string to lowercase.
var str= "HELLO WORLD ";
var res= str.toLowerCase();
console.log("",res);

//3. Java program to toggle each character in a string

// class GFG
// {
 
// static void toggleChars(char str[])
// {
//     for (int i=0; i<str.length; i++)
//     {
//         if (str[i]>='A' && str[i]<='Z')
//             str[i] = (char) (str[i] + 'a' - 'A');
//         else if (str[i]>='a' && str[i]<='z')
//             str[i] = (char) (str[i] + 'A' - 'a');
//     }
// }

//4.Write a js program to find total number of alphabets, digits or special character in a string.

// public class CountAlpDigiSpl1 {
// 	private static Scanner sc;
// 	public static void main(String[] args) {
// 		String aldisp_str;
// 		int i, alph, digi, spl;
// 		alph = digi = spl = 0;
// 		char ch;
		
// 		sc= new Scanner(System.in);
// 		System.out.print("\nPlease Enter Alpha Numeric Special String =  ");
// 		aldisp_str = sc.nextLine();
		
// 		for(i = 0; i < aldisp_str.length(); i++)
// 		{
// 			ch = aldisp_str.charAt(i);
// 			if(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' ) {
// 				alph++;
// 			}
// 			else if(ch >= '0' && ch <= '9') {
// 				digi++;
// 			}
// 			else {
// 				spl++;
// 			}
// 		}		
// 		System.out.println("\nNumber of Alphabet Characters  =  " + alph);
// 		System.out.println("Number of Digit Characters     =  " + digi);
// 		System.out.println("Number of Special Characters   =  " + spl);
// 	}
// }




// 5.Write a js program to count total number of vowels and consonants in a string.

// public class CountVowelConsonant {  
//     public static void main(String[] args) {  
          
//         //Counter variable to store the count of vowels and consonant  
//         int vCount = 0, cCount = 0;  
          
//         //Declare a string  
//         String str = "This is a really simple sentence";  
          
//         //Converting entire string to lower case to reduce the comparisons  
//         str = str.toLowerCase();  
          
//         for(int i = 0; i < str.length(); i++) {  
//             //Checks whether a character is a vowel  
//             if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {  
//                 //Increments the vowel counter  
//                 vCount++;  
//             }  
//             //Checks whether a character is a consonant  
//             else if(str.charAt(i) >= 'a' && str.charAt(i)<='z') {    
//                 //Increments the consonant counter  
//                 cCount++;  
//             }  
//         }  
//         System.out.println("Number of vowels: " + vCount);  
//         System.out.println("Number of consonants: " + cCount);  
//     }  
// }   

// 6.Write a js program to count total number of words in a string.
// function countWords(str) {
//     str = str.replace(/(^\s*)|(\s*$)/gi,"");
//     str = str.replace(/[ ]{2,}/gi," ");
//     str = str.replace(/\n /,"\n");
//     return str.split(' ').length;
//     }
//  console.log(countWords("   Tutorix is one of the best E-learning   platforms"));
