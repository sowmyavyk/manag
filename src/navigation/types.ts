// @/navigation/types.ts
export type RootStackParamList = {
  PhoneAuth: undefined;
  OtpVerification: { phoneNumber: string; verificationId: string | null }; // Allow verificationId to be string | null
  MainTabs: undefined;
};

export type MainTabParamList = {
  Profile: undefined;
  Mess: undefined;
};