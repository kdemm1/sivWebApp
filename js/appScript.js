/*
  Author: Kyle Demmerle
  Date: 01/22/16
  Project: Semi-Autonomous IV Pump
  File: sub.js
  Description: This file will be used to establish a connection between an MQTT
  broker and the WebApp. The main way of completeing this is through using Web
  Sockets that allow us to instantly connect and start receiving data. At some 
  there will also be a need for creating a publishing application that will
  publish patient vitals to different sockets, thus allowing for multiple 
  devices to connect to the server and make use of it
*/

var line1 = new TimeSeries();
var line2 = new TimeSeries();
var line3 = new TimeSeries();

setInterval(function(){
    line1.append(new Date().getTime(), Math.random());
    line2.append(new Date().getTime(), Math.random());
    line3.append(new Date().getTime(), Math.random());
}, 1000);

function createNewDiagnostic(){
    var diag1 = new SmoothieChart({
    grid: {millisPerLine:500, verticalSections:5}}); //Heart Rate (for now)
    var diag2 = new SmoothieChart({
    grid: {millisPerLine:500, verticalSections:5}}); //Pleth (for now)
    var diag3 = new SmoothieChart({
    grid: {millisPerLine:500, verticalSections:6}}); //Blood Pressure (for now)

    diag1.addTimeSeries(line1, {strokeStyle:'rgb(0,255,0)'});
    diag2.addTimeSeries(line2, {strokeStyle:'rgb(0,255,255)'});
    diag3.addTimeSeries(line3, {strokeStyle:'rgb(255,0,0)'});

    diag1.streamTo(document.getElementById("diag1"), 1000);
    diag2.streamTo(document.getElementById("diag2"), 1000);
    diag3.streamTo(document.getElementById("diag3"), 1000);
}

