window.onload = function(){
    var form = document.getElementById("e&m-RSVPForm");

    form.onsubmit = subform;

    function subform() {
        var thank = document.getElementById("ThankYou-message");
        var clickto = document.getElementById("clicktosubmit");
        thank.style.display = "block";
        clickto.style.display = "none";
        document.getElementById("submitbtn").disabled = true;

    }
}
