
/*Brief: This program will read one line of input typed by the user.
 *  It will print the words from the input, one word to a line.
 *  A word is defined to be a sequence of letters.  All non-letters
 *  in the input are discarded.
 *Detail: Exercise 3.4
 *Source: https://math.hws.edu/eck/cs124/javanotes9-swing/c3/ex4-ans.html
 *Date: 19/02/2025
 *Version: 1.0*/


import java.util.Scanner;

public class ListWordsInString {

   public static void main(String[] args) {
       Scanner stdin = new Scanner(System.in);
       String line;    // A line of text, typed in by the user.
       int i;          // Position in line, from 0 to line.length() - 1.
       char ch;        // One of the characters in line.
       boolean didCR;  // Set to true if the previous output was a carriage return.
       
       System.out.println("Enter a line of text.");
       System.out.print("? ");
       line = stdin.nextLine();
       stdin.close();
       System.out.println();
       didCR = true;
       
       for ( i = 0;  i < line.length();  i++ ) {
          ch = line.charAt(i);
          if ( Character.isLetter(ch) ) {
             System.out.print(ch);
             didCR = false;
          }
          else {
             if ( didCR == false ) {
                System.out.println();
                didCR = true;
             }
          }
       }
       
       System.out.println();  // Make sure there's at least one carriage return at the end.
       
    }  // end main()
 
}  // end class ListWordsInString
