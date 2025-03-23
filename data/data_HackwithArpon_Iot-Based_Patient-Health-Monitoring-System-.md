# Iot-Based_Patient-Health-Monitoring-System 

**ABSTRACT:**

Nowadays Health-care Environment has developed science and knowledge based on 
Wireless-Sensing node Technology oriented. Patients are facing a problematic 
situation of unforeseen demise due to the specific reason of heart problems and attack 
which is because of nonexistence of good medical maintenance to patients at the 
needed time. This is for specially monitoring the old age patients and informing 
doctors and loved ones. So, we are proposing an innovative project to dodge such 
sudden death rates by using Patient Health Monitoring that uses sensor technology and 
uses internet to communicate to the loved ones in case of problems. This system uses 
**Temperature and heartbeat sensor** for tracking patient’s health. Both the sensors are 
connected to the **Arduino-uno**. To track the patient's health, the micro-controller is in turn 
interfaced to an LCD display and wi-fi connection to send the data to the web-server 
(wireless sensing node). In case of any abrupt changes in patient **heart-rate or body 
temperature alert is sent about the patient using IoT**. This system also shows patients 
temperature and heartbeat tracked live data with timestamps over the Internetwork. 
Thus, Patient health monitoring system based on IoT uses the internet to effectively 
monitor patient health and helps the user monitor their loved one’s drome work and 
saves lives.

**Introduction:**

Internet of Things (IoT) conceptualizes the idea of remotely connecting and 
monitoring real world objects (things) through the Internet.

**“The Internet of Things is the network of physical objects that contain embedded 
technology to communicate and sense or interact with their internal states or the 
external environment.” – Gartner**

![IoT General Performance Structure](https://github.com/HackwithArpon/Iot-Based_Patient-Health-Monitoring-System-/assets/116937463/95f6defa-71c2-4cac-8226-f2e1ff8aab1e)

Smart systems and IoT are driven by combination of three things:
• Sensors & Actuators
• Connectivity
• People & Processes

With tons of new healthcare technology start-ups, IoT is rapidly revolutionizing the 
healthcare industry. In this project, we have designed the IoT Based Patient Health
Monitoring System using ESP8266 & Arduino. The IoT platform used in this project is 
ThingSpeak. ThingSpeak is an open-source Internet of Things (IoT) application and API to 
store and retrieve data from things using the HTTP protocol over the Internet or via a Local 
Area Network. This IoT device could read the pulse rate and surrounding
temperature and update them to an IoT platform.
This Health Monitoring System simulates two major aspects of health and wellbeing :
**i) Human Body Temperature, ii) Heart Beat Rate.**
It presents the numerical value of these two aspects and maintains a data logger system
where the patient’s data can be stored and received for medical history and check-up
purpose collectively. Along with that the output values can be viewed through waveform
chart. The circuit output values in the LED represent the current heartbeat, time in second,
heartbeat per minute and body temperature.

**Objectives:**

● To design a portable health monitoring system, which measures the patient’s body
temperature and pulse rate.

● To provide medical assistance according to the data received from the sensors which
stored in cloud server (ThingSpeak).

