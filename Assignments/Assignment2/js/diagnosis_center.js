
$(document).ready(function(){

  // Get external JSON file with data to plug into the probable diagnoses.
  $.getJSON('../data/data.json', getDiagnosis);

  // Only when the enlarge button is on will this function happen.
  $('#enlarge-on').click(function(){

    // The function that allows elements to appear/disappear in the diagnosis center
    // while resizing it.
    $('#diagnosiscenter').resizable({

        // Function from jQuery UI allowing me to get the changing width and height values
        // of the object that is being resized.
        resize: function(event, ui) {
              var widthDiagnosis = ui.size.width;
              var heightDiagnosis = ui.size.height;

              // If statement allowing diagnosisReveal(); to only appear when the width
              // is larger than 500px and height longer than 600px.
              if (widthDiagnosis > 500 && heightDiagnosis > 600) {
                diagnosisReveal();
              }

              // Else statement making diagnosisConceal(); happen when width is smaller
              // than 500px and height smaller than 600px.
              else {
                diagnosisConceal();
              };

              if (widthDiagnosis > 500 && heightDiagnosis > 1000) {
                // The user must continue to stretch the section until the drag and drop feature can be seen.
                dragDrop();
                $('#dragdrop').show();
              }

              else {
                $('#dragdrop').hide();
              }

              console.log(ui.size);
              // Telling my console to log the changing width and height values.

          } // Closing the jQuery UI resize function.
    }); // Closing the entire diagnosis center reveal/conceal function.

}); // Closing the function of the enlarge-on button.

});


/////////////////////////////// FUNCTIONS //////////////////////////////////////

// FUNCTION 1: What appears when the width of the diagnosis center reaches a certain number.
function diagnosisReveal(){

  // Make the section background-color become red.
  $('#diagnosiscenter').css({
    'background-color':'red',
  });

  // Change certain css elements on reveal by adding a class through jQuery.
  $('#diagnosiscenter p').addClass("p-diagnosisreveal");

  // Make image become larger when the diagnosis center is expanded.
  $('#diagnosiscenter img').addClass("svg");

  // Function that makes the diagnosis-reveal div appear.
  $('#diagnosis-reveal').show();

  // Having the pie chart only appear when the diagnosis center is enlarged.
  pieChart();

  $('#diagnosiscenter p').hide();
};

// FUNCTION 2: The elements that are concealed when the width of the diagnosis center
// minimizes to a certain size.
function diagnosisConceal(){

  // Make the diagnosis center background-color return to its original colour.
  $('#diagnosiscenter').css({
    'background-color':'#1ca4d6'
  });

  // When minimized, the class is removed.
  $('p').removeClass("p-diagnosisreveal");

  // Make image return to its original size.
  $('#diagnosiscenter img').removeClass("svg");

  // When minimized, certain elements become concealed.
  $('#diagnosis-reveal').hide();

  $('#diagnosiscenter p').show();
};

