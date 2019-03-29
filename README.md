# image-recongintion

### Dependencies Used

* node-canvas
* @tensorflow-models/mobilenet
* @tensorflow/tfjs-node
* image-size

### Installation

```git clone https://github.com/khai93/image-recongintion.git```


### Examples

**This is in the folder tests**

```javascript
const { classifyImage, imgToCanvas } = require("../src/index");

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
```

**returns**
```json
[ { className: 'airliner', probability: 0.9484817981719971 },
  { className: 'wing', probability: 0.033559128642082214 },
  { className: 'warplane, military plane',
    probability: 0.011974642984569073 } ]
```

### Documentation

#### imgToCanvas(string imgSrc): returns a Promise with a Canvas Object

#### classifyImage(canvas): returns a Promise with an Object predictions





