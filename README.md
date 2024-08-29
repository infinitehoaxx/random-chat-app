# Random Chat App

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technical Stack](#technical-stack)
4. [Project Structure](#project-structure)
5. [Prerequisites](#prerequisites)
6. [Local Installation and Setup](#local-installation-and-setup)
7. [Running on Replit](#running-on-replit)
8. [Deploying on Glitch](#deploying-on-glitch)
9. [Other Deployment Options](#other-deployment-options)
10. [Customization and Extension](#customization-and-extension)
11. [Troubleshooting](#troubleshooting)
12. [Contributing](#contributing)
13. [License](#license)
14. [Contact](#contact)

## Introduction

Welcome to the Random Chat App! This application is a real-time, peer-to-peer chat platform inspired by Omegle. It allows users to engage in anonymous, one-on-one text conversations with randomly matched partners. Whether you're looking to meet new people, practice a language, or just have fun conversations, this app provides a simple and intuitive interface for connecting with others around the world.

## Features

1. **Random User Matching**: Users are automatically paired with a random chat partner when they enter the site.
2. **Real-time Messaging**: Utilizes WebSocket technology for instant message delivery.
3. **Peer-to-Peer Connection**: Direct connection between users for enhanced privacy and reduced server load.
4. **"Next" Functionality**: Users can easily end their current chat and be matched with a new random partner.
5. **Responsive Design**: Works on both desktop and mobile devices.
6. **No Registration Required**: Start chatting immediately without creating an account.
7. **Text-based Chat**: Simple and lightweight text messaging.

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express.js framework
- **Real-time Communication**: Socket.IO for signaling and PeerJS for peer-to-peer connections
- **Development Environment**: Compatible with local setup, Replit, and Glitch

## Project Structure

```
random-chat-app/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
│
├── index.js
├── package.json
└── README.md
```

- `public/`: Contains all client-side files
  - `index.html`: The main HTML file for the chat interface
  - `style.css`: Styles for the chat interface
  - `client.js`: Client-side JavaScript for managing the chat functionality
- `index.js`: The main server file
- `package.json`: Defines project dependencies and scripts
- `README.md`: This file, containing project documentation

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- npm (usually comes with Node.js)
- Git (for version control and deployment)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Local Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/infinitehoaxx/random-chat-app.git
   ```

2. Navigate to the project directory:
   ```
   cd random-chat-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000`

6. To test, open another browser window or tab and go to the same address. You should now be able to chat between the two windows.

## Running on Replit

1. Go to [Replit](https://replit.com/) and sign up or log in.
2. Click on "Create Repl" and select "Import from GitHub".
3. Paste the URL of this GitHub repository: `https://github.com/infinitehoaxx/random-chat-app.git`
4. Click on "Import from GitHub".
5. Once the project is imported, click on the "Run" button at the top.
6. Replit will install the dependencies and start the server.
7. You'll see a web view open with your application running.
8. To access the app externally, use the URL provided in the web view header.

## Deploying on Glitch

Glitch is a fantastic platform for hosting and collaboratively editing full-stack web applications. Here's a detailed guide on how to deploy your Random Chat App on Glitch:

1. **Create a Glitch Account**:
   - Go to [Glitch](https://glitch.com/)
   - Sign up for an account or log in if you already have one

2. **Create a New Project**:
   - Click on "New Project" in the Glitch dashboard
   - Select "Import from GitHub"

3. **Import Your Repository**:
   - In the pop-up, paste your GitHub repository URL: `https://github.com/infinitehoaxx/random-chat-app.git`
   - Click "OK"

4. **Wait for Import**:
   - Glitch will now import your project and install the dependencies
   - This may take a few moments

5. **Configure the Project**:
   - Once imported, click on the "Show" button at the top of the Glitch interface to view your app
   - Note the URL of your project (it will look like `https://project-name.glitch.me`)

6. **Update PeerJS Configuration**:
   - Open the `public/client.js` file in the Glitch editor
   - Locate the PeerJS configuration (around line 2-6)
   - Update it to match your Glitch project URL:

     ```javascript
     const peer = new Peer({
         host: 'your-project-name.glitch.me',
         port: 443,
         path: '/peerjs/myapp',
         secure: true
     });
     ```

7. **Ensure Correct Port**:
   - Open `index.js`
   - Make sure the server is listening on the correct port:

     ```javascript
     const PORT = process.env.PORT || 3000;
     server.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
     });
     ```

8. **Restart Your App**:
   - In the Glitch interface, go to the "Tools" button at the bottom left
   - Select "Terminal"
   - In the terminal, type `refresh` and press Enter

9. **Test Your App**:
   - Click the "Show" button again to open your app in a new tab
   - Open another browser window and navigate to the same URL
   - You should now be able to chat between the two windows

10. **Share Your App**:
    - Your app is now live! You can share the URL (`https://project-name.glitch.me`) with others
    - They can use the app without needing to sign up for Glitch

11. **Collaborate and Modify (Optional)**:
    - Glitch allows real-time collaboration. Click "Share" in the top left to invite others to view or edit your project
    - Any changes you make in the Glitch editor will automatically update your live app

Remember, Glitch projects are public by default. If you need privacy, you can upgrade to a paid plan.

## Other Deployment Options

While we've covered Replit and Glitch in detail, here are brief overviews of other hosting options:

1. **Heroku**:
   - Sign up for a [Heroku account](https://signup.heroku.com/)
   - Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
   - Follow Heroku's [deployment guide for Node.js apps](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

2. **DigitalOcean**:
   - Sign up for a [DigitalOcean account](https://www.digitalocean.com/)
   - Choose a Droplet (virtual machine) with Node.js pre-installed
   - Follow their guide on [how to deploy a Node.js app](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)

3. **AWS (Amazon Web Services)**:
   - Create an [AWS account](https://aws.amazon.com/)
   - Use Elastic Beanstalk for easy deployment of Node.js applications
   - Follow the [AWS Elastic Beanstalk deployment guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html)

Remember to update the PeerJS configuration in `public/client.js` to match your deployment URL for any of these options.

## Customization and Extension

You can extend and customize this application in many ways:

1. **User Authentication**: Implement user accounts for persistent usernames or profiles.
2. **Chat Rooms**: Add the ability to create or join themed chat rooms.
3. **Media Sharing**: Extend the app to allow sharing of images or other media.
4. **Language Filter**: Implement a profanity filter for family-friendly use.
5. **Typing Indicators**: Show when the other user is typing.
6. **Read Receipts**: Indicate when messages have been read.
7. **User Preferences**: Allow users to set preferences for matching (e.g., language, interests).

To implement these features, you'll need to modify both the server-side code (`index.js`) and the client-side code (`public/client.js`).

## Troubleshooting

Here are solutions to some common issues:

1. **Connection Failures**: 
   - Ensure your firewall isn't blocking WebSocket connections.
   - Check that the PeerJS configuration matches your deployment URL.

2. **Messages Not Sending**: 
   - Verify that both users are successfully connected.
   - Check the browser console for any error messages.

3. **'Module Not Found' Errors**: 
   - Run `npm install` to ensure all dependencies are installed.
   - Check that the package names in `require()` statements match those in `package.json`.

4. **App Crashes on Startup**:
   - Ensure the correct Node.js version is installed (check `package.json` for any engine requirements).
   - Verify that the port isn't already in use by another application.

## Contributing

We welcome contributions to the Random Chat App! Here's how you can help:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-branch-name`
6. Submit a pull request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any questions, feel free to reach out:

- **Project Maintainer**: Your Name
- **Email**: your.email@example.com
- **Project Repository**: [https://github.com/infinitehoaxx/random-chat-app](https://github.com/infinitehoaxx/random-chat-app)

We'd love to hear your feedback and suggestions for improving the Random Chat App!
