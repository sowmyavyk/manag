import type React from "react"
import { useRef, useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "OtpVerification">

export const OtpVerificationScreen: React.FC<Props> = ({ route, navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""])
  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null])

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleVerify = () => {
    // Add verification logic here
    navigation.navigate("MainTabs")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/iitblogo.png")} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.title}>Enter verification code</Text>

      <Text style={styles.description}>
        Thank you for registering with us. Please type the OTP{"\n"}
        as shared on your mobile number {route.params.phoneNumber}
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't get the OTP? No worries try again. <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

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
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1a202c",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    textAlign: "center",
    color: "#4A5568",
    marginBottom: 32,
    lineHeight: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 24,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#CBD5E0",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
  },
  resendContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  resendText: {
    color: "#4A5568",
    fontSize: 14,
  },
  resendLink: {
    color: "#28A745",
    textDecorationLine: "underline",
  },
  verifyButton: {
    backgroundColor: "#28A745",
    width: 270,
    height: 44.73,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
})

