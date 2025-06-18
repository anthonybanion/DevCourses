import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

public class SalesFigures {

    public static void main(String[] args) {

        Scanner fileScanner = null;

        // Try to open the file
        try {
            fileScanner = new Scanner(new File("sales.dat"));
        } catch (FileNotFoundException e) {
            System.out.println("Can't open file \"sales.dat\" for reading!");
            System.out.println("Please make sure the file is present before running the program.");
            System.exit(1);
        }

        double totalSales = 0.0;
        int missingCount = 0;

        // Process each line of the file
        while (fileScanner.hasNextLine()) {
            String line = fileScanner.nextLine();
            int colonIndex = line.indexOf(':');

            // Skip lines without colon
            if (colonIndex == -1 || colonIndex == line.length() - 1) {
                continue;
            }

            String dataString = line.substring(colonIndex + 1).trim();  // Remove whitespace

            try {
                double sales = Double.parseDouble(dataString);
                totalSales += sales;
            } catch (NumberFormatException ex) {
                missingCount++;
            }
        }

        fileScanner.close();

        // Print the results
        System.out.printf("Total sales recorded from all cities: $%.2f%n%n", totalSales);
        if (missingCount == 0) {
            System.out.println("Data was received from all cities.");
        } else if (missingCount == 1) {
            System.out.println("Data was missing from 1 city.");
        } else {
            System.out.printf("Data was missing from %d cities.%n", missingCount);
        }
    }
}
