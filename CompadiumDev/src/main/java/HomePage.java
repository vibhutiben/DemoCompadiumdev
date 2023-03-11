
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.awt.desktop.SystemEventListener;
import java.util.Set;

public class HomePage extends Utils {

    //Locators for HomePage
    @FindBy(xpath = "//img[@alt='Java For Testers Cover']")
    private WebElement _javafortesters;

//   private By _javafortesters = By.xpath("//img[@alt='Java For Testers Cover']");
   //Method
   public void javafortestersbook(){
        clickOnElement(_javafortesters);
       //String parentHandle=driver.getWindowHandle();
       //System.out.println("parent window "+parentHandle);
       //Set<String> handles = driver.getWindowHandles();
       //for(String handle : handles){
       //System.out.println(handle);}

    }}


