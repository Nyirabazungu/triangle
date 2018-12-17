function mytriangle(){
  var side1=parseInt(document.getElementById("S1").value);
  var side2=parseInt(document.getElementById("S2").value);
  var side3=parseInt(document.getElementById("S3").value);
var triangle=180;
  if ([side1 === side2 && side1 === side3]){
    console.log(alert("equilateral triangle"));
    }
    else if ([side1 === side2 || side1<side3 || side2<ide3]){
    console.log(alert("isoceles triangle"));
    }
    else if ([(side1+side2) <=side3 || (side1 + side3)<= side2 || (side2+side3)!== side1]) {
    console.log(alert("Scalene triangle"));
    }
    console.log(alert("Not a triangle"));{

    }
  }

