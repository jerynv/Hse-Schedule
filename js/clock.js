var currentcolor = setColor("start");
var colorPicker = new iro.ColorPicker("#picker", {
    width: 150,
    color: currentcolor,
});
$(function () {
    for (var i = 1; i <= 12; i++) {
        $(".colorcircle" + i).css(
            "background",
            $(".colorcircle" + i).prop("title")
        );
    }
});
colorPicker.on("color:change", function (color) {
    // log the current color as a HEX string
    setColor(color.hexString);
});
startloader();
var time;
const t = setInterval(test, 180);
var period = 0;
var Passing;
var day = 1;
var progresstheme = progressSet("get");
var lunch = lunchfunc("var");
var background = backgroundw("get");
var lunchtime = false;
var start;
var current;
var end;
var endofday = false;
var passingnum = 0;
var mintest = 25;
var hourtest = 11;
var periodsub;
var days = {
    Aug:
    {
        9: 1,
        10: 2,
        11: 1,
        12: 2,
        13: 0,
        14: 0,
        15: 1,
        16: 2,
        17: 1,
        18: 2,
        19: 1,
        20: 0,
        21: 0,
        22: 2,
        23: 1,
        24: 2,
        25: 1,
        26: 2,
        27: 0,
        28: 0,
        29: 1,
        30: 2,
        31: 1,
    },
    Sep:
    {
        1: 2,
        2: 1,
        3: 0,
        4: 0,
        5: 3,
        6: 2,
        7: 1,
        8: 2,
        9: 1,
        10: 0,
        11: 0,
        12: 2,
        13: 1,
        14: 2,
        15: 1,
        16: 2,
        17: 0,
        18: 0,
        19: 1,
        20: 2,
        21: 1,
        22: 2,
        23: 1,
        24: 0,
        25: 0,
        26: 2,
        27: 1,
        28: 2,
        29: 1,
        30: 4,
    },
    Oct:
    {
        1: 2,
        2: 1,
        3: 2,
        4: 1,
        5: 2,
        6: 1,
        7: 2,
        8: 1,
        9: 2,
        10: 1,
        11: 2,
        12: 5,
        13: 1,
        14: 2,
        15: 0,
        16: 0,
        17: 1,
        18: 2,
        19: 1,
        20: 2,
        21: 1,
        22: 2,
        23: 5,
        24: 1,
        25: 2,
        26: 1,
        27: 2,
        28: 1,
        29: 0,
        30: 0,
    },
    Nov:{
        1:1,
        2:2,
        3:1,
        4:2,
        5:0,
        6:0,
        7:1,
        8:2,
        9:1,
        10:2,
        11:1,
        12:0,
        13:0,
        14:2,
        15:1,
        16:2,
        17:1,
        18:2,
        19:0,   
        20:0,
        21:1,
        22:2,
        23:1,
        24:2,
        25:1,
        26:0,
        27:0,
        28:2,
        29:1,
        30:2,
    },
    Dec:
    {
        1: 1,
        2: 2,
        3: 0,
        4: 0,
        5: 1,
        6: 2,
        7: 1,
        8: 2,
        9: 1,
        10: 0,
        11: 0,
        12: 2,
        13: 1,
        14: 2,
        15: 1,
        16: 2,
        17: 5,
        18: 5,
        19: 5,
        20: 5,
        21: 5,
        22: 5,
        23: 5,
        24: 5,
        25: 5,
        26: 5,
        27: 5,
        28: 5,
        29: 5,
        30: 5,
        31: 5,
    },
    Jan:
    {
        1: 5,
        2: 5,
        3: 5,
        4: 5,
        5: 1,
        6: 2,
        7: 0,
        8: 0,
        9: 1,
        10: 2,
        11: 1,
        12: 2,
        13: 1,
        14: 0,
        15: 0,
        16: 3,
        17: 2,
        18: 1,
        19: 2,
        20: 1,
        21: 0,
        22: 0,
        23: 2,
        24: 1,
        25: 2,
        26: 1,
        27: 2,
        28: 0,
        29: 0,
        30: 1,
        31: 2,
    },
    Feb:
    {
        1: 1,
        2: 2,
        3: 1,
        4: 0,
        5: 0,
        6: 2,
        7: 1,
        8: 2,
        9: 1,
        10: 2,
        11: 0,
        12: 0,
        13: 1,
        14: 2,
        15: 1,
        16: 2,
        17: 1,

    }
}

var colorview = 0;
day = getdaynum();

