function validateForm(){
    var nam = document.getElementById("name1").value;
    // var gen = document.getElementsByName("gender1").value;
    var x = document.getElementById("age").value;   
    var y = document.getElementById("visits").value;
    var z = document.getElementById("dept").value;
    var d1 = document.getElementById("appdate").value;
    var d = new Date(d1);
    var month = d.getMonth();
    var year = d.getFullYear();
    x = parseInt(x);
    y = parseInt(y);
    // alert(d+month+year);
    var error1 = 0;

    try {
        if(nam == "") throw "Please enter your Name";
        if(isNaN(x) || x < 0) throw "Age is not entered properly";
        // if(gen != "m" && gen != "f") throw "Please select your Gender";
        if(isNaN(y) || y < 0) throw "No. of Visits is not entered properly";
        if(month == 4 && year == 2022) throw "All doctors are on Vacation from 1st to 31st May";
        if(z != "Pa" && z!= "Op" && z!= "Ca" && z != "De") throw "Please choose a Department!";
    }
    catch(err) {
        document.getElementById("err1").innerHTML = "ERROR! "+err;
        error1 = 1;
    }
    if(error1 == 0)
        document.getElementById("err1").innerHTML = "Appointment Booked Successfully";
}