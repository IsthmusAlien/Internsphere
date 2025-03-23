# Sentiment-Analysis-in-R-programming

About R Programming Language:
- R is a language and environment for statistical computing and graphics. It provides a wide variety of statistical and graphical techniques and is highly extensible.
- R is available as free software. It’s easy to learn.
- R is helpful at every step of the data analysis process from gathering and cleaning data to analyzing it and reporting the conclusions.
- R is a statistical language created by statisticians. Thus, it excels in statistical computation. R is the most used programming language for developing statistical tools.

What is Sentiment Analysis ?
- Sentiment analysis is contextual mining of text which identifies and extracts subjective information in source material, and helping a business to understand the social sentiment of their brand, product or service while monitoring online conversations.
- Sentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral. Sentiment analysis helps data analysts within large enterprises gauge public opinion, conduct nuanced market research, monitor brand and product reputation, and understand customer experiences.
- R has a rich set of packages for Natural Language Processing (NLP) and generating plots. The foundational steps involve loading the text file into an R Corpus, then cleaning and stemming the data before performing analysis. I will demonstrate these steps and analysis like Word Frequency, Word Cloud, Word Association, Sentiment Scores and Emotion Classification using various plots and charts.

Loading library:(The following packages are used in the project)

-Tm for text mining operations like removing numbers, special characters, punctuations and stop words (Stop words in any language are the most commonly occurring words that have very little value for NLP and should be filtered out. Examples of stop words in English are “the”, “is”, “are”.)
- Snowballc for stemming, which is the process of reducing words to their base or root form. For example, a stemming algorithm would reduce the words “fishing”, “fished” and “fisher” to the stem “fish”.
- wordcloud for generating the word cloud plot.
- RColorBrewer for color palettes used in various plots
- syuzhet for sentiment scores and emotion classification
- ggplot2 for plotting graphs


About Data:
- X: It represent the ID
- rating: It is the user provided for the Kindle book(it ranges from 1-5).
- review.Text: Its the whole review of the Kindle book.
- summary: Its a short summary of whole review in short words

Cleaning up Text Data
- Cleaning the text data starts with making transformations like removing special characters from the text.
- This is done using the tm_map() function to replace special characters like /, @ and | with a space.
- The next step is to remove the unnecessary whitespace and convert the text to lower case.
- Then remove the stopwords.They are the most commonly occurring words in a language and have very little value in terms of gaining useful information.
- The last step is text stemming. It is the process of reducing the word to its root form. The stemming process simplifies the word to its common origin.


Generating the Word Cloud
- A word cloud is one of the most popular ways to visualize and analyze qualitative data.
- It’s an image composed of keywords found within a body of text, where the size of each word indicates its frequency in that body of text.
- Use the word frequency data frame (table) created previously to generate the word cloud


Below is a brief description of the arguments used in the word cloud function;
- words – words to be plotted
- freq – frequencies of words
- min.freq – words whose frequency is at or above this threshold value is plotted (in this case, I have set it to 5)
- max.words – the maximum number of words to display on the plot (in the code above, I have set it 100)
- random.order – I have set it to FALSE, so the words are plotted in order of decreasing frequency
- rot.per – the percentage of words that are displayed as vertical text (with 90-degree rotation). I have set it 0.40 (40 %), please feel free to adjust this setting to suit your preferences
- colors – changes word colors going from lowest to highest frequencies


Word Association
- Correlation is a statistical technique that can demonstrate whether, and how strongly, pairs of variables are related.
- This technique can be used effectively to analyze which words occur most often in association with the most frequently occurring words in the survey responses, which helps to see the context around these words


Sentiment Scores
- Sentiments can be classified as positive, neutral or negative
- They can also be represented on a numeric scale, to better express the degree of positive or negative strength of the sentiment contained in a body of text.
- Here we are using the Syuzhet package for generating sentiment scores, which has four sentiment dictionaries and offers a method for accessing the sentiment extraction tool developed in the NLP group at Stanford.
- The get_sentiment function accepts two arguments: a character vector (of sentences or words) and a method.
- The selected method determines which of the four available sentiment extraction methods will be used. The four methods are syuzhet (this is the default), bing, afinn and nrc.
ach method uses a different scale and hence returns slightly different results. 
- Please note the outcome of nrc method is more than just a numeric score.


Syuzhet vector
- An inspection of the Syuzhet vector shows the first element has the value of 1.85.
- It means the sum of the sentiment scores of all meaningful words in the first response(line) in the text file, adds up to 1.85. The scale for sentiment scores using the syuzhet method is decimal and ranges from -1(indicating most negative) to +1(indicating most positive).
- Note that the summary statistics of the suyzhet vector show a median value of 1.6, which is above zero and can be interpreted as the overall average sentiment across all the responses is positive.

Emotion Classification
- Emotion classification is built on the NRC Word-Emotion Association Lexicon (aka EmoLex).
- The NRC Emotion Lexicon is a list of English words and their associations with eight basic emotions (anger, fear, anticipation, trust, surprise, sadness, joy, and disgust) and two sentiments (negative and positive).
- The get_nrc_sentiments function, which returns a data frame with each row representing a sentence from the original file.
- The data frame has ten columns (one column for each of the eight emotions, one column for positive sentiment valence and one for negative sentiment valence).¶
- The data in the columns (anger, anticipation, disgust, fear, joy, sadness, surprise, trust, negative, positive) can be accessed individually or in sets.

Conclusion:
- This project was demonstration of how to create a word frequency table and plot a word cloud, to identify prominent themes occurring in the review.
- Word association analysis using correlation, helped gain context around the prominent themes.
- It explored four methods to generate sentiment scores, which proved useful in assigning a numeric value to strength (of positivity or negativity) of sentiments in the text and allowed interpreting that the average sentiment through the text is trending positive.
- Lastly, it demonstrated how to implement an emotion classification with NRC sentiment and created two plots to analyze and interpret emotions found in the text.


