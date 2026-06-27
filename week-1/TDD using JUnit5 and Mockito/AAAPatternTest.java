package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AAAPatternTest {

        private Calculator calculator;

        // Setup Method
        @Before
        public void setUp() {
            calculator = new Calculator();
            System.out.println("Setup: Calculator object created");
        }

        // Test Method using AAA Pattern
        @Test
        public void testAdd() {

            // Arrange
            int a = 10;
            int b = 20;

            // Act
            int result = calculator.add(a, b);

            // Assert
            assertEquals(30, result);
        }

        // Teardown Method
        @After
        public void tearDown() {
            calculator = null;
            System.out.println("Teardown: Calculator object destroyed");
        }
    }
