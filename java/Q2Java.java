package java;

import java.util.HashMap;
import java.util.Scanner;

public class Q2Java {
    
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
         
         try {
            int result = romanToInt(romanNumeral);
            System.out.println("Integer value: " + result);
        } catch (Exception e) {
            System.out.println("Invalid Roman numeral.");
        }
    }
    

public static int romanToInt(String roman) {
    	HashMap<Character, Integer> romanNumerals = new HashMap<>();
        romanNumerals.put('I', 1);
        romanNumerals.put('V', 5);
        romanNumerals.put('X', 10);
        romanNumerals.put('L', 50);
        romanNumerals.put('C', 100);
        romanNumerals.put('D', 500);
        romanNumerals.put('M', 1000);
    	
        int result = 0;
        int prevValue = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            int currentValue = romanNumerals.get(roman.charAt(i));

            if (currentValue < prevValue) {
                result=result- currentValue;
            } else {
                result =result + currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

}
