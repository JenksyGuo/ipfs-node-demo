# Dwetransfer IPFS Demo App
This web application is created to demonstrate how files can be uploaded to ipfs in an simple react application.

The project uses ipfs-http-client package to interface with the ipfs core API. It also relies on the [ipfs daemon/service](https://docs.ipfs.io/how-to/command-line-quick-start/#take-your-node-online) running on localhost:5001 port.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Dec-10-2021 20-59-59](https://user-images.githubusercontent.com/47976069/145555506-ba8e4607-12b0-46bb-bc4d-1edc303ef330.gif)


## How does it work? 
The single page react application will take one or more files uploaded via a simple HTML form and use the ipfs.addAll() method provided by ipfs-http-client package to interface with IPF core APIs. The application must run side by side with a IPF node on the server to access IPF network. 

The app will display the successful ipfs.io gateway url of the uploaded resources for user to download. 

The intention is user can uplaod to ipfs gateway and have the links sent to a friend via email to received and download temporarily. 

The future state of the app will be to provide permanent storage solution by integrating to a pinning service such as Pinata to allow users get the permanent links for a fee. 

##### File Upload Page
![Screen Shot 2021-12-10 at 9 19 59 pm](https://user-images.githubusercontent.com/47976069/145558155-2d1eb6e7-fdfd-4873-8387-28f15fa556f9.png)

##### Successfully uploaded to IPFS 
![Screen Shot 2021-12-10 at 9 20 13 pm](https://user-images.githubusercontent.com/47976069/145558181-78c13c47-436d-440b-9e40-59cf8666d84b.png)

##### Error with IPFS node
![Screen Shot 2021-12-10 at 9 22 17 pm](https://user-images.githubusercontent.com/47976069/145558454-55f55ab5-6874-4580-bc8a-6f9f97e5afde.png)

## Before you run
Navigate to /dwetransfer direction, you can build the project by running: 

`yarn` or `npm install`

![Screen Shot 2021-12-10 at 8 35 44 pm](https://user-images.githubusercontent.com/47976069/145551892-88ed76aa-2006-4729-90c0-467626f36258.png)


Don't forget to start your ipfs daemon on your local machine/server:

`ipfs daemon`

and ensure the services are listening on `https://localhost:5001`

![Screen Shot 2021-12-10 at 8 32 52 pm](https://user-images.githubusercontent.com/47976069/145551525-201985f2-1b13-4a26-a0c7-36c8f7aea91c.png)


A quick test is to visit the ipfs webui at [https://localhost:5001/webui](https://localhost:5001/webui)

![Screen Shot 2021-12-10 at 8 34 41 pm](https://user-images.githubusercontent.com/47976069/145551677-8cd60724-1c84-422d-8976-81e782ce47e5.png)

If you can see the web UI then you are all good to go. 

##  To run the application
Navigate to /dtransfer directory, you can run:

`yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### To package the application for deployment

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## CD/CI Deployment (powered by Fleek)
The application is hosted via IPFS partner Fleek. Fleek integrates with Github.com and continuously integration and deploy the main branch into the IPFS network and provide a Web 2.0 url link for the users to visit. 

Whatever is merged into main branch, fleek will recieved a github.com webhook to pull down the latest branch to build using some kind of workers. 

Currently the deployed site is live at: 
[https://patient-union-5647.on.fleek.co/](https://patient-union-5647.on.fleek.co/)

![Screen Shot 2021-12-10 at 9 34 12 pm](https://user-images.githubusercontent.com/47976069/145560263-3b2bffca-dac7-4752-ad87-c77b598b9f7d.png)


## Feature backlog
If I had more time, I would work on:  
- [ ] add "Email to:" & "Sent from:" email inputs, and integrate with an email service to send an email 
- [ ] improve error handling by mapping IPFS error with user actionable instructions
- [ ] integrate with pinning service to provide long term storage for a fee
- [ ] integrate with a crypto wallet to take payment for premium featuers like permanent storage

## Development Challenges
- Fleek services was extremely easy to use but I was not able to find the secret/api key management service which cause me to drop the scope for limited time
- Proper use of state and props in react needs to be respected to avoid funky frontend lifecycle issues
- Unsure if Fleek is able to handle server side logic, so I have not created a backend