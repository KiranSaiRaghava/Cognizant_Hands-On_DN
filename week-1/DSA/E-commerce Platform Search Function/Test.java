import model.Product;
import search.BinarySearch;
import search.LinearSearch;

public class Test {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shirt", "Apparel"),
            new Product(103, "Book", "Education"),
            new Product(104, "Phone", "Electronics")
        };

        String searchItem = "Book";

        System.out.println("Linear Search:");
        Product resultLinear = LinearSearch.search(products, searchItem);
        System.out.println(resultLinear != null ? "Found: " + resultLinear : "Product not found.");

        System.out.println("\nBinary Search:");
        Product resultBinary = BinarySearch.search(products, searchItem);
        System.out.println(resultBinary != null ? "Found: " + resultBinary : "Product not found.");
    }
}
