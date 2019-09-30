$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/demo.feature");
formatter.feature({
  "name": "product purchase",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "App is up",
  "keyword": "Given "
});
formatter.match({
  "location": "DefineStep.app_is_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "microwave purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Jhon purchse a microwave for 400 doll",
  "keyword": "Given "
});
formatter.match({
  "location": "DefineStep.jhon_purchse_a_microwave_for_doll(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he has a recepit",
  "keyword": "And "
});
formatter.match({
  "location": "DefineStep.he_has_a_recepit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Jhon returened the faulty product",
  "keyword": "When "
});
formatter.match({
  "location": "DefineStep.jhon_returened_the_faulty_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he got refund of 400 doll",
  "keyword": "Then "
});
formatter.match({
  "location": "DefineStep.he_got_refund_of_doll(Integer)"
});
formatter.result({
  "status": "passed"
});
});