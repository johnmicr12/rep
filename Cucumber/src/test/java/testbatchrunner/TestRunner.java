package testbatchrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="stepdef",tags= {"@DataTable"},plugin= {"json:target\\cucumber-json-report.json"})
public class TestRunner {

}
