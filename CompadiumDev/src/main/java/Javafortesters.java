
import org.openqa.selenium.By;

public class Javafortesters extends Utils {
//locators for javafortesters
private By _javapagetitle = By.className("//*[@id=\"title\"]");

//Method
public void onJavaPagetitle(){
    assertText(_javapagetitle,"Java For Testers");

}



}
