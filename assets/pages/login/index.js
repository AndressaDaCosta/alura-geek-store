import { footer, nav } from '../../js/navHeader/index.js'


window.onload = function () {
 
  const paths = {
    logo: "../../img/logo.svg",
    lupa: "../../img/lupa.svg",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "",
    inputShow: false
  } 

  nav(paths);
  footer(paths);  

}