**Block Diagram:**
![Block Diagram](https://github.com/HackwithArpon/Iot-Based_Patient-Health-Monitoring-System-/assets/116937463/07e15f60-6c7c-4983-8915-264cb5167680)
This is a simple block diagram that explains the IoT Based Patient Health Monitoring System
using ESP8266 & Arduino. Pulse sensor and LM35 temperature sensor measure BPM &
Environmental temperature respectively. The Arduino processes the code and displays it to
16*2 LCD Display. ESP8266 Wi-Fi module connects to Wi-Fi and sends the data to IoT
device server. The IoT server used here is ThingSpeak. Finally, the data can be monitored
from any part of the World by logging into the ThingSpeak channel.


**Requirements:**

Hardware Requirements-

● Arduino Uno

● ESP8266 Wi-Fi Module

● LM35 Temperature Sensor

● Pulse Sensor

● 16*2 LCD Display

● Potentiometer (10K)

● Resistor (1K & 2K)

● Breadboard

Software Requirements-

● Arduino Compiler

● ThingSpeak (Cloud Service)

**1. Arduino Uno :**

Arduino is an open-source prototyping platform based on easy-to-use hardware and software. 
Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter 
message - and turn it into an output - activating a motor, turning on an LED, publishing 
something online. One can tell the board what to do by sending a set of instructions to the 
microcontroller on the board. To do so we use the Arduino programming language (based on 
Wiring) , and the Arduino Software (IDE), based on Processing.
Over the years Arduino has been the brain of thousands of projects, from everyday objects to 
complex scientific instruments. A worldwide community of makers - students, hobbyists, 
artists, programmers, and professionals - has gathered around this open-source platform, their 
contributions have added up to an incredible amount of accessible knowledge that can be of 
great help to novices and experts alike. Arduino was born at the Ivrea Interaction Design 
Institute as an easy tool for fast prototyping, aimed at students without a background in 
electronics and programming. As soon as it reached a wider community, the Arduino board 
started changing to adapt to new needs and challenges, differentiating its offer from simple 
8-bit boards to products for IoT applications, wearable, 3D printing, and embedded 
environments. All Arduino boards are completely open-source, empowering users to build 
them independently and eventually adapt them to their particular needs. The software, too, is 
open-source, and it is growing through the contributions of users worldwide.
Arduino also simplifies the process of working with microcontrollers, but it offers some 
advantage for teachers, students, and interested amateurs over other systems:

**Inexpensive -** Arduino boards are relatively inexpensive compared to other microcontroller 
platforms. The least expensive version of the Arduino module can be assembled by hand, and 
even the pre-assembled Arduino modules cost less than $50

**Cross-platform -** The Arduino Software (IDE) runs on Windows, Macintosh OSX, 
and Linux operating systems. Most microcontroller systems are limited to Windows.

**Simple, clear programming environment -** The Arduino Software (IDE) is easy-to-use for
beginners, yet flexible enough for advanced users to take advantage of as well. For teachers, 
it's conveniently based on the Processing programming environment, so students learning to 
program in that environment will be familiar with how the Arduino IDE works.

**Open source and extensible software -** The Arduino software is published as open-source 
tools, available for extension by experienced programmers. The language can be expanded 
through C++ libraries, and people wanting to understand the technical details can make the 
leap from Arduino to the AVR C programming language on which it's based. Similarly, one 
can add AVR-C code directly into the Arduino programs.

**Open source and extensible hardware -** The plans of the Arduino boards are published 
under a Creative Commons license, so experienced circuit designers can make their own 
version of the module, extending it and improving it. Even relatively inexperienced users can 
build the breadboard version of the module in order to understand how it works and save 
money. Arduino is an open-source electronics prototyping platform based on flexible, easyto-use hardware and software. It’s intended for artists, designers, hobbyists, and anyone 
interested in creating interactive objects or environments.

**Features of Arduino Uno :**

**Processor:** ATmega328 (16 MHz)
**Flash memory:** 32 KB
**RAM:** 2kb
**Operating Voltage:** 5V
**Input Voltage:** 7-12 V
**Number of analog inputs:** 6
**Number of digital I/O:** 14 (6 of them pwn)

**2. ESP8266 Wi-Fi Module :**

The ESP8266 is a very user-friendly and low-cost device to provide internet connectivity to
our projects. The module can work both as an Access point (can create hotspot) and as a
station (can connect to Wi-Fi), hence it can easily fetch data and upload it to the internet
making the Internet of Things as easy as possible. It can also fetch data from the internet
using API’s hence our project could access any information that is available on the internet,
thus making it smarter. Another exciting feature of this module is that it can be programmed
using the Arduino IDE which makes it a lot more user-friendly.

The ESP8266 module works with 3.3V only, anything more than 3.7V would kill the module
hence be cautious with our circuits.

Here is its pins description:

**Pin 1: Ground:** Connected to the ground of the circuit

**Pin 2: Tx/GPIO – 1:** Connected to Rx pin of programmer/uC to upload program

**Pin 3: GPIO – 2:** General purpose Input/output pin

**Pin 4 : CH_EN:** Chip Enable/Active high

**Pin 5: Flash/GPIO – 0:** General purpose Input/output pin

**Pin 6 : Reset:** Resets the module

**Pin 7: RX/GPIO – 3:** General purpose Input/output pin

**Pin 8: Vcc:** Connect to +3.3V only

**Features of ESP8266 :**

• CPU (32 bit, 26MHz-52MHz, 64KB instruction RAM, 64KB boot ROM, 
96KB data
• RAM), CPU clock speed can reach maximum value of 160 MHz
• 802.11 b/g/n protocol.
• Wi-Fi Direct (P2P), soft-AP.
• Integrated TCP/IP protocol stack.
• It requires 3.3V power–do not power it with 5 volts.
• Wake up and transmit packets in < 2ms.
• Standby power consumption of < 1.0Mw.
• Integrated low power 32-bit CPU could be used as application processor.
• GPIO, UART, ADC, I2C, SPI, PWM.
• Real Time Operation System (RTOS) is enabled. Currently, only 20% of 
MIPS has been occupied by the Wi-Fi stack, the rest can all be used for 
user application programming and development.

**3. LM35 Temperature Sensor :**

The LM35 series are precision integrated-circuit temperature devices with an output voltage
linearly-proportional to the Centigrade temperature. The LM35 device has an advantage over
linear temperature sensors calibrated in Kelvin, as the user is not required to subtract a large
constant voltage from the output to obtain convenient Centigrade scaling. The LM35 device
does not require any external calibration or trimming to provide typical accuracies of ±¼°C at
room temperature and ±¾°C over a full −55°C to 150°C temperature range.

**4. Pulse Sensor :**

The Pulse Sensor is a plug-and-play heart-rate sensor for Arduino. It can be used by
students, artists, athletes, makers, and game & mobile developers who want to easily
incorporate live heart-rate data into their projects. The essence is an integrated optical
amplifying circuit and noise eliminating circuit sensor. Clip the Pulse Sensor to our earlobe or
fingertip and plug it into our Arduino, we can ready to read heart rate. Also, it has an Arduino
demo code that makes it easy to use.

**● Pin-1(GND) :** Black Colour Wire - It is connected to the GND terminal of the system.

**● Pin-2(VCC) :** Red Colour Wire - It is connected to the supply voltage (+5V otherwise
+3.3V) of the system.

**● Pin-3(Signal) :** Purple Colour Wire - It is connected to the pulsating o/p signal.

**5. 16*2 LCD Display :**

The features of this LCD mainly :

● The operating voltage of this LCD is 4.7V-5.3V

● It includes two rows where each row can produce 16-characters

● The utilization of current is 1mA with no backlight

● Every character can be built with a 5×8 pixel box

● The alphanumeric LCDs alphabets & numbers

● Is display can work on two modes like 4-bit & 8-bit

● These are obtainable in Blue & Green Backlight

● It displays a few custom generated characters

**6. ThingSpeak :**

ThingSpeak allows you to aggregate, visualize and analyze live data streams in the cloud.
Some of the key capabilities of ThingSpeak include the ability to:

● Easily configure devices to send data to ThingSpeak using popular IoT protocols.

● Visualize our sensor data in real-time.

● Aggregate data on-demand from third-party sources.
    
● Use the power of MATLAB to make sense of our IoT data.

● Run our IoT analytics automatically based on schedules or events.

● Prototype and build IoT systems without setting up servers or developing web
software.

● Automatically act on our data and communicate using third-party services like Twilio
or Twitter

To learn how you can collect, analyze and act on our IoT data with ThingSpeak, explore the
topics below:

**Collect :** Send sensor data privately to the cloud

**Analyze :** Analyze and visualize our data with matlab

**Act:** Trigger a reaction

**Circuit Diagram & Connections :**

**1.** Connect Pulse Sensor output pin to A0 of Arduino and other two pins to VCC and GND.

**2.** Connect LM35 Temperature Sensor output pin to A1 of Arduino and other two pins to VCC
& GND.

**3.** Connect the LED to Digital pin 7 of Arduino via a 220-ohm resistor.

**4.** Connect pin 1,3,5,16 of LCD to GND.

**5.** Connect pin 2,15 of LCD to VCC.

**6.** Connect pin 4,6,11,12,13,14 of LCD to Digital pin 12,11,5,4,3,2 of Arduino.

**7.** The RX pin of ESP8266 works on 3.3V and it will not communicate with the Arduino when
we will connect it directly to the Arduino. So, we will have to make a voltage divider for it
which will convert the 5V into 3.3V. This can be done by connecting the 2.2K & 1K resistor.
Thus the RX pin of the ESP8266 is connected to pin 10 of Arduino through the resistors.

**8.** Connect the TX pin of the ESP8266 to pin 9 of the Arduino.


![Final Project Image](https://github.com/HackwithArpon/Iot-Based_Patient-Health-Monitoring-System-/assets/116937463/f162c68a-6d3b-4c76-8c35-0778372fda1c)

**Setting the ThingSpeak**

ThingSpeak provides a very good tool for IoT based projects. By using the 
ThingSpeak site, we can monitor our data and control our system over the Internet, 
using the Channels and web pages provided by ThingSpeak.
Then create a new channel and set up what you want. Then create the API keys. This 
key is required for programming modifications and setting your data. Then upload the 
code to the Arduino UNO by assembling the circuit shown above. Open the serial 
monitor and it will automatically connect to Wi-Fi and set up everything.

**Conclusion:**

● Our proposed system aims at simplifying health monitoring.

● This system of ours has been proven effective enough in aiding medical assistance.

● This approach of ours contributes towards Smart India.

**References:**

**❖ Marathe, Sachi, et al. “A Wireless Patient Monitoring System using Integrated ECG
module, Pulse Oximeter, Blood Pressure and Temperature Sensor.” 2019 International
Conference on Vision Towards Emerging Trends in Communication and Networking
(ViTECoN). IEEE, 2019.**

**❖ Mishra, Vaibhav, Durgesh Kumar Mishra and Ass. Prof. Ankit Trivedi. “Health
Monitoring System using IoT using Arduino Uno Microcontroller.” Health 6.08 (2019).**



By **Arpon Kumar Chowdhury**, KGEC_CSE'25
