const mobilenet = require('@tensorflow-models/mobilenet'),
      tf = require("@tensorflow/tfjs-node"),
      Canvas = require("canvas"),
      sizeOf = require('image-size');

async function imgToCanvas(img) {
    return new Promise(async (resolve, reject) => {
        if (!img) return reject("An image was not provided!");
            let sizes = sizeOf(img);

            return await Canvas.loadImage(img)
                .then((LoadedImage) => {
                    let canvas = new Canvas.createCanvas(sizes.width, sizes.height);
                    let ctx = canvas.getContext('2d');
                    ctx.drawImage(LoadedImage, 0, 0, sizes.width, sizes.height);

                    return resolve(canvas);
                })
        });
};

async function classifyImage(img) {
    return new Promise(async (resolve, reject) => {
        if (!img) return reject("Item provided was not provided!");

        const model = await mobilenet.load();
        const predictions = await model.classify(img);

        return resolve(predictions);
    })
}

module.exports =  {
    classifyImage,
    imgToCanvas
}