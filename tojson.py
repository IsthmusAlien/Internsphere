import pandas as pd
import json

data = pd.read_csv("cleaned_dataset.csv")

json_data = data.to_dict(orient="records")

json_output = json.dumps(json_data, indent=2, ensure_ascii=False)

with open("data.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_output)

print(json_output)
