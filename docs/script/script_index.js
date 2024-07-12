$(document).ready(function(){
    $(".team").on("click", function(e) {
        var img = document.getElementById("elo-rating");
        var team = e.target.value;
        img.src = `fig/elo-ratings-bar-chart-${team}.png`;
        if (team === "all"){
            window.scrollTo(0,0);
        }else{
            var scrollToY = 2200 - parseInt(document.getElementById(team).innerText);
            window.scrollTo(0,scrollToY);
        }
    });

    $(".to-the-top").on("click", function(e) {
        window.scrollTo(0,0);
    });

});
