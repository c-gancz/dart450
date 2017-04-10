
$(document).ready(function(){

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
              // than 400.
              else {
                diagnosisConceal();
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

  // Function that makes the diagnosis-reveal div appear.
  $('#diagnosis-reveal').show();

  // Having the pie chart only appear when the diagnosis center is enlarged.
  pieChart();

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

  // When minimized, certain elements become concealed.
  $('#diagnosis-reveal').hide();
};

// FUNCTION 3: Animated pie chart with percentage of diagnosis.
// Code used and modified from Martin Itterheim http://codepen.io/itter/pen/JoVvyp
function pieChart(){

// Code simply copy and pasted, didn't change anything here.
/////////////// YOU CAN MINIMIZE THE CODE STARTING HERE. THERE WILL BE SIGN TO STOP. ///////////////////////
  var pieChart = function (targetId, data, options) {
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
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = this.options.font || '12px sans-serif';
            ctx.fillText(
              this.data[i].data,
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
  pieChart('chart', [
        { id: 'a', data: 30, color: 'blue' },
        { id: 'b', data: 12, color: '#ff9800' },
        { id: 'c', data: 4, color: '#0a0' },
    ],{
  	time: 1.2,
    radius: 70,
    width: 50,
    font: '13px sans-serif',
    labelMargin: 12,
    offset: { x: 0, y: 0 },
    click: function (target) { console.log(target); }
  });

  console.log('######');
},2000);

};
