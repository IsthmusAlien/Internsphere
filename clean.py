import pandas as pd

data = pd.read_csv("NLP DATASET - Sheet1.csv")

data_cleaned = data.dropna(subset=["reference"])

data_cleaned.to_csv("cleaned_dataset.csv", index=False)

print(data_cleaned)
