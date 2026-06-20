package forecast;

public class ForecastCalculator {

    public static double calculateFutureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return (1 + growthRate) * calculateFutureValue(initialValue, growthRate, years - 1);
    }


    // Memoization to improve time complexity, to overcome overlapping sub-problems
    public static double calculateWithMemo(double initialValue, double growthRate, int years, double[] memo) {
        if (years == 0) return initialValue;

        if (memo[years] != 0) return memo[years];

        memo[years] = (1 + growthRate) * calculateWithMemo(initialValue, growthRate, years - 1, memo);
        return memo[years];
    }
}