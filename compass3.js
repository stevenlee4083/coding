/*Downloaded from https://www.codeseek.co/zgm/svg-compass-trying-to-fix-transform-origin-on-firefox-QjdBja */


$("#outer-circle, #inner-circle-outer, #inner-circle-inner")
    .velocity({
        scale: [1, 0]
    }, {

        loop: false,
        duration: 500
    });

$("#circle-lines")
    .velocity({
        transformOrigin: ["50%", "50%"],
        scale: [1, 0]
    }, {

        loop: false,
        duration: 500
    })
    .velocity({
        rotateZ: "900deg"
    }, {
        delay: 1000,
        loop: false,
        duration: 2500
    })

$("#ns-line-inner, #ew-line-inner")
    .velocity({
        scale: [1, 0]
    }, {
        delay: 500,
        loop: false,
        duration: 1000
    });

$("#lg-arrow-n, #lg-arrow-e,#lg-arrow-s,#lg-arrow-w")
    .velocity({
        scale: [1, 0]
    }, {
        loop: false,
        duration: 1000
    });
$("#compass-hands")
    .velocity({
        rotateZ: "900deg"
    }, {
        delay: 1500,
        loop: false,
        duration: 2500
    });
$("#ns-line-upper, #ns-line-lower,#ew-line-left,#ew-line-right")
    .velocity({
        transformOrigin: ["50%", "50%"],
        scale: [1, 0]
    }, {
        delay: 1500,
        loop: false,
        duration: 2500
    });
$("#outer-arrow-n,#outer-arrow-e,#outer-arrow-s,#outer-arrow-w")
    .velocity({
        scale: [1, 0]
    }, {
        delay: 3500,
        loop: false,
        duration: 500
    });
$("#wide-arrow-upper,#wide-arrow-lower")
    .velocity({
        scale: [1, 0]
    }, {
        delay: 1000,
        loop: false,
        duration: 1500
    });
$("#compass")
    .velocity({
        translateY: "10px"
    }, {
        loop: true,
        duration: 1500
    });