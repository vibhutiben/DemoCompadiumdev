import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utils {
BrowserSelector browserSelector = new BrowserSelector();
@Before
    public void openBrowser(){
    browserSelector.setUpBrowser();
    driver.get("https://compendiumdev.co.uk/");
}
@After
   public void closeBrowser(){
   driver.quit();

}}
