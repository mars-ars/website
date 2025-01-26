# MARS Amateur Radio Society

## About

* This is a fully static web application based on GatsbyJS framework which is built upon ReactJS.
* The web page is designed to be modifiable even by non-developers who can understand the [Markdown syntax](https://www.markdownguide.org/)

## Image optimizations
* We have lots of high resolution images to be shown at a single page. The page might hang-off on slow devices or devices with low network bandwidth.
* So we do not fetch the highest resolution images at the start.
* When the user clicks on an image, the highest resolution version of that image is downloaded and shown on the screen.

## Architecture
### Web Page
* For storing our code, we use GitHub.
* Here is the repository - https://github.com/mars-ars/website
* This is a ReactJS based codebase and so there is a build step needed which would generate the final static content to be hosted in a static file server.
* This repository doesn't contain anything other than code. So Images, newsletters and other heavy content are to be uploaded to the Google Clould Storage bucket and only the public link is to be used.
### Storage
* For storing all our assets (Images and Newsletters), we use Cloud Storage from Google Cloud Platform.
* Here is the bucket - https://console.cloud.google.com/storage/browser/mars-ars-assets;tab=objects?project=mars-ars
### Image rendering
* We use a service called Imgix which would attach itself with the Google Cloud Storage bucket mentioned above.
* This service would download images from Google Cloud Storage and accept URL query parameters which we can use in our website to ask for smaller versions of the images.
* Here is the page - https://dashboard.imgix.com/assets/6794caf21dd5c89024bbe84f
* Login with Google - marsamateur@gmail.com
### Hosting
* For hosting, we use Firebase (a subsidiary of Google Cloud Platform)
* Here is the console - https://console.firebase.google.com/u/0/project/mars-b6030/hosting/sites/mars-b6030

## Making changes
### SDLC - Software Development Lifecycle
* After changing the website we cannot directly host the changes like it is a simple HTML bassed Web application. We need to build the React code into static web files that needs to be hosted.
* However this process is automated by the use of GitHub actions and Firebase Hosting's APIs.
* Any code that is pushed to the 'main' branch in the GitHub repo mentioned above would automatically trigger build and the changes would get published to the FireBase hosting mentioned above.
* To check if the deployment is successful, you can check this page `https://github.com/mars-ars/website/actions`, or check for a small green tick mark near the commit name in the repo home page.
* To test the changes in local, you need to have NodeJS 18 and NPM 8 installed.
```
# First run `npm ci` at the project root directory to install all dependencies
# Then run `npm run develop` at the project's root directory to start the development server.
# The webpage would be available at https://localhost:3000.
# Any change you save would automatically get reflected in the browser for immediate testing.

# To deploy to FireBase from local, run `npm run deploy`

# To run Firebase emulators in local, run `npm run emulators`
```
* However if you do not have the setup in local, or wish to preview and test in FireBase itself, it is not recommended to directly push to the `main` branch as that would mean that users would immediately receive the new website.
* To preview any change in FireBase, in a different URL, you need to push your changes to another branch in GitHub and open a Pull Request to the main `branch`.
* This would automatically trigger build and deploy in another URL. FireBase would add a comment in the Pull Request with the details of where to access the URL.
* So all you need to do is to make changes and push them to the correct branch.
### Handling Assets
* As we saw above, the code is React based and the repository doesn't contain any images or image-like assets.
* So if we have any such assets, we first have to upload them to the Google Clould Storage. This is not done directly, but through the IMGIX link mentioned above.
* To upload images, upload to imgix using the proper folder name
* Then the public link of that asset exposed via IMGIX must be used in the React code so that the assets are downloaded directly in the user's browser from Google Cloud Storage directly
### Content changes
* Here most of the code is based on MDX (Markdown). Refer the files inside `/src/pages`
* If you want to add a new tab, you have to create a new mdx file with the appropriate name.
* If you need to alter the content in an already existing tab, you can do so by altering the existing MDX files.
* For example, if you change the title and the mission statement of the website home page, you can edit the content within this file - `/src/pages/index.mdx`
#### Adding a newsletter
* First upload the new newsletter inside the appropriate place in the Google Clould Storage
* Then get the public link for that file. Try hitting that URL from the browser - that newsletter must now be downloaded.
* Now add an entry to this file - `/src/pages/newsletters.mdx`
#### Adding/Editing an event
* Note the folder structure of `/src/pages/events`.
* There is one MDX file for each event, aptly named.
* There is a file called index.js - `/src/pages/events/index.mdx`. This file lists links to all other events
* To edit an event, you need to edit the appropriate MDX file - for example `/src/pages/events/event004.mdx`
* Study the structure of each MDX file.
* To add a new event, you need to add a new MDX file. Refer the content of the other files to create this, and change appropriate files.
* Then edit the file `/src/pages/events/index.mdx` to add a link to the new MDX file.
#### Handling Images in the events page
* As we saw in one of the top sections, we handle images very carefully.
* This is the tough part to manage in a free website as we need to manage all optimizations ourselves. It would be easier to rent a place in Flickr for MARS and host all images there, sharing a link in our website.
* So we use another free service called IMGIX. This attaches itself with the Google Cloud Storage bucket and exposes the ability for us to request for a smaller image on the fly.
* Upload all images you need through IMGIX to an appropriate folder within the Google Cloud Storage bucket.
* Note all the file names and put them in `/src/components/PhotoGallery.js`. Code does not yet have the ability to automatically list the images uploaded and render them. It needs the names of the files.
* Verify once if all your changes are good to go!