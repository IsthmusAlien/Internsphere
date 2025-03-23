# Capstone Project: COVID-19 World Vaccination Progress

## About

I performed basic exploratory data analysis (EDA) using Pandas, NumPy and Matplotlib libraries on a Kaggle dataset looking at COVID-19 world vaccination progress in the period (12/2020 - 04/2021). This included data cleaning, wrangling and visualization to answer some hypotheses based on the data being explored.

##  Install

This project required Python 3.x and the following Python libraries installed:

- Pandas
- NumPy
- Matplotlib

##  Data Dictionary 

The dictionary from this dataset (country_vaccinations.csv) was obtained from:
https://www.kaggle.com/gpreda/covid-world-vaccination-progress

1. Country: this is the country for which the vaccination information is provided;
2. ISO_code: ISO code for the country.
3. Date: date for the data entry; for some of the dates we have only the daily vaccinations, for others, only the (cumulative) total.
4. Total_vaccinations: this is the absolute number of total immunizations in the country.
5. People_vaccinated: a person, depending on the immunization scheme, will receive one or more (typically 2) vaccines; at a certain moment, the number of vaccination might be larger than the number of people.
6. People_fully_vaccinated: this is the number of people that received the entire set of immunization according to the immunization scheme (typically 2); at a certain moment in time, there might be a certain number of people that received one vaccine and another number (smaller) of people that received all vaccines in the scheme.
7. Daily_vaccinations_raw: for a certain data entry, the number of vaccination for that date/country.
8. Daily_vaccinations: for a certain data entry, the number of vaccination for that date/country.
9. Total_vaccinations_per_hundred: ratio (in percent) between vaccination number and total population up to the date in the country.
10. People_vaccinated_per_hundred: ratio (in percent) between population immunized and total population up to the date in the country.
11. People_fully_vaccinated_per_hundred: ratio (in percent) between population fully immunized and total population up to the date in the country.
12. Daily_vaccinations_per_million: ratio (in ppm) between vaccination number and total population for the current date in the country.
13. Vaccines: total number of vaccines used in the country (up to date).
14. Source_name: source of the information (national authority, international organization, local organization etc.).
15. Source_website: website of the source of information
