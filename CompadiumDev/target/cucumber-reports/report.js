$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/javafortesters.feature");
formatter.feature({
  "line": 2,
  "name": "User can Access JavaForTesters Book With all Features",
  "description": "",
  "id": "user-can-access-javafortesters-book-with-all-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@javafortesters"
    }
  ]
});
formatter.before({
  "duration": 3619622000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Can see the Ebook",
  "description": "",
  "id": "user-can-access-javafortesters-book-with-all-features;user-can-see-the-ebook",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": ": User Is On HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": ": User Click On JavaforTestersbook",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": User Can See JavaforTesterPageTitle",
  "keyword": "Then "
});
formatter.match({
  "location": "JavafortestersSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 254285700,
  "status": "passed"
});
formatter.match({
  "location": "JavafortestersSteps.userClickOnJavaforTestersbook()"
});
formatter.result({
  "duration": 147618900,
  "status": "passed"
});
formatter.match({
  "location": "JavafortestersSteps.userCanSeeJavaforTesterPageTitle()"
});
formatter.result({
  "duration": 10084242900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".\\/\\/\\*\\[\\@id\\\u003d\\\"title\\\"\\]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MKO8UH8\u0027, ip: \u0027192.168.0.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58973}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a8bb34754e593ca79c38ec85b589717b\n*** Element info: {Using\u003dclass name, value\u003d//*[@id\u003d\"title\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Utils.assertText(Utils.java:16)\r\n\tat Javafortesters.onJavaPagetitle(Javafortesters.java:10)\r\n\tat JavafortestersSteps.userCanSeeJavaforTesterPageTitle(JavafortestersSteps.java:19)\r\n\tat ✽.Then : User Can See JavaforTesterPageTitle(src/main/resources/Features/javafortesters.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 335920200,
  "status": "passed"
});
});