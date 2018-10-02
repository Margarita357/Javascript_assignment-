// from data.js
var tableData = data;

// YOUR CODE HERE!

d3.select("#filter-btn").on("click", function() {
	d3.event.preventDefault();
	var dateValue = d3.select('#datetime').property('value');
	var filteredDate = tableData.filter(i => i.datetime == dateValue);
	var tbody = d3.select('tbody');
	tbody.html('');

	filteredDate.forEach(i => {
		var row = tbody.append('tr');
		row.append('td').text(i['datetime']);
		row.append('td').text(i['city']);
        row.append('td').text(i['state']);
        row.append('td').text(i['country']);
		row.append('td').text(i['shape']);
        row.append('td').text(i['durationMinutes']);
        row.append('td').text(i['comments']);
	});
});

// d3.select("#filter-btn").on("click", function() {
// 	d3.event.preventDefault();
// 	var cityValue = d3.select('#city').property('value');
// 	var filteredCity = tableData.filter(c => c.city == cityValue);
// 	var tbody = d3.select('tbody');
// 	tbody.html('');

// 	filteredCity.forEach(c => {
// 		var row = tbody.append('tr');
// 		row.append('td').text(c['datetime']);
// 		row.append('td').text(c['city']);
//      row.append('td').text(c['state']);
//      row.append('td').text(c['country']);
// 		row.append('td').text(c['shape']);
//      row.append('td').text(c['durationMinutes']);
//      row.append('td').text(c['comments']);
// 	});
// });

