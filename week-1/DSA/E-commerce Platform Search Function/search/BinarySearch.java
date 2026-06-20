package search;


import java.util.Arrays;
import java.util.Comparator;

import model.Product;

public class BinarySearch {
    public static Product search(Product[] products, String targetName) {
        
        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int compareResult = products[mid].getProductName().compareToIgnoreCase(targetName);
            if (compareResult == 0) {
                return products[mid];
            } else if (compareResult < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
