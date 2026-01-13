var myIndex = 0;
carousel(); 


function carousel() { //Define function
    var i; //Define variable
    var x = document.getElementsByClassName("mySlides"); //Fetching mySlides class and adding to x
    for (i=0;i<x.length;i++) { //Iterate up to x.length
        x[i].style.display = "none"; //Change display
    }
    myIndex++; //Increment myIndex by 1
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block"; //Change image being displayed
    setTimeout(carousel, 5000); //Wait timer till next image displayed
}
