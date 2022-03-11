function jump() {
    var button = document.getElementById('jump');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    
    // toggles left display to on or off
    if (left.style.display === "none") {
        left.style.display = "block";
        button.innerHTML = "JUMP >";
    } else {
        left.style.display = "none";
        button.innerHTML = "< JUMP";
    }
    
    // toggles right display to mirror the left display
    if (left.style.display === "none") {
        right.style.display = "block";
    } else {
        right.style.display = "none";
    }
}

function changeText(text) {
    // reassigns text according to user preference
    document.getElementById("left").innerHTML = text;
    document.getElementById("right").innerHTML = text;
}

function toggleAll(source) {
    var checkboxes = document.getElementsByName('fav');
    for(var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
  }
