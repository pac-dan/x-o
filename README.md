![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# TIC TAC TOE BOARD GAME

Welcome to my Tic Tac Toe Game!A fully functioning board game where the player "X" can play against the computer "O".
with the computer placing completely random marks in the game it keeps every game fair!

Users of this game will learn how to strategize against the computer as they place their starting "X" mark in a different cell each game, with the computer placing truely random marks after each players turn this trains the player for all possible strategies. 

# Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

1. **Home Page (index.html)**

   - **Welcome Message**: A brief introduction to Surf N' Sail surf school, welcoming visitors and providing an overview of what the school 
    offers.
   - **Navigation Menu**: Easy-to-use navigation menu to access different sections of the website including Locations, Booking.
   - **Hero Image**: A captivating image of surfing to engage visitors right from the start.
   - **About Us Section**: A brief description of the surf school, its mission, and what sets it apart from other surf schools.
   - **Courses**: A description of our rentals and lessons offers, prices. With link to book.

2. **Locations Page (locations.html)**

   - **Beach Information**: Detailed descriptions of the various beaches where lessons are conducted. Information includes the location, features of the beach, and why it’s great for surfing.
   - **Image Gallery**: A gallery showcasing high-quality images of each beach to give visitors a visual understanding of the beautiful locations.

3. **Booking Page (booking.html)**

   - **Booking Form**: A user-friendly form where visitors can select their preferred lesson type (group, summer camp, private), date, and time.
   - **Hours Table**: A table feature that shows available times for lessons, helping users choose a convenient time.

4. **Confirmation Page (confirmation.html)**

   - **Thank You Message**: A thank you note confirming the booking and providing any necessary follow-up information or instructions.
   - **Contact Information**: Details on how to contact the surf school for any further queries or changes to the booking.

5. **Responsive Design**

   - **Mobile-Friendly Layout**: The website is fully responsive and optimized for mobile devices, ensuring a seamless experience on smartphones and tablets.

6. **Custom Styling (style.css)**

   - **Consistent Branding**: The website uses a consistent color scheme, typography, and branding elements to create a professional and cohesive look.
   - **User Experience Enhancements**: CSS animations and transitions improve user interaction and make the website more engaging.

7. **Accessibility Features**

   - **Alt Text for Images**: All images include alt text to assist users who rely on screen readers. Some alt text is shown using a hidden span as images are loaded into the css file.

8. **Performance Optimizations**

   - **Lazy Loading Images**: Images are lazy-loaded to improve initial load time and performance, especially on slower networks.
   - **Minified CSS**: CSS files are minified to reduce file size and enhance loading speed.

### Existing Features

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, Location and Booking page and is identical in each page to allow for easy navigation(Color for HOME/LOCATION/BOOK NOW changed to white in booking page for visual reasons).  
  - Nav Bar is also fixed so that it follows as you scroll so that user does not have to scroll up to change pages.

![Nav Bar]()

- __The landing page image__

  - The landing includes a photograph with text overlay to allow the user to see exactly which location this site would be applicable to. 
  - This section introduces the user to SURF N'SAIL with an eye catching animation to grab their attention.
  - With the Book Now button in the landing image customers who know what they want and just want to book can do so without having to look anywhere else. Great uf the surf school is getting a customer to book online with bad connection on a beach.

![Landing Page]()

- **About Us Section**

  - The About Us section will allow the user to get a quick understanding of who we are and what we do, as well as the benefits of Surfing with us at some of the most beautiful beaches in the world. 
  - This user will see the value of what booking a lesson can do for their surfing. This should encourage the user to consider Booking a Private/Group Lesson to make improvements on their surfing or to start off and just get the basics. 

![School Info]()

- **Courses**

  - This section will allow the user to see exactly what Courses we have to offer, having Day/Weekend Rentals and Group/Private Lessons clearly displayed on the page.
  - This section will be updated as these times change to keep the user up to date. 

![Courses]()

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for  SURF N'SAIL. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.
  - The hover feature adds responsive touch for the user letting them know it is a clickable link.
![Footer]()

- **Locations**

  - The Locations page will provide the user with supporting images to see what our Beaches and Waves look like. 
  - This section is valuable to the user as they will be able to find directions to every beach we are established and teaching at. 
  - With a colorful layout and high quality pictures users should be looking to book a lesson or get directions to come rent equipment.
![Locations]()

- **Book Now**

  - This page will allow the user to get Booked In with SURF N'SAIL to start their surfing journey with a strong knowledgable community. The user will be able specify if they would like to take part in Private, Group or Summer Camp Lessons. The user will be asked to submit their full name and email address. 

![Book Now]()

**Confirmation Page**

  - This page will inform users that they have succesfully booked and will recieve a confirmation to the users email address regarding specific booking times and conditions. Also leaving a contact number for any further questions.
  - This is also a chance to thank the user for visiting our page and that we look forward to future surf!

### Features Left to Implement

- add alt attribute in <span> hidden element for images screen readers

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- **HTML**
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
  - **index.html**     -- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fpac-dan.github.io%2Fsurf-n-sail%2Findex.html) - 
  - Relative file path -- (assets/validation-/homepage-val.png)
  - **locations.html** -- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fpac-dan.github.io%2Fsurf-n-sail%2Flocations.html) -
  - Relative file path -- (assets/validation-/locationspage-val.png)

  - **booking.html**   -- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fpac-dan.github.io%2Fsurf-n-sail%2Fbooking.html) 
  - Relative file path -- assets/validation-/bookingpage-val.png)

  - **confirmation.html** -- (https://validator.w3.org/nu/?doc=https%3A%2F%2Fpac-dan.github.io%2Fsurf-n-sail%2Fconfirmation.html%3Ffirst_name%3DDaniel%26last_name%3DJohnston%26email_address%3Ddjjohnston98%2540hotmail.com%26age%3D5%26health%3D%26lesson_date%3D2024-05-23%26lesson_time%3D10%253A30%26lesson%3Dgroup) 
  - Relative file path -- (assets/validation-/confirmationpage-val.png)


- **CSS**
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

  - Relative file path for css validation screenshot -- (assets/validation-/css-validation.png)
  - link to url css test -- (https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpac-dan.github.io%2Fsurf-n-sail%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
- Click Pages, Find Build and Deployment, select 'source'-'deploy from a branch'.
- Find 'Select Branch'-'Main Branch' Click save.
- Project now deployed and updates to new version when changes are pushed from gitpod --> github.


The live link can be found here - https://pac-dan.github.io/surf-n-sail/


## Credits 

https://www.w3schools.com/
https://kingdomwaves.com/
https://fontawesome.com/
https://www.pexels.com/search/surf/ 
https://learn.codeinstitute.net/courses


### Content 

- I took inspiration from the love running website and then used to find useful html/css/javascript tags -- https://www.w3schools.com/
- I also used a website created by the company i work for Kingdom Waves for some inspiration/content ideas -- https://kingdomwaves.com/


### Media

- I downloaded all photos from -- https://www.pexels.com/search/surf/ 
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/) 

## testing table

| action                                             |exp. behavior                           |pass / fail |
|----------------------------------------------------|----------------------------------------|------------|
|click logo                                          |load homepage                           |   pass     |
|click locations                                     |load locations                          |   pass     |
|click book now(top right nav link)                  |load book now page                      |   pass     |
|click any book now button on home page              |go to booking page                      |   pass     |
|click no booking needed button on home page         |go to home page                         |   pass     |
|click banna in where to find us section             |load banna/locations                    |   pass     |
|click inch in where to find us section              |load inch/locations                     |   pass     |
|click castlegregory in where to find us section     |load castleg/locations                  |   pass     |
|click brandonbay in where to find us section        |load brandonb/locations                 |   pass     |
|click terms of service                              |load homepage                           |   pass     |
|click privacy policy                                |load homepage                           |   pass     |
|click any social media link in footer               |load corrosponding page                 |   pass     |
|in mobile viewing click burger icon                 |open navlinks menu from right           |   pass     |
|click any "get directions" button on locations page |google maps opens with correct location |   pass     |
|form-booking section tested all fields for required |cannot submit form unless correct info  |   pass     |
|confirmation page, click return to home page        |returns to home page                    |   pass     |


**lighthouse testing**
- **home**          - assets/images/home-desk.png
                    - assets/images/home-mob.png

- **locations**     - assets/images/locations-desk.png
                    - assets/images/locations-mob.png

- **booking**       - assets/images/booking-desk.png
                    - assets/images/booking-mob.png

- **confirmation**  - assets/images/confirm-desk.png
                    - assets/images/confirm-mob.png