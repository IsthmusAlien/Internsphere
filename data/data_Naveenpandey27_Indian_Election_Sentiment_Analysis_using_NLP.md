# Sentiment Analysis on Political Reviews

This Python script performs sentiment analysis on political reviews, specifically those related to Narendra Modi and Rahul Gandhi. It utilizes various libraries and techniques to clean, preprocess, and analyze the sentiment of text data.

## Libraries Used
The following libraries are imported at the beginning of the script:
- `re`: Regular expression library for text cleaning.
- `numpy`: Library for numerical operations.
- `pandas`: Data manipulation library.
- `nltk`: Natural Language Toolkit for text processing.
- `textblob`: TextBlob library for sentiment analysis.
- `plotly.graph_objects`: Plotly library for data visualization.

## Data Loading
Two CSV files, 'modi_reviews.csv' and 'rahul_reviews.csv', are read into DataFrames using `pandas`. These files contain political reviews.

## Data Exploration
The script explores the loaded data by displaying the first few rows and checking the data dimensions for both Modi and Rahul datasets.

## Text Cleaning
Text cleaning is performed to prepare the text data for sentiment analysis. The cleaning process includes the following steps:

### Common Preprocessing Function
A common preprocessing function is defined to perform the following tasks on text data:
1. Convert text to lowercase.
2. Handle missing values by dropping rows with missing text.
3. Convert the text column to strings.
4. Remove special characters, emojis, and emoticons.
5. Remove stopwords (common words like 'and', 'the', etc.).
6. Perform stemming (reducing words to their root form).
7. Remove numbers.

### Modi Data Cleaning
The preprocessing function is applied to clean the Modi dataset ('modi_data'). The 'Unnamed: 0' column is also dropped from the DataFrame.

### Rahul Data Cleaning
The same preprocessing function is applied to clean the Rahul dataset ('rahul_data'). The 'Unnamed: 0' column is dropped as well.

## Sentiment Analysis
Sentiment analysis is performed using the TextBlob library to calculate the polarity of each review. The polarity represents the sentiment score, where positive values indicate positive sentiment, negative values indicate negative sentiment, and zero indicates neutral sentiment.

### Sentiment Labeling
Based on the polarity scores, sentiment labels ('positive', 'negative', 'neutral') are assigned to the reviews for both Modi and Rahul datasets. Reviews with a polarity score of 0 are labeled as 'neutral.'

### Removal of Neutral Reviews
Neutral reviews are removed from both datasets to focus on reviews with discernible sentiment.

### Balancing the Dataset
To balance the dataset, a random selection of reviews is removed. The number of reviews removed is determined to ensure that both positive and negative sentiments are equally represented.

## Prediction about Election
To analyze sentiment regarding the politicians, this script calculates the percentage of negative and positive reviews for both Narendra Modi and Rahul Gandhi. This data is visualized using a bar chart, where 'Negative' sentiment is marked in red and 'Positive' sentiment is marked in green.

The chart provides an overview of the sentiment analysis results for the two politicians.

![chart](https://github.com/Naveenpandey27/Indian_Election_Sentiment_Analysis_using_NLP/assets/66298494/68e3b14e-92e5-476d-812f-ab89257687b1)

Feel free to use this code and make changes according to your sentiment analysis project on political reviews.
