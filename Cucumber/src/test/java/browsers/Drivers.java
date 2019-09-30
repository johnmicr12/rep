package browsers;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Drivers {
	public static WebDriver drivers (String browser)
	{
		if(browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\new1\\chromedriver.exe");
			return new ChromeDriver();
		}else if(browser.equals("ie")) {
			System.setProperty("webdriver.ie.driver", "C:\\new1\\IEDriverServer.exe");
		return new InternetExplorerDriver();		
	}else if(browser.equals("firefox")) {
		System.setProperty("webdriver.gecho.driver", "C:\\new1\\geckodriver.exe");
		return new FirefoxDriver();
}
		return null;
	}
}
