window.onload = function(){
    var form = document.getElementById("e&m-RSVPForm");
    var unavailable = document.getElementById("unavailable");
    var available = document.querySelector(".available");
    var event = document.querySelector(".custom-select");
    form.onsubmit = subform;
    unavailable.onclick = mini;
    available.onclick = expand;

    function subform() {
        var thank = document.getElementById("ThankYou-message");
        var clickto = document.getElementById("clicktosubmit");
        thank.style.display = "block";
        clickto.style.display = "none";
        document.getElementById("submitbtn").disabled = true;
    }

    function mini(){
        document.querySelector(".toremove").style.display = "none";
        event.value = "Walimah & Filipino Community";
    }

    function expand(){
        document.querySelector(".toremove").style.display = "block";
    }
}
