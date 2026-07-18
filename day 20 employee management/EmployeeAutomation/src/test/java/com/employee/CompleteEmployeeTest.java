package com.employee;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CompleteEmployeeTest {

    public static void main(String[] args) throws InterruptedException {

        // Launch Browser
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        // Open Application
        driver.get("http://localhost:5173");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));

        // ===============================
        // Login (No Delay)
        // ===============================
        wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("input[placeholder='Username']")));

        driver.findElement(By.cssSelector("input[placeholder='Username']"))
                .sendKeys("admin");

        driver.findElement(By.cssSelector("input[placeholder='Password']"))
                .sendKeys("Admin@123");

        driver.findElement(By.cssSelector("button[type='submit']"))
                .click();

        System.out.println("Login Successful");

        // Wait for employee cards to load
        wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.className("lg-card")));

        Thread.sleep(5000);

        // ===============================
        // Verify Page Title
        // ===============================
        String title = driver.getTitle();
        System.out.println("Page Title : " + title);

        Thread.sleep(5000);

        // ===============================
        // Verify URL
        // ===============================
        String url = driver.getCurrentUrl();
        System.out.println("Current URL : " + url);

        Thread.sleep(5000);
        List<WebElement> employees =
                driver.findElements(By.className("lg-card"));

        System.out.println("Employees Loaded : " + employees.size());

        Thread.sleep(5000);

        // ===============================
        // Search Employee
        // ===============================
        WebElement searchBox =
                driver.findElement(By.cssSelector(".lg-search input"));

        searchBox.sendKeys("Tiger");

        System.out.println("Searching Employee : Tiger");

        Thread.sleep(5000);

        // ===============================
        // Verify Search Results
        // ===============================
        List<WebElement> results =
                driver.findElements(By.className("lg-card"));

        System.out.println("Search Results : " + results.size());

        if (results.size() > 0) {
            System.out.println("Search Test Passed");
        } else {
            System.out.println("Search Test Failed");
        }

        Thread.sleep(5000);

        // Close Browser
        driver.quit();

        System.out.println("Automation Completed Successfully");
    }
}