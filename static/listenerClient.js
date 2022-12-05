document.addEventListener('DOMContentLoaded', () => {
    var socket = new WebSocket('ws://localhost:8000/ws/Flight_visualization/');

    //apexchart stuff
    var data_time = [];
    var data_Q6_1 = [];
    var data_Q6_2 = [];
    var data_Q6_3 = [];
    var data_RawAX =[];
    var data_RawAY =[];
    var data_RawAZ =[];
    var data_RawGX =[];
    var data_RawGY =[];
    var data_RawGZ =[];
    var data_RawMX =[];
    var data_RawMY =[];
    var data_RawMZ =[];
    var data_gps_Lat = [];
    var data_gps_Long = [];
    var data_gps_Alt = [];
    var data_gps_GroundSpeed = [];
    var data_gps_Heading = [];
    var data_degC = [];
    var data_pressure_hPa = [];
    var data_pressure_Pa = [];
    var data_altitude_m =[];

    var options_Q = {
          series: [{
            name: "Q1",
            data: data_Q6_1
        },{
              name: "Q2",
              data: data_Q6_2
          },{
              name: "Q3",
              data: data_Q6_3
          }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
    var options_RawA = {
          series: [{
            name: "AX",
            data: data_RawAX
        },{
              name: "AY",
              data: data_RawAY
          },{
              name: "AZ",
              data: data_RawAZ
          }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
    var options_RawG = {
          series: [{
            name: "GX",
            data: data_RawGX
        },{
              name: "GY",
              data: data_RawGY
          },{
              name: "GZ",
              data: data_RawGZ
          }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
    var options_RawM = {
          series: [{
            name: "MX",
            data: data_RawMX
        },{
              name: "MY",
              data: data_RawMY
          },{
              name: "MZ",
              data: data_RawMZ
          }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
    var options_gps_loc = {
          series: [{
            name: "Latitude",
            data: data_gps_Lat
        },{
              name: "Longitude",
              data: data_gps_Long
          },{
              name: "Altitude",
              data: data_gps_Alt
          }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };var options_gps_ex = {
          series: [{
            name: "GroundSpeed",
            data: data_gps_GroundSpeed
        },{
              name: "Heading",
              data: data_gps_Heading
          }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
        var options_degC = {
          series: [{
            name: "Temperature",
            data: data_degC
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
        var options_pre_hpa = {
          series: [{
            name: "pressure_hPa",
            data: data_pressure_hPa
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
        var options_pre_pa = {
          series: [{
            name: "pressure_Pa",
            data: data_pressure_Pa
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };
        var options_alt = {
          series: [{
            name: "Altitude",
            data: data_altitude_m
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperature over flight',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data_time,
        }
        };



        var chart_Q = new ApexCharts(document.querySelector("#chart_Q"), options_Q);
        var chart_RawA= new ApexCharts(document.querySelector("#chart_RawA"), options_RawA);
        var chart_RawG = new ApexCharts(document.querySelector("#chart_RawG"), options_RawG);
        var chart_RawM = new ApexCharts(document.querySelector("#chart_RawM"), options_RawM);
        var chart_gps_loc = new ApexCharts(document.querySelector("#chart_gps_loc"), options_gps_loc);
        var chart_gps_ex = new ApexCharts(document.querySelector("#chart_gps_ex"), options_gps_ex);
        var chart_temp = new ApexCharts(document.querySelector("#chart_temp"), options_degC);
        var chart_pre_hpa = new ApexCharts(document.querySelector("#chart_pre_hpa"), options_pre_hpa);
        var chart_pre_pa = new ApexCharts(document.querySelector("#chart_pre_pa"), options_pre_pa);
        var chart_alt = new ApexCharts(document.querySelector("#chart_alt"), options_alt);

        chart_Q.render();
        chart_RawA.render();
        chart_RawG.render();
        chart_RawM.render();
        chart_gps_loc.render();
        chart_gps_ex.render();
        chart_temp.render();
        chart_pre_hpa.render();
        chart_pre_pa.render();
        chart_alt.render();

    //end of apexchart stuff










    socket.onmessage = function (e) {
        var djangoData = JSON.parse(e.data);
        console.log(djangoData);
        var data_out = djangoData.value//JSON.stringify(djangoData.value)


        //get all new data
        data_time.push(data_out.rtcTime)
        data_Q6_1.push(data_out.Q6_1)
        data_Q6_2.push(data_out.Q6_2)
        data_Q6_3.push(data_out.Q6_3)
        data_RawAX.push(data_out.RawAX)
        data_RawAY.push(data_out.RawAY)
        data_RawAZ.push(data_out.RawAZ)
        data_RawGX.push(data_out.RawGX)
        data_RawGY.push(data_out.RawGY)
        data_RawGZ.push(data_out.RawGZ)
        data_RawMX.push(data_out.RawMX)
        data_RawMY.push(data_out.RawMY)
        data_RawMZ.push(data_out.RawMZ)
        data_gps_Lat.push(data_out.gps_Lat)
        data_gps_Long.push(data_out.gps_Long)
        data_gps_Alt.push(data_out.gps_Alt)
        data_gps_GroundSpeed.push(data_out.gps_GroundSpeed)
        data_gps_Heading.push(data_out.gps_Heading)
        data_pressure_hPa.push(data_out.pressure_hPa)
        data_pressure_Pa.push(data_out.pressure_Pa)
        data_altitude_m.push(data_out.altitude_m)
        data_degC.push(data_out.degC)


        //update all data in charts
        chart_Q.updateSeries([{
            name: "Q1",
            data: data_Q6_1
        },{
              name: "Q2",
              data: data_Q6_2
          },{
              name: "Q3",
              data: data_Q6_3
          }]);
        chart_RawA.updateSeries([{
            name: "GX",
            data: data_RawGX
        },{
              name: "GY",
              data: data_RawGY
          },{
              name: "GZ",
              data: data_RawGZ
          }]);
        chart_RawG.updateSeries([{
            name: "GX",
            data: data_RawGX
        },{
              name: "GY",
              data: data_RawGY
          },{
              name: "GZ",
              data: data_RawGZ
          }]);
        chart_RawM.updateSeries([{
            name: "MX",
            data: data_RawMX
        },{
              name: "MY",
              data: data_RawMY
          },{
              name: "MZ",
              data: data_RawMZ
          }]);
        chart_gps_loc.updateSeries([{
            name: "Latitude",
            data: data_gps_Lat
        },{
              name: "Longitude",
              data: data_gps_Long
          },{
              name: "Altitude",
              data: data_gps_Alt
          }]);
        chart_gps_ex.updateSeries([{
            name: "GroundSpeed",
            data: data_gps_GroundSpeed
        },{
              name: "Heading",
              data: data_gps_Heading
          }]);
        chart_temp.updateSeries([{
            name: "Temperature",
            data: data_degC
        }]);
        chart_pre_hpa.updateSeries([{
            name: "pressure_hPa",
            data: data_pressure_hPa
        }]);
        chart_pre_pa.updateSeries([{
            name: "pressure_Pa",
            data: data_pressure_Pa
        }]);
        chart_alt.updateSeries([{
            name: "Altitude",
            data: data_altitude_m
        }]);

























        //update all xaxis on charts
        chart_Q.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_RawA.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_RawG.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_RawM.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_gps_loc.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_gps_ex.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_pre_hpa.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_pre_pa.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_alt.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });
        chart_temp.updateOptions({
           xaxis: {
          categories: data_time,
        }
        });


        //update text
        document.querySelector('#date').innerText = `date: ${data_out.rtcDate}`;
        document.querySelector('#time').innerText = `time: ${data_out.rtcTime}`;
        document.querySelector('#Q6_1').innerText = `Q6_1: ${data_out.Q6_1}`;
        document.querySelector('#Q6_2').innerText = `Q6_2: ${data_out.Q6_2}`;
        document.querySelector('#Q6_3').innerText = `Q6_3: ${data_out.Q6_3}`;
        document.querySelector('#RawAX').innerText = `RawAX: ${data_out.RawAX}`;
        document.querySelector('#RawAY').innerText = `RawAY: ${data_out.RawAY}`;
        document.querySelector('#RawAZ').innerText = `RawAZ: ${data_out.RawAZ}`;
        document.querySelector('#RawGX').innerText = `RawGX: ${data_out.RawGX}`;
        document.querySelector('#RawGY').innerText = `RawGY: ${data_out.RawGY}`;
        document.querySelector('#RawGZ').innerText = `RawGZ: ${data_out.RawGZ}`;
        document.querySelector('#RawMX').innerText = `RawMX: ${data_out.RawMX}`;
        document.querySelector('#RawMY').innerText = `RawMY: ${data_out.RawMY}`;
        document.querySelector('#RawMZ').innerText = `RawMZ: ${data_out.RawMZ}`;
        document.querySelector('#gps_Lat').innerText = `gps_Lat: ${data_out.gps_Lat}`;
        document.querySelector('#gps_Long').innerText = `gps_Long: ${data_out.gps_Long}`;
        document.querySelector('#gps_Alt').innerText = `gps_Alt: ${data_out.gps_Alt}`;
        document.querySelector('#gps_GroundSpeed').innerText = `gps_GroundSpeed: ${data_out.gps_GroundSpeed}`;
        document.querySelector('#gps_Heading').innerText = `gps_Heading: ${data_out.gps_Heading}`;
        document.querySelector('#degC').innerText = `degC: ${data_out.degC}`;
        document.querySelector('#pressure_hPa').innerText = `pressure_hPa: ${data_out.pressure_hPa}`;
        document.querySelector('#pressure_Pa').innerText = `pressure_Pa: ${data_out.pressure_Pa}`;
        document.querySelector('#altitude_m').innerText = `altitude_m: ${data_out.altitude_m}`;
        document.querySelector('#output_Hz').innerText = `output_Hz: ${data_out.output_Hz}`;
        document.querySelector('#count').innerText = `count: ${data_out.count}`;
    };

    socket.onerror = function (error) {
        alert(`[error]`);
    };
});