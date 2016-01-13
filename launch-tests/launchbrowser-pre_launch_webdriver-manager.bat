
REM ------------------------------------------------------------
REM HOW TO TEST ANGULAR APP WITH PROTRACTOR



REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM URLs

REM https://github.com/angular/protractor
REM http://angular.github.io/protractor/#/
REM http://angular.github.io/protractor/#/tutorial
REM http://angular.github.io/protractor/#/toc
REM http://angular.github.io/protractor/#/locators

REM ------------------------------------------------------------

REM http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/

REM Can protractor test a login that is not angular based #51
REM https://github.com/angular/protractor/issues/51

REM ------------------------------------------------------------








REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM ------------------------------------------------------------

REM PREREQUISITE node with npm
REM Version should be greater than v0.10.0.
REM node --version

REM ------------------------------------------------------------







REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM protractor alreay installed from script pre_install_protractor.sh

REM ANYWHERE

REM npm install -g protractor



REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM ------------------------------------------------------------
REM Update and launch webdriver

REM ANYWHERE

REM OJO: update must preceed start (otherwise start does not find the driver)

REM In windows the update and start commands can not be in same .bat because start command never gets executed

REM webdriver-manager update

webdriver-manager start



REM ------------------------------------------------------------
REM Visit
REM  http://localhost:4444/wd/hub

REM Shall display a page
REM    Sessions
REM        button Create Session  |  button  Refresh Sessions
REM    Text No Sessions


REM ------------------------------------------------------------




