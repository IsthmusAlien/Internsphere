# IoT Temperature Based Automatic Fan Speed Control and Monitoring System

## Overview

This project implements an IoT-based system for automatically controlling fan speed based on temperature readings from sensors. It utilizes a DHT11 sensor for measuring temperature and humidity, along with a separate analog temperature sensor for redundancy or additional coverage. The system adjusts the fan speed according to the temperature readings, ensuring optimal cooling conditions. Real-time monitoring of temperature readings is provided through the serial monitor.


## Features

- **Automatic Fan Speed Control**: Adjusts fan speed based on temperature readings from both DHT11 and a separate analog temperature sensor.
- **Real-time Temperature Monitoring**: Provides instant temperature readings via the serial monitor.
- **Customizable Temperature Threshold**: Allows users to set their desired temperature threshold for fan speed adjustments.
- **Redundant Temperature Sensing**: Ensures reliability by utilizing multiple temperature sensors.

## Hardware Requirements

- Arduino Uno
- DHT11 sensor
- 12V cooling fan
- 9V battery
- Jumper wires
- USB cable 

## Software Requirements

- Arduino IDE or a platform-specific development environment

## Architecture 
<img src="https://github.com/AmruthaRajsheker/IoT-Temperature-Based-Automatic-Fan-Speed-Control-and-Monitoring-System/assets/119475943/29b9af3b-c0ce-4e2f-ab20-4dc319212c7e" alt="description" style="width: 50%; height: auto;">

## Experiment Overview

### Step 1: Setup Arduino Environment

1. **Install Arduino IDE**: Download and install the Arduino IDE from the official Arduino website if not already installed.
2. **Connect Arduino Uno**: Use a USB cable to connect the Arduino Uno board to your computer, enabling power and code upload capabilities.

### Step 2: Components Assembly

1. **DHT11 Sensor Connection**:
   - **Signal Pin (DHTPIN)**: Connect to digital pin 2 (D2) on the Arduino Uno.
   - **VCC**: Connect to 5V pin.
   - **GND**: Connect to GND pin.

2. **Analog Temperature Sensor Connection**:
   - **Signal Pin (tempPin)**: Connect to analog pin A0.
   - **VCC**: Connect to 5V pin.
   - **GND**: Connect to GND pin.

3. **Cooling Fan Connection**:
   - **Positive (+)**: Connect to the digital pin 3 (D3) on the Arduino Uno.
   - **Negative (-)**: Connect to the GND pin.
   

4. **Power Supply**:
   - Use a USB cable connected to your computer or a 9V battery connected to the power jack or VIN pin and GND pin.

### Step 3: Write and Upload Code

1. **Open Arduino IDE**: Launch the Arduino IDE on your computer.
2. **Write Code**: Develop the code to read temperature from both sensors and control the fan based on temperature readings.
3. **Upload Code**: Upload the code to the Arduino Uno board.

### Step 4: Monitor Readings

1. **Open Serial Monitor**: Access the serial monitor in the Arduino IDE to monitor temperature readings and fan speed control actions.
2. **Observe Results**: Power on the system and observe the displayed temperature readings and fan speed control actions.

### Step 5: Experiment and Adjustments

1. **Experiment with Thresholds**: Adjust temperature thresholds in the code for desired fan speed control.
2. **Fine-Tuning**: Fine-tune the system by modifying the code and hardware connections as necessary.
3. **Documentation**: Document findings, adjustments, and encountered issues for future reference.



## Circuit diagram 
<img src="https://github.com/AmruthaRajsheker/IoT-Temperature-Based-Automatic-Fan-Speed-Control-and-Monitoring-System/assets/119475943/25b11e17-641a-4e0c-a9e9-a80584c021aa" alt="description" style="width: 50%; height: auto;">

## Circuit Setup 
<img src="https://github.com/AmruthaRajsheker/IoT-Temperature-Based-Automatic-Fan-Speed-Control-and-Monitoring-System/assets/119475943/5812c01e-04ec-48f3-8415-74d9f1567e55" alt="description" style="width: 50%; height: auto;">

## Output 

### prototype
<img src="https://github.com/AmruthaRajsheker/IoT-Temperature-Based-Automatic-Fan-Speed-Control-and-Monitoring-System/assets/119475943/c1c5a9be-ef54-4b04-9252-3024c7bd2d19" alt="description" style="width: 50%; height: auto;">

### serial monitor
<img src="https://github.com/AmruthaRajsheker/IoT-Temperature-Based-Automatic-Fan-Speed-Control-and-Monitoring-System/assets/119475943/4ebcaa4c-f04f-4a8c-a121-f748fa7e7c37" alt="description" style="width: 50%; height: auto;">


## License

This project is licensed under the [MIT License](link to license file).
