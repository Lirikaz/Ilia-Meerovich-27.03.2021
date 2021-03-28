/// <reference types="cypress"/>
import MainPage1Obj from "./mainPage/MainPage1Obj";
import MainPage2Obj from "./mainPage/MainPage2Obj";
import MainPage3Obj from "./mainPage/MainPage3Obj";
import MainPage4Obj from "./mainPage/MainPage4Obj";
import MainPage5Obj from "./mainPage/MainPage5Obj";

class Utils {
    constructor() {
        this.mainPage1 = MainPage1Obj
        this.mainPage2 = MainPage2Obj
        this.mainPage3 = MainPage3Obj
        this.mainPage4 = MainPage4Obj
        this.mainPage5 = MainPage5Obj
    }
}

export default new Utils();