function validateform() {
    var name = document.myform.name.value;
    if (name.length >= 5) {
        alert('You should increament size of given name!')
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (document.myform.name.value.match(specialChars)) {
        alert("Only characters A-Z, a-z and 0-9 are allowed!");
    }
    var regex = new RegExp("[a-zA-Z],[0-9]");
    if (name.match(regex))
        return true;
    else
        alert("NO charater start with -,_,+")

    var prgname = document.myform.prgname.value;
    if (prgname.length >= 5) {
        alert('You should increament size of given name!')
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (document.myform.prgname.value.match(specialChars)) {
        alert("Only numbers 0-9 are allowed!");
    }
    var regex = new RegExp("[0-9]");
    if (prgname.match(regex))
        return true;
    else
        alert("NO charater start with -,_,+")

    var bktname = document.myform.bktname.value;
    if (bktname.length >= 5) {
        alert('You should increament size of given name!')
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (document.myform.bktname.value.match(specialChars)) {
        alert("Only characters A-Z, a-z and 0-9 are allowed!");
    }
    var regex = new RegExp("[a-zA-Z],[0-9]");
    if (bktname.match(regex))
        return true;
    else
        alert("NO charater start with -,_,+");
    var fname = document.myform.fname.value;
    if (fname.length >= 5) {
        alert('You should increament size of given name!')
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (document.myform.fname.value.match(specialChars)) {
        alert("Only characters A-Z, a-z and 0-9 are allowed!");
    }
    var regex = new RegExp("[a-zA-Z],[0-9]");
    if (fname.match(regex))
        return true;
    else
        alert("NO charater start with -,_,+")

    var cred = document.myform.cred.value;
    if (cred.length >= 5) {
        alert('You should increament size of given name!')
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (document.myform.cred.value.match(specialChars)) {
        alert("Only characters A-Z, a-z and 0-9 are allowed!");
    }
    var regex = new RegExp("[a-zA-Z],[0-9]");
    if (cred.match(regex))
        return true;
    else
        alert("NO charater start with -,_,+")
    var times = document.myform.times.value;
    if (times.length >= 5) {
        alert('You should increament size of given name!')
    }
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (document.myform.times.value.match(specialChars)) {
        alert("Only numbers 0-9 are allowed!");
    }
    var regex = new RegExp("[0-9]");
    if (times.match(regex))
        return true;
    else
        alert("NO charater start with -,_,+");

}












































