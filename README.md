# Cordova Content Security Policy / iOS 9 ATS Demo App

## Introduction

This is a Cordova 5 app that demonstrates the steps needed to successfully make an Ajax request for data from a server, and how to configure the Content Security Policy meta tag to allow this.

For iOS 9 / Xcode 7 users this also demonstrates the configuration of App Transport Security (ATS) which by default will block non SSL requests to backend servers.

The app is very simple, it calls out to an exchange rate API (```http://api.fixer.io```) and aims to tell us the current value of the Euro in US Dollars.  It uses JQuery, but nothing about the Content Security Policy or ATS setup is framework specific - configurations apply to any JS framework.

## App Setup

TODO

## App States

There are 3 states, or steps, to this app:

* **Step 1:** Initial out of the box app using default Content Security Policy and ATS configurations that the Cordova CLI uses when creating an app.  This will fail to get the remote data on iOS < 9, iOS 9 and Android because the Content Security Policy meta tag in index.html does not permit it
* **Step 2:** Here, the Content Security Policy meta tag in index.html has been modified to allow data connections to the API that we are using.  This will work on iOS < 9 and Android, but will continue to fail on iOS 9 because even though we have Cordova configured correctly now, iOS 9 is still blocking our http URL request because the default ATS configuration disallows all non-SSL backends
* **Step 3:** Here, we have modified the iOS app's .plist to configure an ATS exception allowing non-SSL connections to our API host.  This version of the app will now work on all iOS and Android versions
