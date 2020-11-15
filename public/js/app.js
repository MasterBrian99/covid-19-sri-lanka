$(document).ready(function() {
  var pixelToMove = 20;
  $(".home").mousemove(function(e) {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newValueX = (e.pageX / width) * pixelToMove;
    var newValueY = (e.pageY / height) * pixelToMove;
    $(this).css('background-position', newValueX + '%' + ' ' + newValueY + '%');
  });
});



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transperant',
            data: [0, 10, 5, 2, 20, 30, 1000]
        }]
    },

    // Configuration options go here
    options: {
		title: {
            display: true,
			text: 'Daily PCR Testing Data',
			fontSize:30,
			fontColor:' rgb(35,42,206)'

		},
		label:{
			backgroundColor: 'transperant',
		}
	}
});


            //   <!-- <tr>
			//   <th scope="row">1</th>
			//   <td>Mark</td>
			//   <td>Otto</td>
			//   <td>@mdo</td>
			// </tr> -->