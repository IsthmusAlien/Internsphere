import pyautogui
import time
import pandas as pd


df = pd.read_csv("data_new11111111111_filtered.csv")

if "summary" in df.columns:
    for summary in df["summary"]:
        
        time.sleep(5)

        pyautogui.click(850, 840)

        pyautogui.hotkey('ctrl','a')

        pyautogui.write(summary + "give a summary of this project as a readme ")

        time.sleep(1)

        pyautogui.press('enter')

        time.sleep(25)



