import org.openqa.selenium.*
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

description """A new reference can be added 
              if valid information is entered"""

scenario "creation succesfull with valid fields", {
    given 'command new reference is selected', {
        driver = new HtmlUnitDriver();
        driver.get("http://localhost:8081");
        element = driver.findElement(By.linkText("Submit new"));       
        element.click();
    }
 
    when 'a valid reference information is entered', {
        System.out.println(driver.getPageSource())
        element = driver.findElement(By.name("title"));
        element.sendKeys("Testikirja");
        element = driver.findElement(By.name("author"));
        element.sendKeys("Erkki Esimerkki");
        element = driver.findElement(By.name("publisher"));
        element.sendKeys("Megapublisher Ltd");
        element = driver.findElement(By.name("pubYear"));
        element.sendKeys("2013");
        element = driver.findElement(By.name("submit"));
        element.click();
    }

    then 'new reference is found from the list', {
        driver.getPageSource().contains("<td>Testikirja</td>").shouldBe true
    }
}
