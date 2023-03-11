import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Utils extends BasePage{

//    public static void clickOnElement(By by ){
//    driver.findElement(by).click();}
//     public static void clickOnElement(By by) {
//         WebElement element = driver.findElement(by);
//         element.click();

public void clickOnElement(WebElement element) {
     element.click();
//
     }
    public void assertText(By by,String expected){
        String Actual = driver.findElement(by).getText();
        Assert.assertEquals(expected,Actual);
    }
}
