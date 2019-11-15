Project Title: Trends in Human Development 
Team members: 1) Name:  Shaju Saha; Email:ujas093017@gmail.com; A#:A02270121
    2)  Chetan Birthare; Email:chetan16994@gmail.com ;A#: A02315458
    3) Supratik Chanda; Email:supchanda08kol50@gmail.com; A#: A02273230

Github repository link: https://github.com/SupChanda/Data-Visualization-Project-

 Background and Motivation: Human Development Index is a widely accepted yardstick of assessing progress in development. This was designed to measure multiple dimensions like health, education, employment, and income. Since we found out that from 1990 to 2019, HDI is calculated on the rates of literacy, school enrollment, as well as life expectancy and many more, we thought of creating a project where we, with the help of categories,  can precisely visualise a broad view of world development parameters. These attempts of providing meticulous visualization will be directed towards analysing various parameters of living standards and will also help in giving proper evidence of progress of human capabilities. The above concepts  made us choose the HDI  project, where we analyse and present a fuller picture of every country’s human development status using various indicators and presenting in a data visualisation format.

Project Objectives: 
The aim of the project is to reflect , using Human Development Data, the various features of Human development elements like demography, education, human security, inequality and their trends from 1990 to 2017 in a sunburst chart . We, furthermore, will use a line chart to see the likelihood a country’s improvement in the various categories of human development data. Some of the primary questions are:
Whether the labour performed by a child who is under a certain age specified for that kind of work is increasing from 2010 to 2016?
Which countries are the most and the least unemployment rate recorded from 1991 to 2015
In the educational Index, which country is developed, which are developing and which remaining countries are underdeveloped.
Is forest change percentage a factor for improving the environmental sustainability? 
Which countries are the worst performers in human security? Is there a rapid increase in the suicide rates of females or males?

Taking a deep dive into the project enables us to take into the measures like education, health status, poverty, life expectancy  that would eventually reflect the true status of a country. Benefits also includes the structured analysis of the national or regional human development indices. As a group, we would try to learn why two countries with the same level of international exposure end up with two different human development outcomes. We as a group will learn the intricate details of the measures of achievement in key dimensions of human development.

Data: Accumulating complete data is the main focus of our group now. Fortunately , we got a website where we have all the data that’s needed to build the project. Some of the resources are:
http://hdr.undp.org/
https://www.kaggle.com/census/international-data#age_specific_fertility_rates.csv
http://data.un.org/en/index.html
https://www.kaggle.com/undp/human-development
https://www.kaggle.com/tjysdsg/human-development-index

Data processing: Specifically, the HDI dataset  is based on : 
Human development Index
Education
Gender,Health and Human security
Each country is indexed on those variables for every year from 1990 to 2017.  Some of the years’ data are missing for some of the human development data. We as a team will replace all the NaN values to 0 just to maintain the same datatype while extracting a particular column. Since we are using data files from other sources also, we expect to merge the multiple data excel files using pd.merge or pd.concat. This is because we want to have a single file to implement the sunburst chart. 
We are planning to download the following quantities from the data source for the following human development data categories: Human development index from 1990 to 2017,demography based population data of ages 15-64,65 and older from 1990 to 2017, for environmental sustainability: what’s the percentage of the forest area changed from from 1990 to 2016, how did the human security ( suicide rate,male and female) change over the years. 

Since labour force comprises a large chunk of the society, analysing the work, employment and vulnerability, we would try to provide answers for : 1) What is the percentage of unemployment for every country from 1990 to 2017. 2) The child labour percentage accountable to every country, starting every year from 2010-2016. 3) Youth percentage not in school or employment from 2005 to 2017. 

Another parameter worth giving a substantial glance is education. As a group, it’s worth mentioning some analysis that we will perform using data visualisation.
1) What is the literacy rate (% ages 15 or older) from 2005 to 2017. 2) Expected years of schooling, male and female(years). 3) Primary school teachers trained to teach(%) 4) Government expenditure on education(% of GDP)

