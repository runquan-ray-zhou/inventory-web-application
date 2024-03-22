# General Warehouse Inventory Web App

## Introduction

Hi, my name is Runquan (Ray) Zhou, a software developer refining my skills through the Pursuit program.  This GitHub repository showcases my project, where I've replicated the "Bookstore Inventory" webpage to demonstrate my proficiency in HTML, CSS, and Javascript (DOM).  This project marks my foundational understanding of these coding language in my learning journey.  Looking ahead I aim to implement various functionalities into a comprehensive warehouse inventory web application.  The cold storage warehouse inventory webpage serves as the initial template for this ambitious project.  Thank you for taking the time to explore my work.

I gained inventory control experience at a very small frozen seafood import, export, wholesale company in Brooklyn, NY.  In this company of just 5 employees, I worked closely with the owner, handling clerical tasks and occasionally assisting with the warehouse and delivery duties.  My responsibilities included maintaining inventory control for products stored in various cold storage facilities across the US. 

I managed inventory simultaneously across at least six different warehouses using only pen, paper, and Excel sheets due to limited resources.  This restricted my ability to generate comprehensive data for the company.  It's been over 12 years since I've left the company, and I've often thought about how much more efficient I could have been with an inventory control program or app.  Now drawing from my experiences, I aim to develop such a tool.  In this GitHub repository readme, I will provide an overview and breakdown of the features and functionalities of this inventory control web application.
 
 ## Overview

This is a web application for any type of general large scale warehouse inventory control.  The first type of warehouse I based this app on is a "Cold Storage" warehouse.  Please see the following link for a more in-depth introduction and explanation of a cold storage warehouse. 

<a href="https://www.conger.com/cold-storage-warehouse/">Click here for more info on cold storage warehouses</a>

The app will have 4 different interface for each type of user. 

1.  The <u><i><b>General Admin/Warehouse Manager</b></i></u> of a company.

2.  The <u><i><b>Sales</b></i></u> of a company.

3.  The <u><i><b>Purchasers</b></i></u> of a company.

4.  The <u><i><b>Customers</b></i></u> with products in a public cold storage facilities.

Each type of user will have access to only certain parts of the app.  And the general admin will have access to all.

## Breakdown

### <u>The following is a general layout of the web app.  </u>

The body header on top will include links to an "About" page, a "How To Use" page, a "Get Help" page, a "Switch User" button, and a "Log In" button.  A "Log Out" button will display if a user is logged in.

The body main will include 4 sections.

-   Display section
-   Search Inventory section
-   Add Inventory section
-   Information section

The body footer on the bottom will include option to export selected information and other misc links.

#### Header
-   You can personalize the web app with your own company logo and company name.

#### Display Section
-   The display section will have 2 display.  One for the selected product img and the other is information on the current warehouse.

#### Search Section
-   The search section will be a form with a submit button and reset button.  Submitting the form with certain search criteria filled in.  The result will generate in the information section.

#### Add Section
-   The add section will be a form with submit button and reset button.  After putting different information in the different input boxes.  A submit will generate a new info div for this item.  It will contain all the information put in the input box.   * NOTE *  Currently, I am not using any local storage or 3 party storage for this section. I will add later on.

#### Info Section
-   The info section will display the searched inventory item.  With all the products detailed information lined under each column.  Currently, I am not using a table for this section.  I will try to do a grid style and see how that works.  I am sticking with a grid style.  I have also added the option to sort the list by clicking the corresponding button on the top row.

#### Footer
-   The footer will include a export information button.  Clicking that will export the listed items in the info section and can be printed out or attached to email.  What ever use you need.


### <u>The following list what different user type sees in their interface</u>

#### General Admin / Warehouse Manager
-   This user type will have access to all sections.  Also, this user will be able to change the different type of inputs in all sections.

![General Admin](./freezer/assets/Screenshot%20General%20Admin.png)  

#### Sales
-   This user will only have access to the Search section.  And only the Display section, Search section will be displayed.  The Add section will be replaced by a condensed version of the Info section.

*Add ScreenShot*

#### Purchasers

-   Similar to Sales interface, except the Search section will have more inputs to select from.

*Add ScreenShot*

#### Customers

-   These customers are companies that have their own product stored in public warehouses.  Again similar to the Sales interface.

*Add ScreenShot*

## Conclusion

This concludes a detailed explanation of the "General Warehouse Inventory Web App".  I will include more details as I progress along the way in improving this.  If you have any questions or suggestions, feel free to contact me. 

* Runquan (Ray) Zhou
* Pursuit Fellow
* 10.6 Nights & Weekends
* rzhou@pursuit.org

