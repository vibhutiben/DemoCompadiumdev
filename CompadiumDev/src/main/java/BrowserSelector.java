
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;
public class BrowserSelector extends Utils {
    public void setUpBrowser(){
        System.setProperty("webdriver.chrome.driver","src/main/resources/BrowserDriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().fullscreen();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //driver.get("https://compendiumdev.co.uk/");

    }



}
