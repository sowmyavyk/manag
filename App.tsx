import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "@/navigation/RootNavigator";
import { firebase } from "./firebaseConfig"; // Import Firebase config
import { ActivityIndicator, View, StyleSheet } from "react-native"; // Import ActivityIndicator for loading

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebase.app().options);
      console.log('Firebase initialized successfully!');
      setFirebaseInitialized(true);
    } else {
      console.log('Firebase already initialized.');
      setFirebaseInitialized(true);
    }
  }, []);

  // Render a loading indicator until Firebase is initialized
  if (!firebaseInitialized) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#28A745" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});