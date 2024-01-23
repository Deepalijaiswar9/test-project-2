
google.charts.load('current', { 'packages': ['geochart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State Code', 'State'],
        ['IN-JK', 'Jammu and Kashmir'],
        ['IN-AP', 'Andhra Pradesh'],
        ['IN-AR', 'Arunachal Pradesh'],
        ['IN-AS', 'Assam'],
        ['IN-BR', 'Bihar'],
        ['IN-CT', 'Chhattisgarh'],
        ['IN-GA', 'Goa'],
        ['IN-GJ', 'Gujarat'],
        ['IN-HR', 'Haryana'],
        ['IN-HP', 'Himachal Pradesh'],
        ['IN-JH', 'Jharkhand'],
        ['IN-KA', 'Karnataka'],
        ['IN-KL', 'Kerala'],
        ['IN-MP', 'Madhya Pradesh'],
        ['IN-MH', 'Maharashtra'],
        ['IN-MN', 'Manipur'],
        ['IN-ML', 'Meghalaya'],
        ['IN-MZ', 'Mizoram'],
        ['IN-NL', 'Nagaland'],
        ['IN-OR', 'Odisha'],
        ['IN-PB', 'Punjab'],
        ['IN-RJ', 'Rajasthan'],
        ['IN-SK', 'Sikkim'],
        ['IN-TN', 'Tamil Nadu'],
        ['IN-TS', 'Telangana'],
        ['IN-TR', 'Tripura'],
        ['IN-UK', 'Uttarakhand'],
        ['IN-UP', 'Uttar Pradesh'],
        ['IN-WB', 'West Bengal']

    ]);

    var opts = {
        region: 'IN',
        domain: 'IN',
        displayMode: 'regions',
        resolution: 'provinces',
        defaultColor: '#F8A18E',
    };

    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization')
    );
    geochart.draw(data, opts);
}