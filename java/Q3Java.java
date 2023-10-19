package java;

import java.util.Scanner;

public class Q3Java {

	 public static void main(String[] args) {
	        Scanner sc = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        String input = sc.nextLine().toLowerCase().replaceAll(" ", "");
	        boolean[] letterPresent = new boolean[26]; 
	        for (char c : input.toCharArray()) {
	            if (Character.isLetter(c)) {
	                int index = c - 'a'; 
	                letterPresent[index] = true; 
	            }
	        }

	        boolean isPangram = true;
	        for (boolean present : letterPresent) {
	            if (!present) {
	                isPangram = false;
	                break;
	            }
	        }

	        if (isPangram) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }
	    }
	}

