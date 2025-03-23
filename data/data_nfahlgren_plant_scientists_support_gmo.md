# Scopus publication analysis
This repository contains data we analyzed from the petition "Scientists in Support of GMO Technology for Crop Improvement" (1) for the letter "Plant scientists: GM technology is safe" (2). An extended version is also available [here](https://github.com/nfahlgren/plant_scientists_support_gmo/blob/master/submitted_article.md).

## Data collection
Starting with the first ~1000 signatories of the petition "Scientists in Support of GMO Technology for Crop Improvement" (1), we identified signatories with academic affiliations. With the names and affiliation information, we searched the [Scopus database](http://www.scopus.com/) for publication records for each signatory. Scopus database searches yielded unambiguous results for 471 authors. Citation information for the publications of all 471 authors were downloaded in CSV format, and the data for individual authors can be found in the [data folder](https://github.com/nfahlgren/scopus_publications_analysis/tree/master/data).

## Data curation
During the course of processing the records, formatting inconsistencies were found among the Scopus records (e.g. failure to convert an author name to Lastname, Initials). In cases where formatting inconsistencies were found, records were manually reformatted. Retraction publications are listed as separate entries in the Scopus database, so both the retraction notices and the original retracted articles were removed from the data set. All changes made to the publication are tracked in the git history of this repository.

## Data processing
The Python script [coauthor_network.py](https://github.com/nfahlgren/scopus_publications_analysis/blob/master/coauthor_network.py) was used to extract data from the Scopus publication records. 

```
python coauthor_network.py -d ./data -o petitioner_publication_analysis_results
```

Erratum notices were skipped because they are redundant with the original article database entry, but all other publication types were used in our analysis. After filtering, 17,662 unique publications were used for further analysis.

## Publication wordcloud
The R script [wordcloud.R](https://github.com/nfahlgren/scopus_publications_analysis/blob/master/wordcloud.R) was used to do the wordcloud analysis. First, titles of the 17,662 unique publications were read into R. The tm package was used to generate a data frame of word frequency usage from the input titles (3,4). The titles were processed to convert all words to lowercase, remove numbers, remove English "stopwords," remove punctuation characters, and remove whitespace. Cleaned title text was "stemmed" to truncate common suffixes and conjugations to collapse word variants to their root word. Stem completion was used to restore words that were inappropriately stemmed back to their full-length state. A term document matrix was generated from the processed text with words that were at least four characters long. The term document matrix was converted to a data frame of word frequencies. The following proper and common taxonomic terms were removed from the resulting data frame to focus the analysis on the processes studied and not the organismal systems.

```
'arabidopsis', 'maize', 'thaliana', 'tomato', 'rice', 'wheat', 
'tobacco', 'populus', 'chlamydomonas', 'phytophthora', 'barley',
'potato', 'pseudomonas', 'salina', 'soybean', 'human', 'yeast',
'agrobacterium', 'cucumber','reinhardtii', 'drosophila', 'brassica',
'nicotiana', 'sativa', 'oryza', 'coli', 'infestans', 'elongata',
'polymorpha', 'escherichia', 'solanum', 'tumefaciens', 'rhizobium',
'indica', 'poplar', 'turnip', 'cauliflower', 'sativum', 'xanthomonas',
'pisum', 'domestica', 'physcomitrella', 'corn', 'brachypodium',
'lepidoptera', 'mouse', 'potyvirus', 'patens', 'candida', 'bacillus',
'cotton', 'mice', 'saccharomyces', 'sorghum', 'sugarcane', 'thlaspi',
'cyanobacteria', 'poaceae', 'radiata', 'carrot', 'distachyon',
'hedgehog', 'sinorhizobium', 'fusarium', 'neurospora', 'grape',
'sojae', 'strawberries', 'thuringiensis', 'vitis', 'petunia',
'caerulescens', 'cerevisiae', 'onion', 'haberlea', 'sunflower',
'cabbage', 'napus', 'vicia', 'crassa', 'cucumis', 'reinhardi',
'rhodopensis', 'alfalfa', 'aspen', 'cladosporium', 'medicago',
'panicum', 'vaccinia', 'chenopodiaceae', 'cassava', 'fulvum',
'spinach', 'triticum', 'benthamiana', 'plutellidae', 'banana', 'copi',
'switchgrass', 'elegans', 'setaria'
```

The final wordcloud was generated using the wordcloud package (5). Analysis was done using R version 3.2.2 and Python 2.7.10.

## References
1. Scientists in Support of GMO Technology for Crop Improvement. Cornell Alliance for Science. 5 January 2016; [http://cas.nonprofitsoapbox.com/aspbsupportstatement](http://cas.nonprofitsoapbox.com/aspbsupportstatement).
2. Fahlgren N, Bart R, Herrera-Estrella L, Rellán-Álvarez R, Chitwood DH, Dinneny JR (2016). Plant scientists: GM technology is safe. Science 351: 824–824. [http://science.sciencemag.org/content/351/6275/824.1](http://science.sciencemag.org/content/351/6275/824.1).
3. Feinerer I, Hornik K, and Meyer D (2008). Text Mining Infrastructure in R. Journal of Statistical Software 25(5): 1-54. URL: [http://www.jstatsoft.org/v25/i05/](http://www.jstatsoft.org/v25/i05/). 
4. Feinerer I and Hornik K (2015). tm: Text Mining Package. R package version 0.6-2. [https://CRAN.R-project.org/package=tm](https://CRAN.R-project.org/package=tm).
5. Fellows I. (2014). wordcloud: Word Clouds. R package version 2.5. [https://CRAN.R-project.org/package=wordcloud](https://CRAN.R-project.org/package=wordcloud).


  


