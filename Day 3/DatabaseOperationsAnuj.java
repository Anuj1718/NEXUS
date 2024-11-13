package dboperations;

import java.sql.*;
import java.util.Scanner;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;

public class DatabaseOperations {

    public static void main(String[] args) throws Exception {
         
        Scanner scanner = new Scanner(System.in);
        Connection con = null;
        PreparedStatement ps = null;
   
        // Load the JDBC driver
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        // Establish connection with the database
        con = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbc_db", "root", "anuj1718");
        
        // Display menu to the user
        int choice;
        do {
            System.out.println("Select an operation:");
            System.out.println("1. Insert");
            System.out.println("2. Update");
            System.out.println("3. Delete");
            System.out.println("4. Select");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            switch (choice) {
                case 1: // Insert
                    System.out.println("Insert Operation:");
                    System.out.print("Enter Name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter Email: ");
                    String email = scanner.nextLine();
                    System.out.print("Enter Password: ");
                    String password = scanner.nextLine();
                    System.out.print("Enter Gender: "); 
                    String gender = scanner.nextLine();
                    System.out.print("Enter City: ");
                    String city = scanner.nextLine();

                    ps = con.prepareStatement("INSERT INTO register (name, email, password, gender, city) VALUES (?, ?, ?, ?, ?)");
                    ps.setString(1, name);
                    ps.setString(2, email);
                    ps.setString(3, password);
                    ps.setString(4, gender);
                    ps.setString(5, city);

                    int insertCount = ps.executeUpdate();
                    if (insertCount > 0) {
                        System.out.println("Record inserted successfully.");
                    } else {
                        System.out.println("Failed to insert record.");
                    }
                    break;

                case 2: // Update
                    System.out.println("Update Operation:");
                    System.out.print("Enter Email of the user to update: ");
                    String updateEmail = scanner.nextLine();
                    System.out.print("Enter new City: ");
                    String updateCity = scanner.nextLine();

                    ps = con.prepareStatement("UPDATE register SET city = ? WHERE email = ?");
                    ps.setString(1, updateCity);
                    ps.setString(2, updateEmail);

                    int updateCount = ps.executeUpdate();
                    if (updateCount > 0) {
                        System.out.println("Record updated successfully.");
                    } else {
                        System.out.println("Failed to update record.");
                    }
                    break;

                case 3: // Delete
                    System.out.println("Delete Operation:");
                    System.out.print("Enter Email of the user to delete: ");
                    String deleteEmail = scanner.nextLine();

                    ps = con.prepareStatement("DELETE FROM register WHERE email = ?");
                    ps.setString(1, deleteEmail);

                    int deleteCount = ps.executeUpdate();
                    if (deleteCount > 0) {
                        System.out.println("Record deleted successfully.");
                    } else {
                        System.out.println("Failed to delete record.");
                    }
                    break;

                case 4: // Select
                    System.out.println("Select Operation: Displaying all records:");
                    ps = con.prepareStatement("SELECT * FROM register");
                    ResultSet rs = ps.executeQuery();

                    while (rs.next()) {
                        System.out.println("Name: " + rs.getString("name"));
                        System.out.println("Email: " + rs.getString("email"));
                        System.out.println("Password: " + rs.getString("password"));
                        System.out.println("Gender: " + rs.getString("gender"));
                        System.out.println("City: " + rs.getString("city"));
                        System.out.println("--------------------------------------");
                    }
                    break;

                case 5: // Exit
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }

        } while (choice != 5);

        // Close the connection
        if (con != null) {
            con.close();
        }
        scanner.close();
    }
}
