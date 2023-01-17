    let myVar;

    function myFunction() {
    myVar = setTimeout(showContent, 2500);
    myVar = setTimeout(showPage, 3000);
    myVar = setTimeout(display, 3550);
}
    function showContent(){
    document.getElementById("myDiv").style.display = "block";
}
    function showPage() {
    document.getElementById("loader-wrapper").style.opacity = "0";
    document.getElementById("myDiv").style.opacity = "1";
}
    function display(){
    document.getElementById("loader-wrapper").style.display = "none";

}