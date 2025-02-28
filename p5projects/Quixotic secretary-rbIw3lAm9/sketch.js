function setup() {
  
  // The image we want to classify
  var image = document.getElementById('image');
  
  
  // The result tag in the HTML
  var result = document.getElementById('result');
  
  // The probability tag in the HTML
  var probability = document.getElementById('probability');

  // Initialize the Image Classifier method with MobileNet
  var classifier = ml5.imageClassifier('MobileNet', function(){});

  // Make a prediction with the selected image
  // This will return an array with a default of 10 options with their probabilities
  classifier.predict(image, function(err, results) {
    result.innerText = '"a ' + results[0].className + '"';
    probability.innerText = results[0].probability.toFixed(4);
    image.hidden = true;
  });
}