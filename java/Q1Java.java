import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Q1Java {
    public static void main(String[] args) {
        System.out.println("Enter total Numbers");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> array = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            array.add(i,sc.nextInt());
        }

        // Printing the unshuffled array
        System.out.println("Unshuffled array:");
        System.out.println(array);

        // Shuffling using inbuilt shuffle function
        Collections.shuffle(array);

        // Then printing the shuffled array
        System.out.println("Shuffled array:");
        System.out.println(array);
    }
}