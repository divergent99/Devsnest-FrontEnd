function myFunction1() {
    document.getElementById("demo1").innerHTML = "BABUSHKA !";
  }

  function myFunction2() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }


  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function allowDrop(event) {
    event.preventDefault();
    document.getElementById("demo2").innerHTML = "The p element is OVER the droptarget.";
    event.target.style.border = "4px dotted green";
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo2").innerHTML = "The p element was dropped.";
  }

  function myFunction3() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo3").innerHTML = "You wrote: " + x;
  }