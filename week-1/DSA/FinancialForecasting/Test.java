
import forecast.ForecastCalculator;

public class Test {
    
    public static void main(String[] args) {
        double initialValue = 10000;  
        double growthRate = 0.08;    
        int years = 5;

        // Recursive prediction
        double futureValue = ForecastCalculator.calculateFutureValue(initialValue, growthRate, years);
        System.out.printf("Predicted value after %d years (Recursive): ₹%.2f%n", years, futureValue);

        
        // Improving time complexity by memo
        double[] memo = new double[years + 1];
        double memoizedValue = ForecastCalculator.calculateWithMemo(initialValue, growthRate, years, memo);
        System.out.printf("Predicted value after %d years (Memoized): ₹%.2f%n", years, memoizedValue);
    }
} 
    

