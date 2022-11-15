import "src\style\style.css";
import "src\images\dead.png";
import "src\images\sehat.png";
import "src\images\virus.png";


import "src\component\custom element\nav-bar.js";
import getdataindo from "src\component\API\indonesia\getdataindo.js"
import getupdate from "src\component\API\date\getdate.js";
import getglobalpositive from "src\component\API\global\getglobalpositive.js"
import getglobaldeaths from "src\component\API\global\getglobaldeaths.js"
import getglobalhealed from "src\component\API\global\getglobalhealed.js"
getupdate();
getglobalpositive();
getglobalhealed();
getglobaldeaths();
getdataindo();