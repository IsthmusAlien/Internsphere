# IoT-Project
**IoT-based Traffic Signal Monitoring & Controller System:**
An IoT-based Traffic Signal Monitoring and Controller System uses sensors and communication devices to monitor traffic in real-time and adjust signals dynamically, enhancing urban traffic management efficiency and effectiveness.
raffic light management and controlling system

**Test Case 1:** No Vehicles Present
Description: Test the system when no vehicles are detected.
Input: No IR sensor detects a vehicle.
Expected Output: The traffic signal remains green for the current lane and switches to red after the predefined time interval.


**Test Case 2:** One Lane with Vehicles
Description: Test the system when vehicles are detected in only one lane.
Input: One IR sensor detects vehicles, others do not.
Expected Output: The traffic signal should remain green for the lane with vehicles until the vehicles pass or after a maximum green light duration, then switch to the next lane.


**Test Case 3:** All Lanes with Vehicles
Description: Test the system when vehicles are detected in all lanes.
Input: All IR sensors detect vehicles.
Expected Output: The traffic signal should prioritize lanes based on vehicle density, giving each lane a green light in a round-robin manner, ensuring no lane is starved.


**Test Case 4:** High Vehicle Density in One Lane
Description: Test the system when one lane has a significantly higher vehicle density.
Input: One IR sensor detects high density, others detect low or medium density.
Expected Output: The traffic signal should allocate more green light time to the lane with higher density, while still allowing other lanes to proceed in turn.


**Test Case 5**: Equal Vehicle Density in All Lanes
Description: Test the system when all lanes have equal vehicle density.
Input: All IR sensors detect equal vehicle density.
Expected Output: The traffic signal should switch lanes in a round-robin manner, ensuring equal green light time for all lanes.
