import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Modal } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Star, Edit2, ChevronDown, Download } from "lucide-react-native"

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            fill={star <= rating ? "#FFB800" : "#E2E8F0"}
            color={star <= rating ? "#FFB800" : "#E2E8F0"}
            style={styles.starSpacing}
          />
        ))}
      </View>
      <Text style={styles.ratingText}>{rating}/5</Text>
    </View>
  )
}

const MenuItem = ({
  title,
  time,
  items,
  rating,
  feedback,
}: {
  title: string
  time: string
  items: string
  rating: number
  feedback: string
}) => (
  <View style={styles.menuItem}>
    <View style={styles.menuHeader}>
      <View>
        <Text style={styles.menuTitle}>{title}</Text>
        <View style={styles.menuDetailsContainer}>
          <Text style={styles.menuItems}>{items}</Text>
          <Text style={styles.menuTime}>{time}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Edit2 size={20} color="#666" />
      </TouchableOpacity>
    </View>
    <View style={styles.ratingWrapper}>
      <RatingStars rating={rating} />
    </View>
    <Text style={styles.ratingInfo}>1200 Students marked the rating today</Text>
    <View style={styles.feedbackContainer}>
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
    <Text style={styles.studentsInfo}>1200 Students had their food today</Text>
  </View>
)

export const MessScreen = () => {
  const [activeTab, setActiveTab] = useState("Menu Sheet")
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [isDayPickerVisible, setIsDayPickerVisible] = useState(false)

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hi Manager !</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Menu Sheet" && styles.activeTab]}
          onPress={() => setActiveTab("Menu Sheet")}
        >
          <Text style={[styles.tabText, activeTab === "Menu Sheet" && styles.activeTabText]}>Menu Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Mess off Students" && styles.activeTab]}
          onPress={() => setActiveTab("Mess off Students")}
        >
          <Text style={[styles.tabText, activeTab === "Mess off Students" && styles.activeTabText]}>
            Mess off Students
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Today's Menu</Text>

        <Image source={require("../../assets/rating-image.png")} style={styles.menuImage} resizeMode="contain" />

        <View style={styles.messageInputContainer}>
          <TextInput placeholder="Enter your message here" style={styles.input} />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.daySelector} onPress={() => setIsDayPickerVisible(true)}>
          <Text style={styles.dayText}>{selectedDay}</Text>
          <ChevronDown size={20} color="#fff" />
        </TouchableOpacity>

        <MenuItem
          title="Lunch"
          items="Rajma, Roti, Rice, Salad and Dahi"
          time="12:00 - 2:00 PM"
          rating={4}
          feedback="Today lunch was too spicy. Please decrease spicyness, we need less spicyness. Please look into this food committee."
        />

        <MenuItem
          title="Dinner"
          items="Mix Veg, Dal, Roti, and Rice"
          time="8:00 - 10:00 PM"
          rating={4}
          feedback="Today Dinner was too good. Please decrease spicyness, we need less spicyness. Please look into this food committee."
        />

        <MenuItem
          title="Snacks"
          items="Aloo parathe, Dahi and chai"
          time="8:00 - 10:00 Am"
          rating={4}
          feedback="Today Snacks were delicious. Please maintain this quality, we appreciate the effort. Keep up the good work food committee."
        />

        <MenuItem
          title="Breakfast"
          items="Aloo parathe, Dahi and chai"
          time="4:40 - 5:45 PM"
          rating={4}
          feedback="Today Breakfast was satisfying. The variety was good, but we'd like more options for beverages. Please consider this, food committee."
        />

        <View style={styles.summary}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>OVER ALL FOOD RATING TODAY (DD/MM/YYYY)</Text>
            <Text style={styles.summaryRating}>20/16</Text>
          </View>
          <Text style={styles.summaryText}>
            Total 4,800 students had their food today.{"\n"}
            Calculated as per their ratings .
          </Text>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadText}>Download the feedback sheet here</Text>
            <Download size={20} color="#868686" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={isDayPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsDayPickerVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {days.map((day) => (
              <TouchableOpacity
                key={day}
                style={styles.dayOption}
                onPress={() => {
                  setSelectedDay(day)
                  setIsDayPickerVisible(false)
                }}
              >
                <Text style={styles.dayOptionText}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#28A745",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#28A745",
  },
  tabText: {
    color: "#666",
    fontSize: 16,
  },
  activeTabText: {
    color: "#28A745",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    color: "#28A745",
  },
  menuImage: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  messageInputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    flex: 1,
    height: 57,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#FFFFFF",
  },
  sendButton: {
    backgroundColor: "#28A745",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  sendButtonText: {
    color: "#fff",
  },
  daySelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#727070",
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
    width: 108.55,
    height: 30,
  },
  dayText: {
    color: "#fff",
  },
  menuItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 4,
    color: "#2D2D2D",
    fontFamily: "Poppins",
  },
  menuDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItems: {
    color: "#868686",
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Poppins",
    width: 216,
  },
  menuTime: {
    color: "#868686",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  ratingWrapper: {
    alignItems: "center",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  starSpacing: {
    marginHorizontal: 2,
  },
  ratingText: {
    marginLeft: 8,
    color: "#666",
  },
  ratingInfo: {
    color: "#868686",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    marginBottom: 8,
    textAlign: "center",
  },
  feedbackContainer: {
    width: 342,
    minHeight: 97.57,
    padding: 9,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 8,
  },
  feedback: {
    color: "#666",
    fontSize: 13,
    fontFamily: "Poppins",
  },
  studentsInfo: {
    color: "#868686",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  summary: {
    width: 342,
    height: 124,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  summaryTitle: {
    width: 243,
    fontSize: 10,
    fontWeight: "700",
    color: "#868686",
    fontFamily: "Poppins",
  },
  summaryRating: {
    width: 38,
    fontSize: 14,
    fontWeight: "700",
    color: "#727070",
    fontFamily: "Heebo",
  },
  summaryText: {
    color: "#868686",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    marginBottom: 8,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  downloadText: {
    color: "#868686",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    marginRight: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    width: "80%",
  },
  dayOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  dayOptionText: {
    fontSize: 16,
    color: "#333",
  },
})

