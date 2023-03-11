import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JavafortestersSteps{

    @Given("^: User Is On HomePage$")
    public void userIsOnHomePage() {
    }
    @When("^: User Click On JavaforTestersbook$")
    public void userClickOnJavaforTestersbook() {
     HomePage homePage = new HomePage();
     homePage.javafortestersbook();
    }
    @Then("^: User Can See JavaforTesterPageTitle$")
    public void userCanSeeJavaforTesterPageTitle() {
     Javafortesters javafortesters = new Javafortesters();
     javafortesters.onJavaPagetitle();
    }


    @Given("^: User Is On HomePageforbuy$")
    public void userIsOnHomePageforbuy() {
    }
    @When("^: User Click On JavaforTestersforbuy$")
    public void userClickOnJavaforTestersforbuy() {
    }
    @And("^: User Click On BuyEbook$")
    public void userClickOnBuyEbook() {
    }
    @And("^: User Ebook To Cart$")
    public void userEbookToCart() {
    }
    @And("^: User CheckOut With CreditCard$")
    public void userCheckOutWithCreditCard() {
    }
    @Then("^: User Can See PayWithCard Page$")
    public void userCanSeePayWithCardPage() {
    }


}
