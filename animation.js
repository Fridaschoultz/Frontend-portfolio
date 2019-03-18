/* Om man vill toggle
  $("#section_4_inner").slideToggle("slow"); */



/* All sections inner parts will close when site is visitet first time, it will take them 1 milisecond to close when the site is loaded */
$(document).ready(function () {
    $("#section_0_inner").slideUp(1);
    $("#section_1_inner").slideUp(1);
    $("#section_2_inner").slideUp(1);
    $("#section_3_inner").slideUp(1);
    $("#section_4_inner").slideUp(1);
});


/*---------------- Section 0 ---------------- */
/* Link will slide down section_2_inner in 2000 miliseconds */
$(document).ready(function () {
    $("#link_section_0").click(function () {
        $("#section_0_inner").slideDown(2000);
    });
});
$(document).ready(function () {
    $("#section_0").click(function () {
        $("#section_0_inner").slideDown("slow");
    });
});

/*---------------- Section 1 ---------------- */
$(document).ready(function () {
    $("#link_section_1").click(function () {
        $("#section_1_inner").slideDown(2000);
    });
});
/* If section_2 div is clicked on the section_2_inner will toggle (close and open) */
$(document).ready(function () {
    $("#section_1").click(function () {
        $("#section_1_inner").slideDown("slow");
    });
});


/*---------------- Section 2 ---------------- */
/* Link will slide down section_2_inner in 2000 miliseconds */
$(document).ready(function () {
    $("#link_section_2").click(function () {
        $("#section_2_inner").slideDown(2000);
    });
});
/* If section_2 div is clicked on the section_2_inner will toggle (close and open) */
$(document).ready(function () {
    $("#section_2").click(function () {
        $("#section_2_inner").slideDown("slow");
    });
});


/*---------------- Section 3 ----------------*/
let i = 0; /* Global variable "i" */
$(document).ready(function () {
    $("#link_section_3").click(function () {
        $("#section_3_inner").slideDown("slow", function () {
            i++;
            if (i == 1)
                progressBar();
        });
    });
});
$(document).ready(function () {
    $("#section_3").click(function () {
        $("#section_3_inner").slideDown("slow", function () {
            i++;
            if (i == 1)
                progressBar();
        });
    });
});


/*---------------- Section 4 ----------------*/
$(document).ready(function () {
    $("#link_section_4").click(function () {
        $("#section_4_inner").slideDown(2000);
    });
});
$(document).ready(function () {
    $("#section_4").click(function () {
        $("#section_4_inner").slideDown("slow");
    });
});