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
