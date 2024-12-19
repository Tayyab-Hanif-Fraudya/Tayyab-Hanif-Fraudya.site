$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "complaints.php",
        dataType: "json",
        success: function(data) {
            $("#complaint-count").text(data.count);
        }
    });
});