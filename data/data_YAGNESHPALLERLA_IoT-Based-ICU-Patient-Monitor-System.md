# IoT Based ICU Patient Monitoring System #

## Overview ##

The IoT Based ICU Patient Monitoring System is designed to continuously monitor critical health parameters of ICU patients, such as blood pressure, heart rate, and body temperature. This data is transmitted in real-time to a web interface, allowing doctors to monitor patients remotely.

**Components**:
- Raspberry Pi: The main processing unit.
- Blood Pressure Sensor: Measures the patient's blood pressure.
- Heart Rate Sensor: Monitors the heart rate.
- Temperature Sensor: Records body temperature.
- LCD Display: Displays the readings.
- WiFi Module: Transmits data to the web interface.

**Features**:
- Real-time Monitoring: Continuously tracks vital health parameters.
- Remote Access: Allows doctors to access patient data globally through a web interface.
- Alert System: Sends alerts if any parameter goes beyond the set threshold.

## Requirements:

## Hardware:

- Raspberry Pi
- Blood Pressure Sensor
- Heart Rate Sensor
- Temperature Sensor
- LCD Display
- WiFi Module
- 
## Software:
- Raspbian OS
- Python
- Web Server (Flask or similar)
## Setup

## Hardware Setup:

- Connect the sensors to the Raspberry Pi as per the wiring diagram.
- Connect the WiFi module and LCD display to the Raspberry Pi.

## Software Installation:

- Install Raspbian OS on the Raspberry Pi.
- Install necessary Python libraries: pip install flask.
## Code Deployment:

- Clone the project repository.
- Upload the sensor data reading scripts to the Raspberry Pi.
- Set up the web server to display the data.
## Usage
- Power on the System: Ensure all hardware components are connected and the Raspberry Pi is powered on.
- Start Monitoring: Run the Python scripts to start collecting data from the sensors.
   Access Web Interface: Open the web interface on your browser to monitor patient data in real-time.
  
## Contributing
## Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.


## Contact
For further inquiries, please contact yagnesh914@gmail.com.
