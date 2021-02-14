# How to integrate React Native Firebase

**Library Repo:** https://github.com/invertase/react-native-firebase

**Versions:**

- react-native: 0.63.4
- react-native-config: 1.4.2
- @react-native-firebase/app: 10.8.0

**Platforms:**

- iOS
- Android

**installation:**

```sh
yarn add @react-native-firebase/app
cd ios && pod install --repo-update
cd .. && touch prebuild-staging-ios.sh && touch prebuild-production-ios.sh
chmod +x ./prebuild-staging-ios.sh
chmod +x ./prebuild-production-ios.sh
```

**CAUTIONS**

- After installation, you have to create two seperate firebase project for staging and production.
- You should add separate iOS and Android apps for both staging and production projects.
- You should create your own goolge-service-info.plist and google.services.json files
- Don't forget add GoogleService-Info.plist file to XCode project via XCode
