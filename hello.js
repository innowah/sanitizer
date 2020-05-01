


function chart(){




Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      var ctx = chart.chart.ctx;

      // Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
      // Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      // Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];

      // Break words up into multiple lines if necessary
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }

      // Move the center up depending on line height and number of lines
      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      //Draw text in center
      ctx.fillText(line, centerX, centerY);
    }
  }
});








var ctxs = document.getElementById("myChart").getContext('2d');



var tk1 = document.getElementById("myChart1").getContext('2d');
var tk2 = document.getElementById("myChart2").getContext('2d');
var tk3 = document.getElementById("myChart3").getContext('2d');
var tk4 = document.getElementById("myChart4").getContext('2d');
var tk5 = document.getElementById("myChart5").getContext('2d');


var central = centraltank;


var myChart = new Chart(ctxs, {
type: 'doughnut',
data: {
labels: ["Available", "Empty"],
datasets: [{
  data: [central, 100-central],
  backgroundColor: [
    "#3498db",
    "#2ecc71"
  ],
  hoverBackgroundColor: [
    "#3498db",
    "#2ecc71"
  ]
}]
},
options: {

legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },

elements: {
  center: {
    text: central+'% Available',
    color: "#FFF", // Default is #000000
    fontStyle: 'Arial', // Default is Arial
    sidePadding: 20, // Default is 20 (as a percentage)
    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
    lineHeight: 25 // Default is 25 (in px), used for when text wraps
  }
}
}
});


var myChart = new Chart(tk1,  {
type: 'doughnut',
data: {
labels: ["Available", "Empty"],
datasets: [{
  data: [tank1, 100-tank1],
  backgroundColor: [
    "#3498db",
    "#2ecc71"
  ],
  hoverBackgroundColor: [
    "#3498db",
    "#2ecc71"
  ]
}]
},
options: {

legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },

elements: {
  center: {
    text: tank1+'% Available',
    color: "#FFF", // Default is #000000
    fontStyle: 'Arial', // Default is Arial
    sidePadding: 20, // Default is 20 (as a percentage)
    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
    lineHeight: 25 // Default is 25 (in px), used for when text wraps
  }
}
}
});


var myChart = new Chart(tk2,  {
type: 'doughnut',
data: {
labels: ["Available", "Empty"],
datasets: [{
  data: [tank2, 100-tank2],
  backgroundColor: [
    "#3498db",
    "#2ecc71"
  ],
  hoverBackgroundColor: [
    "#3498db",
    "#2ecc71"
  ]
}]
},
options: {

legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },

elements: {
  center: {
    text: tank2+'% Available',
    color: "#FFF", // Default is #000000
    fontStyle: 'Arial', // Default is Arial
    sidePadding: 20, // Default is 20 (as a percentage)
    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
    lineHeight: 25 // Default is 25 (in px), used for when text wraps
  }
}
}
});




var myChart = new Chart(tk3,  {
type: 'doughnut',
data: {
labels: ["Available", "Empty"],
datasets: [{
  data: [tank3, 100-tank3],
  backgroundColor: [
    "#3498db",
    "#2ecc71"
  ],
  hoverBackgroundColor: [
    "#3498db",
    "#2ecc71"
  ]
}]
},
options: {

legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },

elements: {
  center: {
    text: tank3+'% Available',
    color: "#FFF", // Default is #000000
    fontStyle: 'Arial', // Default is Arial
    sidePadding: 20, // Default is 20 (as a percentage)
    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
    lineHeight: 25 // Default is 25 (in px), used for when text wraps
  }
}
}
});


var myChart = new Chart(tk4, {
type: 'doughnut',
data: {
labels: ["Available", "Empty"],
datasets: [{
  data: [tank4, 100-tank4],
  backgroundColor: [
    "#3498db",
    "#2ecc71"
  ],
  hoverBackgroundColor: [
    "#3498db",
    "#2ecc71"
  ]
}]
},
options: {

legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },

elements: {
  center: {
    text: tank4+'% Available',
    color: "#FFF", // Default is #000000
    fontStyle: 'Arial', // Default is Arial
    sidePadding: 20, // Default is 20 (as a percentage)
    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
    lineHeight: 25 // Default is 25 (in px), used for when text wraps
  }
}
}
});


var myChart = new Chart(tk5, {
type: 'doughnut',
data: {
labels: ["Available", "Empty"],
datasets: [{
  data: [tank5, 100-tank5],
  backgroundColor: [
    "#3498db",
    "#2ecc71"
  ],
  hoverBackgroundColor: [
    "#3498db",
    "#2ecc71"
  ]
}]
},
options: {

legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },
  
elements: {
  center: {
    text: tank5+'% Available',
    color: "#FFF", // Default is #000000
    fontStyle: 'Arial', // Default is Arial
    sidePadding: 20, // Default is 20 (as a percentage)
    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
    lineHeight: 25 // Default is 25 (in px), used for when text wraps
  }
}
}
});







 
 }


