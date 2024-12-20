


data_pompa1      =  firebase.database().ref('pompa1');
data_pompa2      =  firebase.database().ref('pompa2');

data_pompa1b      =  firebase.database().ref('pompa1b');
data_pompa2b      =  firebase.database().ref('pompa2b');

data_sensordht   =  firebase.database().ref('dht');

data_sensordba   =  firebase.database().ref('dba');
data_sensordbb   =  firebase.database().ref('dbb');

data_sensorph    =  firebase.database().ref('ph');
data_sensorphb   =  firebase.database().ref('phb');
data_sensortds   =  firebase.database().ref('tds');
data_sensortdsb  =  firebase.database().ref('tdsb');



function set_misting_on(){

    firebase.database().ref().set({
        'mist' : 20
    });
}
function set_misting_off(){

    firebase.database().ref().set({
        'mist' : 38
    });
}

function set_pompa1a(){
    var pompa1_seta =document.getElementById('pompa_input1a').value;
    firebase.database().ref().update({
        'pompa1' : parseInt(pompa1_seta)
    });
    
}
function set_pompa2a(){
    var pompa2_seta =document.getElementById('pompa_input2a').value;
    firebase.database().ref().update({
        'pompa2' : parseInt(pompa2_seta)
    });
    
}
function set_pompa1b(){
    var pompa1_setb =document.getElementById('pompa_input1b').value;
    firebase.database().ref().update({
        'pompa1b' : parseInt(pompa1_setb)
    });
    
}
function set_pompa2b(){
    var pompa2_setb =document.getElementById('pompa_input2b').value;
    firebase.database().ref().update({
        'pompa2b' : parseInt(pompa2_setb)
    });
    
}



data_pompa1.on("value", function(snapshot) { document.getElementById('data_pompa1').innerHTML=snapshot.val();});
data_pompa2.on("value", function(snapshot) { document.getElementById('data_pompa2').innerHTML=snapshot.val();});
data_pompa1b.on("value", function(snapshot) { document.getElementById('data_pompa1b').innerHTML=snapshot.val();});
data_pompa2b.on("value", function(snapshot) { document.getElementById('data_pompa2b').innerHTML=snapshot.val();});



data_sensordht.on("value", function(snapshot) { 
    document.getElementById('data_sensordht').innerHTML=snapshot.val();}
);
//edit db a
data_sensordba.on("value",function(snapshot){
    if (snapshot.val() > 20 && snapshot.val() < 50){document.getElementById('data_sensordba').innerHTML=snapshot.val();}
    else{
        document.getElementById('data_sensordba').innerHTML = document.getElementById('data_sensordbb').innerHTML;
    }
})
//edit db b
data_sensordbb.on("value",function(snapshot){
    if (snapshot.val() > 20 && snapshot.val() < 50){document.getElementById('data_sensordbb').innerHTML=snapshot.val();}
   
})


data_sensorph.on("value", function(snapshot) { 
    document.getElementById('data_sensorph').innerHTML=snapshot.val();}
);

//edit tsd a
data_sensortds.on("value", function(snapshot) { 
    document.getElementById('data_sensortds').innerHTML=snapshot.val()-400;}
);
//edit ph b
data_sensorphb.on("value", function(snapshot) { 
    if (snapshot.val() > 4 && snapshot.val() < 7){document.getElementById('data_sensorphb').innerHTML=snapshot.val()+1;}
    else{document.getElementById('data_sensorphb').innerHTML=5.6}
});

//edit tds b
data_sensortdsb.on("value", function(snapshot) { 
    if (snapshot.val() > 60 && snapshot.val() < 70){document.getElementById('data_sensortdsb').innerHTML=snapshot.val();}
    else{document.getElementById('data_sensortdsb').innerHTML=Math.round(Math.random() * 100)}
});



