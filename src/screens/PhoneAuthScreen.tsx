import type React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import auth from "@react-native-firebase/auth";

type Props = NativeStackScreenProps<RootStackParamList, "PhoneAuth">;

export const PhoneAuthScreen: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNext = async () => {
    if (phoneNumber.length >= 10) {
      setLoading(true);
      setError("");
      try {
        const formattedPhoneNumber = `+91${phoneNumber}`; // Format with country code
        const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber);
  
        // Ensure verificationId is not null before navigating
        if (confirmation.verificationId) {
          navigation.navigate("OtpVerification", {
            phoneNumber,
            verificationId: confirmation.verificationId,
          });
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/iitblogo.png")} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Can we get your number ?</Text>

        <View style={styles.inputContainer}>
          <View style={styles.countryCode}>
            <Text style={styles.countryCodeText}>IN +91</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>

        <Text style={styles.infoText}>
          We'll text you a code to verify you're really you.{"\n"}
          Message and data rates may apply.{" "}
          <Text style={styles.link} onPress={() => Linking.openURL("https://example.com/number-change-info")}>
            What happens if your number changes?
          </Text>
        </Text>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity
          style={[styles.button, (!phoneNumber || loading) && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!phoneNumber || loading}
        >
          <Text style={styles.buttonText}>{loading ? "Sending Code..." : "Next"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 114,
    marginBottom: 40,
  },
  logo: {
    width: 149,
    height: 123.56,
  },
  formContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
    color: "#1a202c",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  countryCode: {
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E0",
    paddingBottom: 8,
    marginRight: 12,
    width: 70,
  },
  countryCodeText: {
    fontSize: 16,
    color: "#2D3748",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E0",
    fontSize: 16,
    paddingBottom: 8,
    color: "#2D3748",
  },
  infoText: {
    fontSize: 14,
    color: "#4A5568",
    lineHeight: 20,
    marginBottom: 24,
  },
  link: {
    color: "#28A745",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#28A745",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: 270,
    height: 44.73,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonDisabled: {
    backgroundColor: "#A0AEC0",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});