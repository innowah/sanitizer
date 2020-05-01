const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
exports.checkflag = functions.database.ref('https://tank-55920.firebaseio.com') //give your database path instead here
.onUpdate((snapshot, context) => {
const temptoken = 'AIzaSyDBnsdMF6JpwNEpZDLz9lPHJCmY6D3GRvk';  //replace it with your app token
// const flag = snapshot.before.val();   TO GET THE OLD VALUE BEFORE UPDATE
const flag = snapshot.after.val();
let statusMessage = `Message from the clouds as ${flag}`
var message = {
notification: {
title: 'cfunction',
body: statusMessage
},
token: temptoken
};
admin.messaging().send(message).then((response) => {
console.log("Message sent successfully:", response);
return response;
})
.catch((error) => {
console.log("Error sending message: ", error);
});
});









function chart(){

let myChart = document.getElementById('myChart').getContext('2d');


Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type:'bar', // idhula u can use - bar, horizontalBar, pie, line, doughnut, radar, polarArea 
  data:{
    labels:['TANK 1', 'TANK 2', 'TANK 3', 'TANK 4', 'TANK 5'],
    datasets:[{
      label:'Level',
      data:[
        20,
        81,
        53,
        6,
        43
      ],
      //backgroundColor:'green',
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'TANK LEVELS',
      fontSize:25
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
scales: {
	yAxes: [{
	  scaleLabel: {
		display: true,
		labelString: 'LEVEL  (in %)',
		fontSize:25
	  }
	}],
	xAxes: [{
	  scaleLabel: {
		display: true,
		labelString: 'TANKS',fontSize:25
	  }
	}]
		},
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});
 

 }