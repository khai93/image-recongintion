const { classifyImage, imgToCanvas } = require("../src/index");
const { loadImage } = require("canvas");
const fs = require("fs");

imgToCanvas('tests/images/airplane.jpg')
    .then((canvas) => {
        classifyImage(canvas)
            .then((res) => {
                let sorted = res.sort((a, b) => b.probability - a.probability);
                console.log(sorted);
            })
            .catch((err) => {
                return console.error(err);
            });
})
.catch((err) => {
    return console.error(err);
});