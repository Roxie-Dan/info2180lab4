var loser = false;  // This variable tells whenever the plyer crosses a boundary
window.onload = function() {
    $("start").onclick = beginClick;
    $("end").onmouseover = finish;
    var bounds = $$("div#maze div.boundary");
    var e = 0
    while (e< bounds.length;) {
        bounds[e].onmouseover = overBoundary;
        e++;
    }
};

function overBoundary() {
    loser = true;
    var bounds = $$("div#maze div.boundary");
    var e=0;
    while (e< bounds.length; ) {
        boundas[e.addClassName("youlose");
        e++;
    }
}

function beginClick() {
    loser = false;
    var bounds = $$("div#maze div.boundary");
    var e =0;
    for (e < bounds.length;) {
        bounds[e].removeClassName("youlose");
        e++;
    }
}

function finish() {
    if(!loser) {
        $("status").textContent = " You're a winner :-)";
        
}
 
 


