function mytriangle(){
  var side1=parseInt(document.getElementById("S1").value);
  var side2=parseInt(document.getElementById("S2").value);
  var side3=parseInt(document.getElementById("S3").value);

  if ([side1+side2]>[side3]&&[side1+side3]>[side2]&&[side2+side3]>[side1])
  {
  if([side1===side2]&&[side2===side3]&&[side1===side3]){
    alert("equilateral triangle");
    }
    else if (side1 === side2 || side1===side3 ||side2===side3){
    alert("isoceles triangle");
    }
    else if (side1+side2 > side3&& side1+ side3>side2 && side2+side3>[side1]){
    alert("Scalene triangle");
    }
    }
    else{
    alert("Not a triangle")

    }
  }

