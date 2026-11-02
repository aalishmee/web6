$(document).ready(function() {
    console.log("jQuery is ready!");

    $("h1").text("Welcome to My Portfolio");
    $("#greeting").css("color", "#245b7a");
    $(".intro").text("Hello! Welcome to my page!");

    $("#light").click(function() {
        $("body").removeClass("dark");
    });

    $("#dark").click(function() {
        $("body").addClass("dark");
    });

    $("#hide").click(function() {
        $("#status, #facts").hide();
    });

    $("#show").click(function() {
        $("#status, #facts").show();
    });

    $("#toggle").click(function() {
        $("#status, #facts").toggle();
    });

    $("#fadeIn").click(function() {
        $(".gallery").fadeIn();
    });

    $("#fadeOut").click(function() {
        $(".gallery").fadeOut();
    });

    $("#fadeToggle").click(function() {
        $(".gallery").fadeToggle();
    });

    $(".heading").click(function() {
        $(this).next(".panel").slideToggle();
    });

    $("#add").click(function() {
        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skills").append("<li>" + $("<div>").text(skill).html() + "</li>");
            $("#newSkill").val("");
        }
    });

    $("#prepend").click(function() {
        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skills").append($("<li>").text(skill));
            $("#newSkill").val("");
        }
    });

    $("#remove").click(function() {
        $("#skills li:last").remove();
    });

    $("#changeLink").click(function() {
        $("#social").attr("href", "https://www.linkedin.com");
        $("#social").text("My LinkedIn");
    });

    $("#name").on("input", function() {
        $("#liveName").text("Name: " + $(this).val());
    });

    $("#email").on("input", function() {
        $("#liveEmail").text("Email: " + $(this).val());
    });

    let animated = false;

    $("#animate").click(function() {
        if (animated === false) {
            $("#htmlBar").animate({width: "90%"});
            $("#cssBar").animate({width: "70%"});
            $("#jsBar").animate({width: "50%"});
            animated = true;
        } else {
            $(".progress").animate({width: "0%"});
            animated = false;
        }
    });
});