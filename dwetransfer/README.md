# Dwetransfer IPFS Demo App
This web application is created to demonstrate how files can be uploaded to ipfs in an simple react application.

The project uses [Web3.Storage JS SDK](https://web3.storage/docs/reference/js-client-library/#examples) to interact with IPFS. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![dwetransfer demo](https://user-images.githubusercontent.com/100632895/168742463-b209dace-22df-4f58-b175-7d77c0943d36.gif)

## How does it work? 
The single page react application will take one or more files uploaded via a simple HTML form and use the client.put(files) method provided by web3.storage package to upload them to IPFS. 

The app will display the successful dweb.link gateway url of the uploaded resources for user to download. 

The intention is user can uplaod to ipfs gateway and have the links sent to a friend via email to received and download temporarily. 

##### File Upload Page
<img width="1054" alt="Screen Shot 2022-05-17 at 4 17 50 pm" src="https://user-images.githubusercontent.com/100632895/168742576-adee4b49-a63b-487f-93ca-a5e66b7dc18d.png">

#### Upload in progress page
<img width="930" alt="Screen Shot 2022-05-17 at 4 18 19 pm" src="https://user-images.githubusercontent.com/100632895/168742676-a95742d8-6ac4-4782-9c1f-fb5b111ae0fe.png">

##### Successfully uploaded to IPFS 
<img width="967" alt="Screen Shot 2022-05-17 at 4 18 28 pm" src="https://user-images.githubusercontent.com/100632895/168742682-dc62a748-65a5-4eef-8666-9ef9ed5e872f.png">

##### Download page hosted by dweb.link
<img width="1094" alt="Screen Shot 2022-05-17 at 4 17 42 pm" src="https://user-images.githubusercontent.com/100632895/168743041-10b333e3-fc9f-450f-80ff-ff0713fee136.png">

##### Error with Web3.Storage
<img width="1044" alt="Screen Shot 2022-05-17 at 4 23 20 pm" src="https://user-images.githubusercontent.com/100632895/168742937-df9d45de-2348-48c1-82fd-3c5d53e6bbb3.png">

## Before you run

Signup with Web3.Storage
[Create an account](https://web3.storage/login/) with Web3.Storage by one click: 
<img width="876" alt="Screen Shot 2022-05-17 at 4 27 03 pm" src="https://user-images.githubusercontent.com/100632895/168743504-58a88b19-4da3-4425-a04a-818d50274aee.png">

[Get an API key](https://web3.storage/tokens/) from Web3.Storage: 
<img width="666" alt="Screen Shot 2022-05-17 at 4 32 09 pm" src="https://user-images.githubusercontent.com/100632895/168744279-76434209-b2fe-4b9b-b22d-426aed8a8e42.png">

Create a `.env` under `/dwetransfer` directory and populate it with your Web3.Storage as such: 

```shell
    REACT_APP_WEB3STORAGE_API_TOKEN={YOUR_API_TOKEN}

```

Navigate to `/dwetransfer` directory, you can build the project by running: 

`yarn` or `npm install`

![Screen Shot 2021-12-10 at 8 35 44 pm](https://user-images.githubusercontent.com/47976069/145551892-88ed76aa-2006-4729-90c0-467626f36258.png)

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
The application is hosted via Fleek. Fleek integrates with Github.com and continuously integration and deploy the main branch into the IPFS network and provide a Web 2.0 url link for the users to visit. 

Whatever is merged into main branch, fleek will recieved a github.com webhook to pull down the latest branch to build using some kind of workers. 

<img width="1171" alt="Screen Shot 2022-05-17 at 4 35 14 pm" src="https://user-images.githubusercontent.com/100632895/168744795-d4c15d48-fb11-45c4-9da7-18a8f875311c.png">

## Feature backlog
If I had more time, I would work on:  
- [ ] add "Email to:" & "Sent from:" email inputs, and integrate with an email service to send an email 
- [ ] improve error handling by mapping IPFS error with user actionable instructions
- [ ] integrate with a crypto wallet to take payment for premium featuers like permanent storage

## Development Challenges
- Fleek services was extremely easy to use but I was not able to find the secret/api key management service which cause me to drop the scope for limited time
- Proper use of state and props in react needs to be respected to avoid funky frontend lifecycle issues
- Unsure if Fleek is able to handle server side logic, so I have not created a backend