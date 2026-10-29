import { View, StyleSheet, Text, ScrollView, StatusBar } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

const menus = [
  { id: "1", name: "Greek Salad", description: "Fresh lettuce, tomatoes, olives and feta.", price: "₹180", category: "Salad" },
  { id: "2", name: "Bruschetta", description: "Toasted bread with fresh tomatoes and basil.", price: "₹140", category: "Starter" },
  { id: "3", name: "Grilled Fish", description: "Grilled fish served with seasonal vegetables.", price: "₹320", category: "Main Course" },
  { id: "4", name: "Lemon Pasta", description: "Creamy pasta with a refreshing lemon flavour.", price: "₹240", category: "Main Course" },
  { id: "5", name: "Garden Salad", description: "A colourful mix of fresh garden vegetables.", price: "₹160", category: "Salad" },
  { id: "6", name: "Roasted Potatoes", description: "Golden potatoes seasoned with herbs.", price: "₹130", category: "Side Dish" },
  { id: "7", name: "Lemon Cheesecake", description: "Smooth cheesecake with a citrus finish.", price: "₹190", category: "Dessert" },
  { id: "8", name: "Fresh Lemonade", description: "Freshly squeezed lemons with a hint of mint.", price: "₹90", category: "Drinks" },
  { id: "9", name: "Pasta Primavera", description: "Pasta tossed with seasonal vegetables.", price: "₹260", category: "Main Course" },
  { id: "10", name: "Chocolate Cake", description: "Rich chocolate cake for a sweet finish.", price: "₹170", category: "Dessert" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"  />

      {/* Fixed header */}
      <LittleLemonHeader />

      {/* Main page scroll */}
      <ScrollView
        style={styles.pageScroll}
        contentContainerStyle={styles.pageContent}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <WelcomeScreen />

        {/* Vertical menu */}
        <View style={styles.menuSection}>
          <View style={styles.sectionHeading}>
            <View>
              <Text style={styles.eyebrow}>FRESH • SIMPLE • DELICIOUS</Text>
              <Text style={styles.sectionTitle}>Our Menu 🍋</Text>
            </View>

            <View style={styles.menuCount}>
              <Text style={styles.menuCountText}>{menus.length} items</Text>
            </View>
          </View>

          <Text style={styles.sectionDescription}>
            Discover something delicious for every moment.
          </Text>

          {/* Independent vertical scrolling area */}
          <View style={styles.menuListContainer}>
            <ScrollView
              style={styles.menuScroll}
              nestedScrollEnabled
              showsVerticalScrollIndicator
            >
              {menus.map((menu) => (
                <View key={menu.id} style={styles.menuCard}>
                  <View style={styles.menuIcon}>
                    <Text style={styles.menuEmoji}>🍽️</Text>
                  </View>

                  <View style={styles.menuInfo}>
                    <Text style={styles.menuName}>{menu.name}</Text>
                    <Text style={styles.menuDescription}>
                      {menu.description}
                    </Text>
                    <Text style={styles.menuCategory}>{menu.category}</Text>
                  </View>

                  <Text style={styles.menuPrice}>{menu.price}</Text>
                </View>
              ))}

              <Text style={styles.endText}>
                You've reached the end! 🍋
              </Text>
            </ScrollView>
          </View>
        </View>

        {/* Horizontal featured menu */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Customer Favourites ⭐</Text>
          <Text style={styles.sectionDescription}>
            Swipe sideways to explore our favourites.
          </Text>

          <ScrollView
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          >
            {menus.slice(0, 6).map((menu) => (
              <View key={menu.id} style={styles.featuredCard}>
                <View style={styles.featuredEmojiContainer}>
                  <Text style={styles.featuredEmoji}>🍋</Text>
                </View>

                <Text style={styles.featuredName}>{menu.name}</Text>
                <Text style={styles.featuredPrice}>{menu.price}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Extra content to demonstrate page scrolling */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>Made with a little love 💛</Text>
          <Text style={styles.aboutDescription}>
            At Little Lemon, we believe every meal should be fresh, flavourful,
            and memorable. Come hungry, leave happy!
          </Text>
        </View>
      </ScrollView>

      {/* Fixed footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F2",
  },

  pageScroll: {
    flex: 1,
  },

  pageContent: {
    paddingBottom: 24,
  },

  menuSection: {
    backgroundColor: "#495E57",
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 20,
  },

  sectionHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  eyebrow: {
    color: "#F4CE14",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  menuCount: {
    backgroundColor: "#F4CE14",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },

  menuCountText: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "700",
  },

  sectionDescription: {
    color: "#E3E8E5",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 16,
  },

  menuListContainer: {
    height: 400,
    backgroundColor: "#F7F7F2",
    borderRadius: 14,
    overflow: "hidden",
  },

  menuScroll: {
    flex: 1,
  },

  menuCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E8E8E0",
  },

  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#FFF5C4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  menuEmoji: {
    fontSize: 24,
  },

  menuInfo: {
    flex: 1,
    paddingRight: 8,
  },

  menuName: {
    color: "#26352F",
    fontSize: 16,
    fontWeight: "800",
  },

  menuDescription: {
    color: "#727772",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },

  menuCategory: {
    color: "#495E57",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  menuPrice: {
    color: "#495E57",
    fontSize: 14,
    fontWeight: "800",
  },

  endText: {
    color: "#495E57",
    textAlign: "center",
    fontWeight: "700",
    paddingVertical: 24,
  },

  featuredSection: {
    marginTop: 24,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
  },

  featuredList: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
  },

  featuredCard: {
    width: 155,
    backgroundColor: "#F7F7F2",
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E8E8E0",
  },

  featuredEmojiContainer: {
    height: 85,
    borderRadius: 12,
    backgroundColor: "#FFF1B0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  featuredEmoji: {
    fontSize: 40,
  },

  featuredName: {
    color: "#26352F",
    fontSize: 14,
    fontWeight: "800",
  },

  featuredPrice: {
    color: "#495E57",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 6,
  },

  aboutSection: {
    margin: 16,
    padding: 20,
    backgroundColor: "#F4CE14",
    borderRadius: 18,
  },

  aboutTitle: {
    color: "#26352F",
    fontSize: 20,
    fontWeight: "800",
  },

  aboutDescription: {
    color: "#39433E",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
});
