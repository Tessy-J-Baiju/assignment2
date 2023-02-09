function validatename() {
    console.log("hello");
    let x = document.getElementById("exampleInputFullname").value;
    let em = document.getElementById("exampleInputEmail").value;
    let ad = document.getElementById("exampleInputDate").value;
    let np = document.getElementById("exampleInputPerson").value;
    let regexpem = /^[a-zA-Z]{5,13}$/;
    let regexpema = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedOne = true;
            break;
        }
    }

    var radioButton = document.querySelectorAll('input[type="radio"]');
    var radioOne = false;

    for (var j = 0; j < radioButton.length; j++) {
        if (radioButton[j].checked) {
            radioOne = true;
            break;
        }
    }

    if (x == "") {
        document.getElementById("n").innerHTML = "Name field is required";
        return false;
    } else if (!regexpem.test(x)) {
        document.getElementById("n").innerHTML = "Name Invalid";
        return false;
    } else if (em == "") {
        document.getElementById("mail").innerHTML = "Email field is required";
        return false;
    } else if (!regexpema.text(em)) {
        document.getElementById("mail").innerHTML = "Invalid Email";
        return false;
    } else if (ad == "") {
        document.getElementById("arrdate").innerHTML =
            "Select the arrival date";
        return false;
    } else if (np == "") {
        document.getElementById("nop").innerHTML =
            "Number of passengers should be required";
        return false;
    } else if (Number(exampleInputPerson)) {
        document.getElementById("nop").innerHTML = "Email field is wrong";
        return false;
    } else if (!checkedOne) {
        document.getElementById("avail1").innerHTML = "error";
        return false;
    } else if (!radioOne) {
        document.getElementById("radiocheck").innerHTML = "error";
        return false;
    }
}
