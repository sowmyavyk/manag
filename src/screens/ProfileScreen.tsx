import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Bell, ChevronRight, Camera, LogOut } from "lucide-react-native"

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
        <TouchableOpacity>
          <Bell color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: "/placeholder.svg?height=100&width=100" }} style={styles.avatar} />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Manager Name</Text>
        <Text style={styles.institute}>IIIT-Bangalore</Text>
      </View>

      <View style={styles.optionsCard}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <View style={styles.optionIconContainer}>
              <Image source={{ uri: "/placeholder.svg?height=24&width=24" }} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>My Profile</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <View style={styles.optionIconContainer}>
              <Bell size={20} color="#666" />
            </View>
            <Text style={styles.optionText}>Notification</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={20} color="#666" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#22C55E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  profileSection: {
    alignItems: "center",
    padding: 20,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
  },
  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#22C55E",
    borderRadius: 15,
    padding: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  institute: {
    fontSize: 16,
    color: "#666",
  },
  optionsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 20,
    padding: 16,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#666",
  },
})