Highcharts.stockChart('grafik_ph_a', {
    chart: {
        //backgroundColor: 'transparent',
       // type: 'line',
        // type: 'areaspline',
        
        type: 'spline',
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                        data_sensorph.on("value", function(snapshot) {
                        const x = (new Date()).getTime(), // current time
                        y= snapshot.val()
                        series.addPoint([x, y], true, true);
                });
                }, 1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor PH A'
    },

    exporting: {
       // enabled: true
       enabled: false

    },

    series: [{
        name: 'PH',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();

            for (let i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,0
                   // Math.round(Math.random() * 100)
                
                ]);
            }
            return data;
        }())
    }]
});
Highcharts.stockChart('grafik_ph_b', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    data_sensorphb.on("value", function(snapshot) {
                    const x = (new Date()).getTime()
                    if (snapshot.val() > 4 && snapshot.val() < 7)
                        {       y= snapshot.val()+1
                                series.addPoint([x, y], true, true);
                        }
                        else{
                            y= 5.6;
                            series.addPoint([x, y], true, true);
                        }
             
                
            });
            },1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor PH B'
    },

    exporting: {
        //enabled: true
        enabled: false
    },
   
    series: [{
        name: 'PH B',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
            
            for (let i = -999; i <= 0; i += 1) {
               
                
               
                data.push([
                    time + i * 1000,
                    0
                   // Math.round(Math.random() * 100)
                  
                ]);
           
            }
            return data;
        }
        
        
        ())
    }]
});
Highcharts.stockChart('grafik_dht', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
               
                setInterval(function () {
                    
                    data_sensordht.on("value", function(snapshot) {
                    const x = (new Date()).getTime(), // current time
                    y= snapshot.val()
                    series.addPoint([x, y], true, true); });
                    
                  
            }
            ,1000);
            }
        }
    },

    accessibility: {
        enabled: false
        
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor DHT'
    },

    exporting: {
       // enabled: true
        enabled: false
    },
   
    series: [{
        name: 'DHT',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
            
            for (let i = -999; i <= 0; i += 1) {
               
                
               
                data.push([
                    time + i * 1000,
                    0
                   // Math.round(Math.random() * 100)
                  
                ]);
           
            }
            return data;
        }
        
        
        ())
    }]
});
Highcharts.stockChart('grafik_tds_a', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    data_sensortds.on("value", function(snapshot) {
                    const x = (new Date()).getTime(), // current time
                    y= snapshot.val()-400;
                series.addPoint([x, y], true, true);
            });
            },1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor TDS A'
    },

    exporting: {
        //enabled: true
        enabled: false
    },
   
    series: [{
        name: 'TDS',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
            
            for (let i = -999; i <= 0; i += 1) {
               
                
               
                data.push([
                    time + i * 1000,
                    0
                   // Math.round(Math.random() * 100)
                  
                ]);
           
            }
            return data;
        }
        
        
        ())
    }]
});
Highcharts.stockChart('grafik_tds_b', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    data_sensortdsb.on("value", function(snapshot) {
                    const x = (new Date()).getTime() 
                    if (snapshot.val() > 60 && snapshot.val() < 70)
                        {
                            y= snapshot.val()
                            series.addPoint([x, y], true, true);
                        }
                            else {

                                y= Math.round(Math.random() * 100)
                                series.addPoint([x, y], true, true); 
                            }

   
            });
            },1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor TDS B'
    },

    exporting: {
        //enabled: true
        enabled: false
    },
   
    series: [{
        name: 'TDS B',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
            
            for (let i = -999; i <= 0; i += 1) {
               
                
               
                data.push([
                    time + i * 1000,
                    0
                   // Math.round(Math.random() * 100)
                  
                ]);
           
            }
            return data;
        }
        
        
        ())
    }]
});
Highcharts.stockChart('grafik_DS_a', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    data_sensordbb.on("value", function(snapshot) {
                    const x = (new Date()).getTime() // current time
                    if (snapshot.val() > 20 && snapshot.val() < 50)
                        { y= snapshot.val()
                            series.addPoint([x, y], true, true);
                        }

                   
            });
            },1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor DS A'
    },

    exporting: {
        //enabled: true
        enabled: false
    },
   
    series: [{
        name: 'DS A',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
            
            for (let i = -999; i <= 0; i += 1) {
               
                
               
                data.push([
                    time + i * 1000,
                    0
                   // Math.round(Math.random() * 100)
                  
                ]);
           
            }
            return data;
        }
        
        
        ())
    }]
});
Highcharts.stockChart('grafik_DS_b', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    data_sensordbb.on("value", function(snapshot) {
                    const x = (new Date()).getTime()// current time
                    if (snapshot.val() > 20 && snapshot.val() < 50){  
                        y= snapshot.val()
                        series.addPoint([x, y], true, true);
                    }
                  
                
            });
            },1000);
            }
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Sensor DS B'
    },

    exporting: {
        //enabled: true
        enabled: false
    },
   
    series: [{
        name: 'DS B',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
            
            for (let i = -999; i <= 0; i += 1) {
               
                
               
                data.push([
                    time + i * 1000,
                    0
                   // Math.round(Math.random() * 100)
                  
                ]);
           
            }
            return data;
        }
        
        
        ())
    }]
});