// FUNCTION 3: Animated pie chart with percentage of diagnosis.
// Code used and modified from Martin Itterheim http://codepen.io/itter/pen/JoVvyp
function pieChart(){

// Code simply copy and pasted, didn't change anything here.
/////////////// YOU CAN MINIMIZE THE CODE STARTING HERE. THERE WILL BE SIGN TO STOP. ///////////////////////
  var pieChart = function (targetId, data, options) {
    console.log(data);
    // Polyfill
    (function() {
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

  	this.options = options || {};

    // canvas
    this.canvas = document.getElementById(targetId);
    var ctx = this.canvas.getContext('2d');

    this.center = { x: canvas.width / 2, y: canvas.height / 2 };
    this.offset = this.options.offset || { x: 0, y: 0 };

    var time = this.options.time || 1;
    var radius = this.options.radius || 100;
    var width = this.options.width || 50;
    var arcFix = Math.PI / 2;
    var hoverable = [];

    this.data = data;

  	// animation properties
    var start = null;
    var startDuration = null;
    var animationId = null;

    this.processData = function () {
        var total = 0;
        for (var i in this.data) {
            if (this.data[i].data == 0) continue;
            total += this.data[i].data;
        }
        for (var i in this.data) {
            if (this.data[i].data == 0) continue;
            this.data[i].angle = (2 * Math.PI) * (this.data[i].data / total);
        }
    }

    this.getMousePos = function (canvas, evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    this.render = function (part) {
        part = typeof part == 'undefined' ? 1 : part;

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.lineWidth = width;

        var angle = 0;
        for (var i in this.data) {
            if (this.data[i].data == 0) continue;
            ctx.beginPath();
            ctx.strokeStyle = data[i].color;
            ctx.arc(
              this.center.x + this.offset.x,
              this.center.y + this.offset.y,
              radius,
              angle * part - arcFix,
              (angle + this.data[i].angle) * part - arcFix + 0.01, false
            );
            ctx.stroke();

            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = this.options.font || '12px sans-serif';
            ctx.fillText(

              // Add text beside the randomly generated data number
              this.data[i].data + ' %',

              Math.sin(-(angle + this.data[i].angle/2) * part + Math.PI) * (radius + width / 2 + (this.options.labelMargin || 10)) + this.center.x + this.offset.x,
              Math.cos(-(angle + this.data[i].angle/2) * part + Math.PI) * (radius + width / 2 + (this.options.labelMargin || 10)) + this.center.y + this.offset.y
            );
            ctx.restore();

            if (part == 1) {
                hoverable.push(angle);
            }

            angle += data[i].angle;
        }

        if (part == 1) {
          	var self = this;
            this.canvas.addEventListener('click', function (e) {
                var pos = self.getMousePos(self.canvas, e);
                var dx = pos.x - self.center.x;
                var dy = - pos.y + self.center.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                var angle = Math.PI/2 - Math.atan2(dy, dx);
                angle = angle < 0 ? 2 * Math.PI + angle : angle;

                if (distance < radius - width / 2 || distance > radius + width / 2) return;

                for (var i = 0; i < hoverable.length; i++) {
                    if (angle > hoverable[i] && ( i == hoverable.length - 1 || angle < hoverable[i + 1])) {
                        //console.log(i, data[i]);
                      	if (self.options.click) self.options.click(data[i]);
                    }
                }

            }, false);

            this.canvas.addEventListener('mousemove', function (e) {
                var pos = self.getMousePos(self.canvas, e);
                var dx = pos.x - self.center.x;
                var dy = - pos.y + self.center.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                var angle = Math.PI/2 - Math.atan2(dy, dx);
                angle = angle < 0 ? 2 * Math.PI + angle : angle;

                if (distance < radius - width / 2 || distance > radius + width / 2) {
                    self.canvas.style.cursor = '';
                    return;
                }

                for (var i = 0; i < hoverable.length; i++) {
                    if (angle > hoverable[i] && ( i == hoverable.length - 1 || angle < hoverable[i + 1])) {
                        self.canvas.style.cursor = 'pointer';
                        return;
                    }
                }
                self.canvas.style.cursor = '';
            }, false);
        }
    };

    this.step = function (duration) {
        if (duration < 1e12){
            // .. high resolution timer
        } else {
            // integer milliseconds since unix epoch
            duration = duration - start;
        }

        if (startDuration == null) startDuration = duration;

        duration = duration - startDuration;

        var part = duration / 1000 / time;

        this.render(part > 1 ? 1 : (Math.sin(part*Math.PI - Math.PI / 2) + 1) / 2);
        if (duration / 1000 < time) this.animate();
    }

    this.animate = function () {
        if (start == null) start = + Date.now();
        animationId = window.requestAnimationFrame(this.step);
    }

  	// start
  	this.processData();
		this.animate();
}

///////////////////////////////   YOU CAN STOP MINIMIZING THE CODE HERE. ////////////////////////////////////

$(document).ready(function(event) {
// This is the code I modified to fit my website. I could change various styling elements
// and the time of the pie chart animation.

  // Variables indicating that I want a random number generated for the percentage of likelihood of the illness/disease
  // while making sure they add up to 100 for the percentage

  var mathOne = Math.floor(Math.random() * 90) + 1;
  var mathTwo = Math.floor(Math.random() * (95 - mathOne)) + 1;
  var mathThree = 100 - mathTwo - mathOne;

  // Variables placing these randomly generated numbers in objects.
  var piechartOne = { id: 'a', data:mathOne, color: '#fed402'};
  var piechartTwo = { id: 'b', data:mathTwo, color: '#1ca4d6' };
  var pieChartThree = { id: 'c', data:mathThree, color: '#fff' };

  pieChart('chart', [
        // The pie chart calls these variables and random numbers are generated.
        piechartOne,
        piechartTwo,
        pieChartThree
    ],{
  	time: 1.2,
    radius: 70,
    width: 40,
    font: 'bold 24px Open Sans',
    labelMargin: 30,
    offset: { x: 0, y: 0 },
    click: function (target) { console.log(target); }
  });

  // FUNCTION 4: Adding random diagnoses to the randomly generated percentages.

    // Using the existing randomly generated percentage and adding it to the randomly generated diagnosis.
    $('#chartValue1').text(piechartOne.data + ' % ');

    $('#chartDiagnosis1').text(diagnosis1);

    $('#chartValue2').text(piechartTwo.data + ' % ');

    $('#chartDiagnosis2').text(diagnosis2);

    $('#chartValue3').text(pieChartThree.data + ' % ');

    $('#chartDiagnosis3').text(diagnosis3);

},2000); // Closing the piechart function which I modified.

}; // Closing all of the functions attributed to the piechart.

// FUNCTION 5: The function that allows me to get a random diagnosis from the data in the JSON file.
function getDiagnosis (data) {


    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    // Attributing universal variables to get random diagnoses from data file.
    diagnosis1 = getRandomElement(data.diagnosis);
    diagnosis2 = getRandomElement(data.diagnosis);
    diagnosis3 = getRandomElement(data.diagnosis);

};
