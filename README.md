# facebookBot

## Intro
A simple bot template that builds a vanilla Docker image for a NodeJS Facebook Messenger bot to run from on Google App Engine. It was originally from the quickstart template providded by [Messenger Platform docs](https://developers.facebook.com/docs/messenger-platform/guides/quick-start) on [Glitch](https://developers.facebook.com/docs/messenger-platform/guides/quick-start), but has since grown quite a bit. 

## Dependencies  

You will need to update the `config/` folder with the necessary fields. Templates have been provided. 

### Core
    Node v7.10.0
    Docker version 17.03.1-ce, build c6d412e
    Google Cloud SDK 158.0.0

### Node
    google-cloud/debug-agent": "^2.0.0"
    google-cloud/nodejs-repo-tools": "1.3.1"
    body-parser": "^1.17.1"
    chai": "^4.0.0"
    express": "^4.15.3"
    firebase-admin": "^4.2.1"
    mocha": "^3.4.2"
    nodemon": "^1.11.0"
    request": "^2.81.0"
    mocha-junit-reporter": "^1.13.0"
