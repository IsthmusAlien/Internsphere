# Raspberry-Pi-Industrial-IoT


Raspberry Pi Industrial Monitoring, Management, and Data Acquisition System 

RFID Reader checks the validity of a RFID Card. If the card is valid, RPi sends an alert to the phone, and then uses sensors to capture and calculate various parameters, and plots them on ThingSpeak

# Requirements

a) Raspberry Pi 3 Model B+

b) RC522 RFID Reader and Card

c) Adafruit DHT11 sensor

d) BH1750 Ambient Light Sensor

e) BMP180 Pressure Sensor

f) LEDs and Buzzers

g) Jumper Wires

h) Pushbullet

i) ThingSpeak

# Raspberry Pi Model 3B+

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/db4c911a-daaf-4e90-a467-8b5e8a755198)



![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/4092dc90-86d5-4d10-9c8c-6fbbcf013d2e)




# Raspbian / Raspberry Pi OS

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/b4624d9f-89fe-4480-8aad-9529f8d5c8fb)





# Adafruit DHT11 sensor

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/9f360156-64f9-458d-8880-83b5b8f1b8ba)


# RC522 RFID Reader

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/88f46e4d-0024-477c-83da-bd74fd2d93e6)


# BH1750 Ambient Light Sensor
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/f14f20ca-a6e8-48fb-9e5d-7f4a16d690a1)

# BMP180 Pressure Sensor
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/ea1f5b8e-6241-418e-ae2d-67fae6e23723)



# LEDs and Buzzers

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/c675223d-85e2-4a4c-bd76-067857b387c7)



![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/1f916543-c910-49e0-bcab-b4a2a9b16859)



# Pushbullet

https://www.pushbullet.com/


![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/f5f0b815-baee-442d-aa77-cde0cd7eb1a8)


# ThingSpeak

https://thingspeak.com/

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/3cdc35aa-5d05-4e04-bcd0-1ead047da097)


![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/97c8cc43-10d9-4d0a-8129-c7df152ce845)



# Block Diagram

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/d4cd5ca9-9712-4c06-8db7-8916211d1b0c)



# Flowchart

![Flowchart](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/f9a00c66-5700-45df-b15b-6e268d099dde)



# Circuit Diagram

Connect the Vcc pin of DHT11 Sensor to Pin 2 of Raspberry Pi, Gnd pin of DHT11 Sensor to Pin 6 of Raspberry Pi and the Out pin of DHT11 Sensor to GPIO 26 of the Raspberry Pi. Also connect the + terminal of LED to GPIO 21, + terminal of buzzer to GPIO 20 and connect the ground pins of both to Pin 6 of Raspberry Pi.

Connect the SDA and SCL pins of both BMP180 and BH1750 to Pins 3 and 5 respectively. Connect 3V3 pin to Pin 1, GND and ADDR to Pin 6.

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/9d6679c1-562d-4579-b995-06faebf587ea)


![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/f71c01fd-c164-41c4-9efb-1b909ed6bc2e)



# Setup

![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/53f0bb53-9114-456f-ad99-a2ebe7e8e1b9)





# Results

ThingSpeak: https://thingspeak.com/channels/2304287


Program output in shell
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/3301556f-f1b9-4a46-bed4-cbee70594b48)








<br>


![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/49cbc061-4a85-4ecd-b8b9-a4bdb6bc6f21)

LED glowing, indicating invalid RFID









<br>


![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/4832ba15-a5de-4a27-bc48-8ef6c5d5b036)

Pushbullet notifications on phone






# Outputs in ThingSpeak

Temperature and Humidity values plotted against time in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/ae56cd92-c602-4cdc-b939-789a80d6b136)






Temperature and Humidity gauges in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/6065cbd7-e374-4a4c-bc31-7f648852a9f0)






Temperature and Humidity numeric displays in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/0a7a1fd3-c4da-48d2-a455-7208a86118d7)





Correlation between Temperature and Humidity plotted in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/a22fbe89-0f48-4dd7-9081-9ae0d0d3c580)


Pressure and Altitude values plotted against time in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/d13f6817-bc8a-4348-ba23-f8e5b715a5bc)


Sea Level Pressure and Ambient Light values plotted against time in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/28aaf9ca-8cc2-4ed3-9cdb-c38919ae7849)


Dew Point and Air Density values plotted against time in ThingSpeak
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/2a602405-67f2-4fd5-992e-b444eef2d737)



All sensor parameters stored in a CSV file
![image](https://github.com/KarthikT23/Raspberry-Pi-Industrial-IoT/assets/119528503/a90639b8-a680-4593-9941-3bc610da942a)



# References
[1] An Internet-Based Interactive Embedded Data Acquisition System for Real-Time Applications by Ali Ziya Alkar and Mehmet Atif Karaca, IEEE Transactions on Instrumentation and Measurement, Vol. 58, No. 3, March 2009.

[2] Wireless SCADA for industrial automation using Raspberry Pi by Avinash V. Ghadage, Dr. S. S. Patil, International Journal of Advanced Research in Innovative Ideas in Education (IJARIIT), Vol. 3, Issue 4, April 2017.

[3] Low-Cost Solutions for Maintenance with a Raspberry Pi by M. V. K. Sivakumar, S. V. Krishna, M. V. N. Srinivas, International Journal of Emerging Technology in Computer Science & Electronics (IJETCSE), Vol. 10, Issue 11, November 2019.

[4] Internet of Things (IoT) based Data Acquisition system using Raspberry Pi by A. S. Patil, D. S. Patil, S. S. Patil, International Journal of Engineering Research & Technology (IJERT), Vol. 3, Issue 5, May 2014.

[5] Raspberry pi based data acquisition system using wireless communication by V. N. Patil, A. S. Patil, International Journal of Recent Engineering Science (IJRES), Vol. 3, No. 2, February 2015.

[6] https://iotdesignpro.com/projects/home-security-system-using-raspberry-pi-and-pir-sensor-with-push-notification-alert

[7] https://iotstarters.com/how-to-send-sensor-data-to-thingspeak-using-raspberry-pi/

[8] https://www.raspberrypi-spy.co.uk/2017/09/dht11-temperature-and-humidity-sensor-raspberry-pi/

[9] https://learn.adafruit.com/adafruit-io-basics-digital-output/python-setup

[10] https://github.com/alaub81/rpi_sensor_scripts/tree/main
