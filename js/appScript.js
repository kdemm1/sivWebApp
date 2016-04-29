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

var num1 = {Value: 0};
var num2 = {Value: 0};
var num3 = {Value: 0};

function genDiag(x){
    x.Value = Math.floor(Math.random() * 100);
}

setInterval(function(){

    genDiag(num1);
    line1.append(new Date().getTime(), num1.Value);

    genDiag(num2);
    line2.append(new Date().getTime(), num2.Value);

    genDiag(num3);
    line3.append(new Date().getTime(), num3.Value);

    document.getElementById("num1").innerHTML = num1.Value;
    document.getElementById("num2").innerHTML = num2.Value;
    document.getElementById("num3").innerHTML = num3.Value;
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