Looking after our environment is something we must all be a part of. On that note we as a team, will provide in-depth analysis of environmental sustainability for the following parameters: 
1) Carbon dioxide emissions per capita(tonnes) 2) Fossil fuel energy consumption(% of total consumption) 3) Renewable Energy consumption 4) Mortality rate attributed to unsafe water, sanitation and hygiene services 5) Mortality rate accredited due to household and ambient air pollution

Recognizing the importance of appropriate data for assessing progress towards the goal of gender equality is always imperative and relevant in this modern world. This sensitive issue requires more analysis, which we describe in the following points: 1) Child marriage, women married by age 18. 2) Gender inequality index. 3)Proportion of births attended by skilled health personnel. 4) Total unemployment rate( female to male ratio) 5) Female share of employment in senior and middle management(%) 5) Gender development index

While political scientists emphasize the inequality of political power, social inequality in prestige, it is important to distinguish between inequality of opportunity. On the basis of that, here are some points that we will dig deep and bring clarity: 1) Inequality of education. 2) Inequality of income. 3) Inequality of life expectancy. 4) Inequality-adjusted  education index. 5) Overall loss of HDI due to inequality

Visualization Design: Displaying data in a precise yet informative manner should be the crux of the matter. The design palettes used are :
 1) An interactive map with circles on the countries denoting the category. The area of  the circle will denote the percentage of the HDI category. Suppose, if the country Afghanistan has more gender inequality than Armenia, then the circle in Afghanistan would be larger than Armenia. This map should be displayed automatically whenever the viewer opens the project URL. On clicking, it will show the other below charts mentioned. The reason being, a viewer may not know the name of the state but he can always click to see the categories and its related attributes like name of the state, area,latitude and longitude, etc.
 2) Now, as we go down the lane, when clicking the state, the viewer should get a clickable display where he can go and find out the human development category of that specific country and their standings. To aid to that we are inclined to have a sunburst chart with sections like HDI, Gender, Human Security, Inequality, Demography etc.. If the viewer wants to dig deep in Gender, he only has to click and the detailed sub-category and the required sunburst charts will pop up. 
 3) An info Panel for showing up the country specific data like Population, National anthem, Area etc. This is a general overview of all the static attributes that country has. The sole purpose of this display is to create an awareness of that country’s important characteristics.
4) A year chart  will show up when you click a specific human development sub-category of an already clicked country. It will show the trend of the category over the years. Now, as we are dealing with trends of a human development category, years do play a big part in deciding whether or not the country is uprising or plummeting in that sector. It is the sole reason why we have a string inherent proclivity of showing the year chart.
5) Brush technique will be implemented on the year chart, just  in case the viewer wants to show trends for multiple years.
 6) To make a visual friendly and clarifying visualisation,a  line chart would be a prefect bet to show the trend of the clicked category for all the countries. 

Additionally, we are trying to to add the compare button and a text box. The viewer would simply write the name of the country to visualise the related sunburst chart. Selecting the compare button would generate another text box where the viewer can write another country’s name.This will eventually allow the viewer to compare the human development data between the two countries. We are working on this design and yet not finalised.

Must-have features: 
An interactive world map with grid lines and countries
An info panel for displaying the static features of the countries
A sunburst chart for customized display of the human development data of that particular country
A year chart of the specified country which once clicked will show the trend of the human development data, already clicked in the sun burst chart
A line chart for the visual display of the trend with respect to years
Optional features:
A text box for the user to write the name of the country which he wants to explore
A compare button which will be available for the user, in case he wants to compare two countries and understand the differences

Project Schedule:
Within 16th Nov: Data cleaning,merging and processing.The map layout, gridlines will be dealt with. Info Panel will be created after getting the required data(Supratik and Chetan)
Within 23th Nov: The customized SunBurst chart will be made(Shaju and Chetan)
Within 28th Nov: The year chart, brush functionality and line chart will be added.(Supratik and Shaju)