function startloader() {
    setInterval(() => {
        $(".loader").css("opacity", 0);
        setInterval(() => {
            if ($(".loader").hasClass("loadview")) {
                $(".loader").removeClass("loadview");
            }
        }, 400);
    }, Math.floor(Math.random() * 3000));
}

getdaynum();
function getdaynum() {
    var month = moment().format("MMM");
    var dayl = moment().format("D");
    var daynum = days[month][dayl];

    return daynum;
}

var testtime = 30520;

function test() {
    var secs = testtime;
    calc(secs);
    testtime = testtime + 23;
}

function clock() {
    time = moment().format("hhmmssa");
    var secs = secondAfy(
        time.substring(0, 2),
        time.substring(2, 4),
        time.substring(4, 6),
        time.substring(6, 8)
    );

    calc(secs);
}

function calc(sec) {
    if (day == 1 || day == 2) {
        //period code
        getperiod(sec);
        if (endofday == true) {
            updatescreen(period, clockAfy(time), lunch, "School's Out");
        } else {
            if (Passing == true) {
                if (passingnum == 0) {
                    start = secondAfy(8, 0, 0);
                    end = secondAfy(8, 30, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "School starts in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == 1) {
                    start = secondAfy(9, 57, 0);
                    end = secondAfy(10, 5, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == 2) {
                    start = secondAfy(11, 28, 0);
                    end = secondAfy(11, 36, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == "a") {
                    start = secondAfy(11, 58, 0);
                    end = secondAfy(12, 6, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == "b") {
                    start = secondAfy(12, 28, 0);
                    end = secondAfy(12, 33, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == "c") {
                    start = secondAfy(12, 58, 0);
                    end = secondAfy(13, 3, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == 3) {
                    start = secondAfy(13, 29, 0);
                    end = secondAfy(13, 37, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                } else if (passingnum == "path2") {
                    start = secondAfy(13, 22, 0);
                    end = secondAfy(13, 29, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Passing period ends in"
                    );
                    if (current <= 0) {
                        Passing = false;
                    }
                }
            }
            if (lunchtime == true) {
                if (lunch == "a") {
                    if (
                        secondAfy(11, 58, 0) >= sec &&
                        sec >= secondAfy(11, 28, 0)
                    ) {
                        start = secondAfy(11, 28, 0);
                        end = secondAfy(11, 58, 0);
                        current = sub(sec, end);
                        updatescreen(
                            period,
                            timeAfy(current),
                            lunch,
                            "Lunch ends in"
                        );
                    } else lunchtime = false;
                }
                if (lunch == "b") {
                    if (
                        secondAfy(11, 58, 0) <= sec &&
                        sec <= secondAfy(12, 28, 0)
                    ) {
                        start = secondAfy(11, 58, 0);
                        end = secondAfy(12, 28, 0);
                        current = sub(sec, end);
                        updatescreen(
                            period,
                            timeAfy(current),
                            lunch,
                            "Lunch ends in"
                        );
                    } else lunchtime = false;
                }
                if (lunch == "c") {
                    if (
                        secondAfy(12, 28, 0) <= sec &&
                        sec <= secondAfy(12, 58, 0)
                    ) {
                        start = secondAfy(12, 28, 0);
                        end = secondAfy(12, 58, 0);
                        current = sub(sec, end);
                        updatescreen(
                            period,
                            timeAfy(current),
                            lunch,
                            "Lunch ends in"
                        );
                    } else lunchtime = false;
                }
                if (lunch == "d") {
                    if (
                        secondAfy(12, 59, 0) <= sec &&
                        sec <= secondAfy(13, 29, 0)
                    ) {
                        start = secondAfy(12, 59, 0);
                        end = secondAfy(13, 29, 0);
                        current = sub(sec, end);
                        updatescreen(
                            period,
                            timeAfy(current),
                            lunch,
                            "Lunch ends in"
                        );
                    } else lunchtime = false;
                }
            }
            if (Passing != true) {
                if (period == "p1") {
                    start = secondAfy(13, 37, 0);
                    end = secondAfy(14, 22, 0);
                    current = sub(sec, end);
                    updatescreen(
                        4,
                        timeAfy(current),
                        lunch,
                        "Pathways A ends in"
                    );
                }
                if (period == "p2") {
                    start = secondAfy(14, 29, 0);
                    end = secondAfy(15, 0, 0);
                    current = sub(sec, end);
                    updatescreen(
                        4,
                        timeAfy(current),
                        lunch,
                        "Pathways B ends in"
                    );
                }
                if (period == 1) {
                    start = secondAfy(8, 30, 0);
                    end = secondAfy(9, 57, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "Period ends in"
                    );
                }
                if (period == 2) {
                    if (lunch == "a") {
                        start = secondAfy(10, 5, 0);
                        end = secondAfy(11, 28, 0);
                        current = sub(sec, end);
                        updatescreen(
                            period,
                            timeAfy(current),
                            lunch,
                            "lunch starts in"
                        );
                    } else {
                        start = secondAfy(10, 5, 0);
                        end = secondAfy(11, 28, 0);
                        current = sub(sec, end);
                        updatescreen(
                            period,
                            timeAfy(current),
                            lunch,
                            "Period ends in"
                        );
                    }
                }
                if (lunchtime != true) {
                    if (lunch == "a") {
                        if (period == 3) {
                            start = secondAfy(12, 6, 0);
                            end = secondAfy(13, 29, 0);
                            current = sub(sec, end);
                            updatescreen(
                                period,
                                timeAfy(current),
                                lunch,
                                "Period ends in"
                            );
                        }
                    } else if (lunch == "b") {
                        if (period == 3) {
                            if (periodsub == "bbl") {
                                start = secondAfy(11, 36, 0);
                                end = secondAfy(11, 58, 0);
                                current = sub(sec, end);
                                updatescreen(
                                    period,
                                    timeAfy(current),
                                    lunch,
                                    "Lunch starts in"
                                );
                            } else if (periodsub == "abl") {
                                start = secondAfy(12, 33, 0);
                                end = secondAfy(13, 29, 0);
                                current = sub(sec, end);
                                updatescreen(
                                    period,
                                    timeAfy(current),
                                    lunch,
                                    "Period ends in"
                                );
                            }
                        }
                    } else if (lunch == "c" || lunch == "d") {
                        if (period == 3) {
                            if (periodsub == "bcl") {
                                start = secondAfy(11, 36, 0);
                                end = secondAfy(12, 28, 0);
                                current = sub(sec, end);
                                updatescreen(
                                    period,
                                    timeAfy(current),
                                    lunch,
                                    "Lunch starts in"
                                );
                            } else if (periodsub == "acl") {
                                start = secondAfy(13, 3, 0);
                                end = secondAfy(13, 29, 0);
                                current = sub(sec, end);
                                updatescreen(
                                    period,
                                    timeAfy(current),
                                    lunch,
                                    "Period ends in"
                                );
                            } else if (periodsub == "bdl") {
                                start = secondAfy(11, 36, 0);
                                end = secondAfy(12, 59, 0);
                                current = sub(sec, end);
                                updatescreen(
                                    period,
                                    timeAfy(current),
                                    lunch,
                                    "lunch starts in"
                                );
                            }
                        }
                    }
                }
                if (period == 4) {
                    start = secondAfy(13, 37, 0);
                    end = secondAfy(15, 0, 0);
                    current = sub(sec, end);
                    updatescreen(
                        period,
                        timeAfy(current),
                        lunch,
                        "School ends in"
                    );
                }
            }
        }
    } else if (day == 0) {
        updatescreen(period, clockAfy(time), lunch, "Weekend Baby!");
    }
    if (day == 4) {
        updatescreen(period, clockAfy(time), lunch, "Eleaning Day!");
    } else if (day == 5) {
        updatescreen(period, clockAfy(time), lunch, "Holiday Baby!");
    } else if (day != 1 && day != 2) {
        updatescreen(period, clockAfy(time), lunch, "School is not in session");
    }
}

function sub(end, start) {
    return parseInt(start, 10) - parseInt(end, 10);
}

function getperiod(sec) {
    if (secondAfy(8, 0, 0) <= sec) {
        Passing = true;
        passingnum = 0;
        endofday = false;
    }
    if (secondAfy(8, 30, 0) <= sec) {
        Passing = false;
        period = 1;
    }

    if (secondAfy(9, 57, 0) <= sec) {
        Passing = true;
        passingnum = 1;
        period = 2;
    }
    if (secondAfy(10, 5, 0) <= sec) {
        period = 2;
        Passing = false;
    }
    if (lunch == "a") {
        if (secondAfy(11, 28, 0) <= sec) {
            lunchtime = true;
            period = 3;
        }
        if (secondAfy(11, 58, 0) <= sec) {
            passingnum = "a";
            Passing = true;
            period = 3;
        }
        if (secondAfy(12, 6, 0) <= sec) {
            period = 3;
        }
    }
    if (lunch == "b") {
        if (secondAfy(11, 28, 0) <= sec) {
            lunchtime = false;
            Passing = true;
            passingnum = 2;
            period = 3;
        }
        if (secondAfy(11, 36, 0) <= sec) {
            Passing = false;
            period = 3;
            periodsub = "bbl";
        }
        if (secondAfy(11, 58, 0) <= sec) {
            lunchtime = true;
            period = 3;
        }
        if (secondAfy(12, 28, 0) <= sec) {
            lunchtime = false;
            Passing = true;
            passingnum = "b";
            period = 3;
            periodsub = "abl";
        }
        if (secondAfy(12, 33, 0) <= sec) {
            period = 3;
            periodsub = "abl";
        }
    }
    if (lunch == "c") {
        if (secondAfy(11, 28, 0) <= sec) {
            lunchtime = false;
            Passing = true;
            passingnum = 2;
            period = 3;
        }
        if (secondAfy(11, 36, 0) <= sec) {
            Passing = false;
            period = 3;
            periodsub = "bcl";
        }
        if (secondAfy(12, 28, 0) <= sec) {
            lunchtime = true;
            period = 3;
        }
        if (secondAfy(12, 58, 0) <= sec) {
            lunchtime = false;
            Passing = true;
            passingnum = "c";
            period = 3;
            periodsub = "acl";
        }
        if (secondAfy(13, 3, 0) <= sec) {
            period = 3;
            periodsub = "acl";
        }
    }
    if (lunch == "d") {
        if (secondAfy(11, 28, 0) <= sec) {
            lunchtime = false;
            Passing = true;
            passingnum = 2;
            period = 3;
        }
        if (secondAfy(11, 36, 0) <= sec) {
            Passing = false;
            period = 3;
            periodsub = "bdl";
        }
        if (secondAfy(12, 59, 0) <= sec) {
            lunchtime = true;
        }
    }
    if (secondAfy(13, 29, 0) <= sec) {
        lunchtime = false;
        passingnum = 3;
        Passing = true;
        period = 4;
    }
    if (day == 2) {
        if (secondAfy(13, 37, 0) <= sec) {
            Passing = false;
            period = "p1";
        }
        if (secondAfy(14, 22, 0) <= sec) {
            Passing = true;
            passingnum = "path2";
            period = "p2";
        }
        if (secondAfy(14, 30, 0) <= sec) {
            Passing = false;
            period = "p2";
        }
    } else {
        if (secondAfy(13, 37, 0) <= sec) {
            Passing = false;
            period = 4;
        }
    }

    if (
        secondAfy(15, 0, 0) < sec ||
        (sec > secondAfy(0, 0, 0) && sec < secondAfy(8, 0, 0))
    ) {
        endofday = true;
        period = 0;
    }
}

function updatescreen(period, time, l, msg) {
    //period func
    if (endofday == false) {
        var percent =
            Math.abs(((current - (end - start)) / (end - start)) * 100) + "%";
    } else {
        var percent = "100%";
    }
    if (day == 0 || endofday == true) {
        $("#clock").css("display", "none");
        $("#time-till-end").css("color", "var(--firstcolor)");
        $("#time-till-end").css("font-size", "50px");
        if (!$(".time-till-end").hasClass("end")) {
            $("#time-till-end").addClass("end");
        }
        if (!$("#info").hasClass("end")) {
            $("#info").addClass("end");
        }
    } else {
        $("#time-till-end").css("color", $("html").css("--basetext"));
        $("#clock").css("display", "flex");
        $("#time-till-end").css("font-size", "40px");
        $("#time-till-end").removeClass("end");
        $("#info").removeClass("end");
    }

    if (day == 1) {
        if (!$("#day1").hasClass("active")) {
            $("#day1").toggleClass("active");
        }
        if (period == 1) {
            if (!$(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
        if (period == 2) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if (!$(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
        if (period == 3) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if (!$(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
        if (period == 4) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if (!$(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
    }
    if (day == 2) {
        if (!$("#day2").hasClass("active")) {
            $("#day2").toggleClass("active");
        }
        if (period == 1) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if (!$(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
        if (period == 2) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if (!$(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
        if (period == 3) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if (!$(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if ($(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
        if (period == 4) {
            if ($(".period1").hasClass("activecircle")) {
                $(".period1").toggleClass("activecircle");
            }
            if ($(".period2").hasClass("activecircle")) {
                $(".period2").toggleClass("activecircle");
            }
            if ($(".period3").hasClass("activecircle")) {
                $(".period3").toggleClass("activecircle");
            }
            if ($(".period4").hasClass("activecircle")) {
                $(".period4").toggleClass("activecircle");
            }
            if ($(".period5").hasClass("activecircle")) {
                $(".period5").toggleClass("activecircle");
            }
            if ($(".period6").hasClass("activecircle")) {
                $(".period6").toggleClass("activecircle");
            }
            if ($(".period7").hasClass("activecircle")) {
                $(".period7").toggleClass("activecircle");
            }
            if (!$(".period8").hasClass("activecircle")) {
                $(".period8").toggleClass("activecircle");
            }
        }
    }
    $(".clockprogress").css("width", percent);
    $("#info").text(msg);
    $("#time-till-end").text(time);
}

function timeAfy(seconds) {
    var convert = function (x) {
        return x < 10 ? "0" + x : x;
    };
    return (
        convert(parseInt(seconds / (60 * 60))) +
        ":" +
        convert(parseInt((seconds / 60) % 60)) +
        ":" +
        convert(seconds % 60)
    );
}

function secondAfy(hour, min, sec, a) {
    var x;
    if (a == "am") {
        if (hour == 12) {
            x = 0;
        } else {
            x = hour * 60 * 60;
        }
    } else if (a == "pm") {
        if (hour == 12) {
            x = 12 * 60 * 60;
        } else {
            x = +(parseInt(hour, 10) + +12) * 60 * 60;
        }
    } else {
        x = hour * 60 * 60;
    }
    var y = min * 60;
    var z = sec;
    var f = parseInt(x, 10) + parseInt(y, 10) + parseInt(z, 10);
    return f;
}

function lunchfunc(input) {
    if (input == "var") {
        var local = localStorage.getItem("setup");
        if (local == "2") {
            var l = localStorage.getItem("lunch");
            $(".lunch" + l).addClass("activecircle");
            $(".lunch" + l).toggleClass("hoveraffect");
            return localStorage.getItem("lunch");
        } else {
            localStorage.setItem("setup", 2);
            localStorage.setItem("lunch", "a");
            $(".luncha").addClass("activecircle");
            $(".luncha").toggleClass("hoveraffect");
            return "a";
        }
    } else {
        if (input != lunch) {
            $(".lunch" + lunch).toggleClass("activecircle");
            $(".lunch" + lunch).toggleClass("hoveraffect");
            $(".lunch" + input).toggleClass("activecircle");
            $(".lunch" + input).toggleClass("hoveraffect");
            lunch = input;
            localStorage.setItem("lunch", lunch);
        }
    }
}

function clockAfy(timein) {
    return (
        timein.substring(0, 2) +
        ":" +
        timein.substring(2, 4) +
        ":" +
        timein.substring(4, 6)
    );
}

function opencolor(o) {
    if (o == "click" && colorview == 1) {
        $(".colorbtn").removeClass("active");
        $(".pickerholder").removeClass("active");
        colorview = 0;
    }
    if (colorview == 0) {
        $(".colorbtn").addClass("active");
        $(".pickerholder").addClass("active");
        colorview = 1;
    } else {
        $(".colorbtn").removeClass("active");
        $(".pickerholder").removeClass("active");
        colorview = 0;
    }
}

function setColor(hex) {
    if (hex == "start") {
        return getColor();
    } else {
        $("html").css("--firstcolor", hex);
        localStorage.setItem("color", hex);
        return hex;
    }
}

function getColor() {
    var local = localStorage.getItem("setupcolor");
    if (local == 2) {
        $("html").css("--firstcolor", localStorage.getItem("color"));
        return localStorage.getItem("color");
    } else {
        localStorage.setItem("setupcolor", 2);
        localStorage.setItem("color", "#DC6985");
        return "#DC6985";
    }
}

function progressSet(input) {
    if (input != progresstheme && input != "get") {
        if (!$(progresstheme).hasClass("no")) {
            $(progresstheme).removeClass("activeselector");
            $(progresstheme).addClass("no");
            $(input).removeClass("no");
            $(input).addClass("activeselector");
            progresstheme = input;
            localStorage.setItem("currenttheme", input);
        }
        if (input == ".selector1") {
            $(".item").addClass("boxshadow");
            $(".periodcircles").addClass("boxshadow");
            $(".pickerholder").addClass("boxshadow");
            $(".colorbtn").addClass("boxshadow");
            $(".clockbar").addClass("boxshadow");
            $(".clockprogress").addClass("boxshadow");
        }
        if (input == ".selector3") {
            $(".item").removeClass("boxshadow");
            $(".periodcircles").removeClass("boxshadow");
            $(".pickerholder").removeClass("boxshadow");
            $(".colorbtn").removeClass("boxshadow");
            $(".clockbar").removeClass("boxshadow");
            $(".clockprogress").removeClass("boxshadow");
        }
    }
    if (input == "get") {
        var l = localStorage.getItem("verifytheme");
        if (l == "true") {
            setprogress(localStorage.getItem("currenttheme"));
            return localStorage.getItem("currenttheme");
        } else {
            localStorage.setItem("verifytheme", true);
            localStorage.setItem("currenttheme", ".selector3");
            setprogress(".selector3");
            return localStorage.getItem("currenttheme");
        }
    }
}

function setprogress(prog) {
    $(prog).addClass("activeselector");
    $(prog).removeClass("no");
    if (prog == ".selector1") {
        $(".item").addClass("boxshadow");
        $(".periodcircles").addClass("boxshadow");
        $(".pickerholder").addClass("boxshadow");
        $(".colorbtn").addClass("boxshadow");
        $(".clockbar").addClass("boxshadow");
        $(".clockprogress").addClass("boxshadow");
    }
}

function backgroundw(type) {
    if (type == "get") {
        var local = localStorage.getItem("background");
        if (local) {
            if (local == "base") {
                $("body").css("background", "var(--backgroundcolor)");
                $(".base").addClass("activeback");
            } else if (local == "mountain-ice") {
                $("body").css({
                    background: "url(/img/mountain.jpg)",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                });
                $(".mountain-ice").addClass("activeback");
            } else if (local == "mountain-app") {
                $("body").css({
                    background: "url(/img/mountain2.jpg)",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                });
                $(".mountain-app").addClass("activeback");
            } else if (local == "forest") {
                $("body").css({
                    background: "url(/img/forest.jpg)",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                });
                $(".forest").addClass("activeback");
            } else {
                localStorage.removeItem("background");
                localStorage.removeItem("setupbackground");
                localStorage.setItem("setupbackground", "base");
                $("body").css("background", "var(--backgroundcolor)");
                $(".base").addClass("activeback");
            }
        } else {
            localStorage.setItem("background", "base");
        }
    } else {
        localStorage.setItem("background", type);
        if (type == "base") {
            $("body").css("background", "var(--backgroundcolor)");
            if ($(".mountain-ice").hasClass("activeback")) {
                $(".mountain-ice").removeClass("activeback");
            }
            if ($(".mountain-app").hasClass("activeback")) {
                $(".mountain-app").removeClass("activeback");
            }
            if ($(".forest").hasClass("activeback")) {
                $(".forest").removeClass("activeback");
            }
            $(".base").addClass("activeback");
        } else if (type == "mountain-ice") {
            $("body").css({
                background: "url(/img/mountain.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center",
            });
            if ($(".base").hasClass("activeback")) {
                $(".base").removeClass("activeback");
            }
            if ($(".mountain-app").hasClass("activeback")) {
                $(".mountain-app").removeClass("activeback");
            }
            if ($(".forest").hasClass("activeback")) {
                $(".forest").removeClass("activeback");
            }
            $(".mountain-ice").addClass("activeback");
        } else if (type == "mountain-app") {
            $("body").css({
                background: "url(/img/mountain2.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center",
            });
            if ($(".base").hasClass("activeback")) {
                $(".base").removeClass("activeback");
            }
            if ($(".mountain-ice").hasClass("activeback")) {
                $(".mountain-ice").removeClass("activeback");
            }
            if ($(".forest").hasClass("activeback")) {
                $(".forest").removeClass("activeback");
            }
            $(".mountain-app").addClass("activeback");
        } else if (type == "forest") {
            $("body").css({
                background: "url(/img/forest.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center",
            });
            if ($(".base").hasClass("activeback")) {
                $(".base").removeClass("activeback");
            }
            if ($(".mountain-ice").hasClass("activeback")) {
                $(".mountain-ice").removeClass("activeback");
            }
            if ($(".mountain-app").hasClass("activeback")) {
                $(".mountain-app").removeClass("activeback");
            }
            $(".forest").addClass("activeback");
        }
    }
}
