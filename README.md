# Branayoga
Branayoga is a full-featured role-based yoga blog organized by self-contained categories and tags.
### Login as a demo user
email: demo@user.com,
password: Pass1234

# Key Features

-   Users can sign up or use a demo account.
- Users can log-in with Google credentials.
-   Users create update the profile after succesful login (username, name, profile picture, about and passwrod options)
-   Users can contact the blog admin and  other bloggers.
-   Users can see all blogs in the main blog feed.
-   Users can look up for blogs by category or tag.
- Users can quickly access related blogs in  each blog page.
- Users can post comments in each blog.
- Users can update/delete own blogs from the user's dashboard.
- Users can look up for blogs by keywords from the search bar.
- Users can write blogs by making use of different semantic mark-up uptions.

## Technologies Used

-   MongoDb
-   Express
- React
-   Node.js
-   Oauth2
-   Next.js
-   JWT
-   Cors
-   JavaScript, HTML and CSS


## Developing with Next.js 
For develping Brana Yoga I choose Next.js since it is a framework for developing production-grade React applications that can scale. It  allows developers to write server-rendered React apps easily and uses JavaScript as Node.js and React.js. Also, with this framewrok all the pages either static or dynamic are SEO (Search Engine Optimized.

 #### What happens behind the curtains?
Next.js decides if the page can be served as a dynamic page or a static page which does not need to make requests to the backend. It prefetches the pages automatically so when the home page (which is static) is loaded other pages of the site are prefetched behind the scene (this was made possible with the use of the Link component.)

The main difference I encountered was reagrding routing and a lifecycle methods. This was solved by incoporating "getInitialProps"  which makes the server-side rendring possible.
[
![Screen-Shot-2020-07-27-at-12-07-52-PM.png](https://i.postimg.cc/8cJbwbkf/Screen-Shot-2020-07-27-at-12-07-52-PM.png)](https://postimg.cc/SY48xCMm)


## Writing a blog
[![Screen-Shot-2020-07-27-at-10-57-12-AM.png](https://i.postimg.cc/GmrdrXNb/Screen-Shot-2020-07-27-at-10-57-12-AM.png)](https://postimg.cc/2VHP77rt)

Writing a blog is one of the main functionalities of the BranaYoga app.
The tool selected for the code of the app is react-quill. This allows for semantic mark-up and standardized html to concede auth users the ability of easy blog creation.
During the creation of a blog users can upload a featured image for the it besides being able to add categories and tags.

## # Minimalist and simple UI
Brana yoga features a super intuitive user-friendly interface and  sticks heavily to the color palette to allow users to remember the app and reference it . The css and styles are levereaged mainly on reactstrap with a few custom tweaks to it.
[![Whats-App-Image-2020-07-13-at-5-44-03-PM.jpg](https://i.postimg.cc/jS8BWTvd/Whats-App-Image-2020-07-13-at-5-44-03-PM.jpg)](https://postimg.cc/BjKmyddd)
## # Planned Feature Components

-    Implement sendgrid API to handle email notifications.
-   Forgot password functionality
-   Metatags inclusion for SEO improvement.


