import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
const mushroomData = [
  {
    id: "1",
    name: "Amanita muscaria",
    image: require("C:/pgangsaldtp/assets/images/amanita.jpg"),
    desc: "Iconic red cap with white spots; highly toxic and hallucinogenic.",
    fdesc: `Amanita muscaria, also known as the fly agaric, is a highly poisonous and hallucinogenic mushroom known for its bright red cap with white spots. This mushroom is famous in folklore and can be found in temperate and boreal forests. Despite its toxic properties, it has been used in traditional medicine and as a psychoactive substance in certain cultures. Consuming Amanita muscaria can cause severe nausea, vomiting, delirium, and even death if ingested in large quantities.`,
    type: "dangerous",
  },
  {
    id: "2",
    name: "Shiitake",
    image: require("C:/pgangsaldtp/assets/images/shitake.jpg"),
    desc: "Popular edible mushroom with a rich, umami flavor; used in Asian cuisine.",
    fdesc: `The Shiitake mushroom (Lentinula edodes) is a prized edible mushroom that is native to East Asia. It is known for its meaty texture and rich, umami flavor, making it a staple in many Asian dishes, such as soups, stir-fries, and broths. Shiitakes have also been recognized for their potential health benefits, including boosting the immune system and fighting cancer. They are commonly cultivated on logs or sawdust and are available both fresh and dried.`,
    type: "healthy",
  },
  {
    id: "3",
    name: "Death Cap",
    image: require("C:/pgangsaldtp/assets/images/death.jpg"),
    desc: "Extremely poisonous and responsible for the majority of mushroom poisoning deaths.",
    fdesc: `The Death Cap (Amanita phalloides) is one of the deadliest mushrooms in the world. It is responsible for the majority of mushroom poisoning deaths globally. The mushroom has a greenish to yellowish cap and a thick white stem. It can be mistaken for edible mushrooms, such as the common mushroom (Agaricus bisporus), making it particularly dangerous for foragers. The toxins in the Death Cap cause severe liver and kidney failure, and even small amounts can be fatal if not treated immediately. There is no known antidote, making early detection and medical intervention crucial.`,
    type: "dangerous",
  },
  {
    id: "4",
    name: "Destroying Angel",
    image: require("C:/pgangsaldtp/assets/images/destroying.jpg"),
    desc: "Highly toxic mushroom resembling edible varieties, often leading to confusion.",
    fdesc: `The Destroying Angel (Amanita virosa) is a lethal mushroom that can easily be mistaken for edible species like the common mushroom. It has a white, smooth cap, white gills, and a white stem, but it is deadly if ingested. Its toxins can cause severe liver and kidney failure, leading to death within days if not treated promptly. It’s particularly dangerous due to its appearance, which is similar to harmless mushrooms, making identification critical for foragers.`,
    type: "dangerous",
  },
  {
    id: "5",
    name: "Chanterelle",
    image: require("C:/pgangsaldtp/assets/images/chanterelle.jpg"),
    desc: "Golden-yellow mushrooms with a fruity aroma, prized for their flavor.",
    fdesc: `Chanterelles (Cantharellus cibarius) are bright yellow or orange mushrooms known for their delicate, fruity scent and rich, slightly peppery flavor. They are highly sought after in cooking, particularly in gourmet dishes, because of their complex, nutty taste. Chanterelles are often found in mossy forests, growing in groups or scattered across the ground. They are safe to eat and provide numerous nutrients, including vitamins, minerals, and antioxidants.`,
    type: "healthy",
  },
  {
    id: "6",
    name: "Porcini",
    image: require("C:/pgangsaldtp/assets/images/porcini.jpg"),
    desc: "Popular in Italian cuisine, known for its nutty and earthy flavor.",
    fdesc: `Porcini mushrooms (Boletus edulis) are highly prized in Italian cuisine, where they are used fresh or dried in a variety of dishes, including pasta, soups, and sauces. They have a thick, meaty texture and a deep, nutty flavor that intensifies when dried. Porcini are a type of boletes, distinguished by their spongy underside rather than gills. They’re rich in vitamins, minerals, and fiber, making them a healthy addition to any diet.`,
    type: "healthy",
  },
  {
    id: "7",
    name: "Enoki",
    image: require("C:/pgangsaldtp/assets/images/enoki.jpeg"),
    desc: "Thin, long mushrooms commonly used in soups and stir-fries.",
    fdesc: `Enoki mushrooms (Flammulina velutipes) have long, slender stems and small white caps, making them instantly recognizable. Often used in Asian cuisine, they are a common ingredient in soups, stir-fries, and salads. Enoki mushrooms have a mild, slightly sweet taste and a crisp texture. They are low in calories but high in essential nutrients, such as vitamins B and D, and are believed to offer immune-boosting benefits.`,
    type: "healthy",
  },
  {
    id: "8",
    name: "Lion's Mane",
    image: require("C:/pgangsaldtp/assets/images/lions.jpg"),
    desc: "White, shaggy mushroom known for its seafood-like flavor and potential brain benefits.",
    fdesc: `Lion’s Mane (Hericium erinaceus) is a unique mushroom with white, spiny protrusions that resemble a lion’s mane. It has a mild, seafood-like flavor and is often used as a meat substitute in vegetarian dishes. Lion’s Mane is not only prized for its culinary qualities but also for its potential health benefits. It contains compounds that may support brain health by promoting the growth of nerve cells, making it a popular choice in medicinal mushroom use.`,
    type: "healthy",
  },
  {
    id: "9",
    name: "Turkey Tail",
    image: require("C:/pgangsaldtp/assets/images/turkey.jpg"),
    desc: "A medicinal mushroom used for boosting the immune system.",
    fdesc: `Turkey Tail (Trametes versicolor) is a medicinal mushroom commonly found on dead trees. It has a distinct, colorful appearance with bands of white, brown, and yellow that resemble the feathers of a turkey’s tail. This mushroom is known for its immune-boosting properties and is often used in traditional medicine to support overall health and fight infections. Turkey Tail contains polysaccharides that stimulate the immune system, making it a valuable natural remedy.`,
    type: "healthy",
  },
  {
    id: "10",
    name: "Skullcap",
    image: require("C:/pgangsaldtp/assets/images/skullcap.jpg"),
    desc: "Often mistaken for edible mushrooms but contains toxins.",
    fdesc: `Skullcap mushrooms (Galerina spp.) are often confused with edible species due to their similar appearance. These mushrooms contain potent toxins that can lead to severe poisoning, including liver failure. They are typically found in decaying wood and moist environments. Despite their resemblance to safe mushrooms, they are highly dangerous and should never be consumed. The symptoms of poisoning include nausea, vomiting, and liver damage, which can be fatal if not treated immediately.`,
    type: "dangerous",
  },
  {
    id: "11",
    name: "Puffball",
    image: require("C:/pgangsaldtp/assets/images/puffball.jpg"),
    desc: "Edible only when young, known for its round, white appearance.",
    fdesc: `Puffball mushrooms (Lycoperdon spp.) are round, white mushrooms that resemble small balls when young. They are edible when immature and have a mild, nutty flavor. As they mature, they turn into a spore-filled mass that releases a puff of dust when disturbed, hence the name "puffball." It’s important to harvest them when young, as mature puffballs can be toxic. Puffballs are rich in vitamins and antioxidants, offering a healthy addition to a variety of dishes.`,
    type: "healthy",
  },
  {
    id: "12",
    name: "Black Trumpet",
    image: require("C:/pgangsaldtp/assets/images/blacktrump.jpg"),
    desc: "Highly prized for its smoky flavor and dark color.",
    fdesc: `Black Trumpet (Craterellus cornucopioides) is a wild mushroom known for its trumpet-shaped appearance and dark, almost black color. It has a rich, smoky flavor that makes it a prized ingredient in cooking. Black Trumpets are typically found in damp forests and are often used in soups, sauces, and sautés. They are a good source of vitamins and minerals and are especially popular in French and Mediterranean cuisine.`,
    type: "healthy",
  },
  {
    id: "13",
    name: "King Trumpet",
    image: require("C:/pgangsaldtp/assets/images/kingtrump.jpg"),
    desc: "A versatile mushroom with a thick stem and savory flavor.",
    fdesc: `King Trumpet mushrooms (Pleurotus eryngii) are a variety of oyster mushroom with a large, thick stem and a meaty texture. Known for their rich, savory flavor, King Trumpets are commonly used in savory dishes such as stir-fries, roasts, and soups. They have a slightly smoky taste and a hearty, firm texture, making them a popular choice for vegetarians looking for a meaty mushroom alternative. King Trumpets are also a good source of protein, fiber, and essential vitamins.`,
    type: "healthy",
  },
  {
    id: "14",
    name: "Oyster Mushroom",
    image: require("C:/pgangsaldtp/assets/images/oyster.jpg"),
    desc: "Mild-tasting mushroom often used in vegetarian dishes.",
    fdesc: `Oyster mushrooms (Pleurotus ostreatus) are soft, fan-shaped mushrooms with a mild, slightly sweet flavor. They are commonly used in vegetarian cooking as a meat substitute due to their delicate texture. Oyster mushrooms can be sautéed, grilled, or used in soups, and are rich in antioxidants, vitamins, and minerals. Their versatility and mild taste make them a popular choice for a variety of dishes.`,
    type: "healthy",
  },
  {
    id: "15",
    name: "Morel",
    image: require("C:/pgangsaldtp/assets/images/morel.jpg"),
    desc: "Highly sought after for its nutty and earthy taste.",
    fdesc: `Morel mushrooms (Morchella spp.) are highly prized by chefs and mushroom enthusiasts for their distinct honeycomb-like appearance and earthy, nutty flavor. They are typically found in the spring and are a favorite in gourmet cooking, often sautéed or added to sauces. Morels are known to be rich in vitamins and minerals, though they should be cooked before consumption, as raw morels can be toxic. Their distinct taste and texture make them a rare and desirable ingredient.`,
    type: "healthy",
  },
  {
    id: "16",
    name: "Reishi",
    image: require("C:/pgangsaldtp/assets/images/reishi.jpg"),
    desc: "Known for its medicinal properties, used in traditional Chinese medicine.",
    fdesc: `Reishi mushrooms (Ganoderma lucidum) are renowned for their medicinal properties and have been used for thousands of years in traditional Chinese medicine. Known as the "mushroom of immortality," Reishi is believed to have immune-boosting, anti-inflammatory, and anti-cancer properties. The mushroom itself has a hard, woody texture, so it is usually consumed as a powder or in teas. Reishi is often used to support overall health, reduce stress, and improve sleep quality.`,
    type: "healthy",
  },
  {
    id: "17",
    name: "Button Mushroom",
    image: require("C:/pgangsaldtp/assets/images/button.jpg"),
    desc: "Commonly used in everyday cooking, mild in flavor.",
    fdesc: `Button mushrooms (Agaricus bisporus) are one of the most common and widely used mushrooms in cooking. They are small, white mushrooms with a smooth cap and mild flavor. Button mushrooms are versatile, used in everything from salads to soups to stir-fries. While they are often consumed raw, they can also be cooked to enhance their flavor. These mushrooms are rich in nutrients, including vitamins B and D, and are low in calories, making them a healthy addition to any dish.`,
    type: "healthy",
  },
  {
    id: "18",
    name: "Shaggy Mane",
    image: require("C:/pgangsaldtp/assets/images/shaggy.jpg"),
    desc: "Edible when young but turns inky as it matures.",
    fdesc: `Shaggy Mane (Coprinus comatus) is a distinctive mushroom known for its tall, shaggy white cap that resembles a hairy mane. When young, Shaggy Mane mushrooms are edible and have a delicate, mild flavor. However, as they mature, they turn into an inky liquid, making them unsuitable for consumption. Shaggy Manes are best harvested while young and tender, before the cap begins to liquefy. They are a good source of protein, fiber, and essential nutrients, and they add a unique texture to dishes.`,
    type: "healthy",
  },
  {
    id: "19",
    name: "Maitake",
    image: require("C:/pgangsaldtp/assets/images/maitake.jpg"),
    desc: "A delicious and medicinal mushroom also known as 'Hen of the Woods.'",
    fdesc: `Maitake (Grifola frondosa), also known as "Hen of the Woods," is a flavorful and medicinal mushroom that grows in large clusters, often resembling the feathers of a bird. Maitake mushrooms are prized for their rich, earthy flavor and are commonly used in soups, stir-fries, and other savory dishes. Maitake is also known for its health benefits, including immune-boosting properties and potential anti-cancer effects. It is a popular mushroom in both culinary and medicinal uses.`,
    type: "healthy",
  },
  {
    id: "20",
    name: "Ivory Funnel",
    image: require("C:/pgangsaldtp/assets/images/ivoryfun.jpg"),
    desc: "A toxic mushroom that can be mistaken for edible varieties.",
    fdesc: `Ivory Funnel (Clitocybe rivulosa) is a toxic mushroom that is often mistaken for edible varieties, like the common chanterelle. It has a pale, ivory-colored cap and a funnel-like shape, making it visually similar to other safe mushrooms. However, consuming Ivory Funnel can cause severe symptoms of poisoning, including nausea, vomiting, and diarrhea. It contains toxins that affect the digestive system and can be deadly if not treated. Proper identification is critical for foragers to avoid this dangerous species.`,
    type: "dangerous",
  },
  {
    id: "21",
    name: "Panther Cap",
    image: require("C:/pgangsaldtp/assets/images/panther.jpg"),
    desc: "Toxic mushroom resembling edible mushrooms, often leading to confusion.",
    fdesc: `Panther Cap (Amanita pantherina) is a highly toxic mushroom that closely resembles edible species, which can lead to accidental consumption. It has a characteristic reddish-brown cap, white gills, and a white stem with a bulbous base. Despite its attractiveness, the Panther Cap contains deadly toxins that can cause nausea, vomiting, and hallucinations. In severe cases, it can lead to coma and death. It is crucial to be able to distinguish it from safe mushrooms to avoid potential poisoning.`,
    type: "dangerous",
  },
  {
    id: "22",
    name: "Lilac Bonnet",
    image: require("C:/pgangsaldtp/assets/images/lilac.jpg"),
    desc: "Small mushroom with a lilac hue, mildly toxic if consumed.",
    fdesc: `Lilac Bonnet (Mycena purpureofusca) is a small, purple to lilac-colored mushroom that grows in clusters on decaying wood. While it is not highly toxic, it can cause mild symptoms of poisoning if consumed, such as nausea and vomiting. Due to its attractive color and small size, it is sometimes confused with edible mushrooms, but caution should be taken when foraging. It’s best to avoid eating this mushroom unless its identification is certain, as consuming wild mushrooms can be risky.`,
    type: "dangerous",
  },
  {
    id: "23",
    name: "Fire Mushroom",
    image: require("C:/pgangsaldtp/assets/images/fire.jpg"),
    desc: "Brightly colored mushroom often associated with folklore; toxic.",
    fdesc: `Fire Mushroom (Chamaemyces albidus) is a toxic species known for its striking bright red and orange colors, which make it an eye-catching find in the wild. It is often associated with various folklore and myths, but despite its beautiful appearance, it is highly toxic. Consumption of Fire Mushroom can cause severe stomach cramps, nausea, and vomiting. It is important to remember that the bright coloration of this mushroom is a warning sign of its toxicity.`,
    type: "dangerous",
  },
  {
    id: "24",
    name: "Halloween Mushroom",
    image: require("C:/pgangsaldtp/assets/images/halloween.jpg"),
    desc: "Toxic mushroom with a spooky appearance, often bright or unusual in color.",
    fdesc: `Halloween Mushroom (Omphalotus olearius) is a toxic mushroom that has an eerie, bioluminescent glow in the dark, which adds to its spooky appearance. It is usually found growing on decaying wood and has an orange to yellow cap. While it might seem like a magical discovery, it is poisonous and should never be consumed. Eating the Halloween Mushroom can lead to severe gastrointestinal distress, including nausea, vomiting, and diarrhea.`,
    type: "dangerous",
  },
  {
    id: "25",
    name: "Angel Wing",
    image: require("C:/pgangsaldtp/assets/images/angel.jpg"),
    desc: "A dangerous mushroom that can cause severe poisoning.",
    fdesc: `Angel Wing (Pleurocybella porrigens) is a highly toxic mushroom that resembles other edible varieties, such as oyster mushrooms. This species is found growing on decaying wood and has delicate, white, fan-shaped caps. Despite its innocent appearance, Angel Wing contains deadly toxins that can cause severe liver and kidney damage. Consumption of this mushroom can result in poisoning that may lead to death if not treated quickly.`,
    type: "dangerous",
  },
  {
    id: "26",
    name: "Royal Fly Agaric",
    image: require("C:/pgangsaldtp/assets/images/royalfly.jpg"),
    desc: "A subspecies of Amanita with unique properties, toxic.",
    fdesc: `Royal Fly Agaric (Amanita muscaria var. regalis) is a subspecies of the notorious Fly Agaric, known for its bright red cap covered with white spots. It is toxic and contains hallucinogenic compounds, which can cause delirium, dizziness, nausea, and in extreme cases, death. This mushroom has been historically used in shamanic rituals but should be avoided due to its unpredictable toxicity. The Royal Fly Agaric is highly toxic and should never be consumed.`,
    type: "dangerous",
  },
  {
    id: "27",
    name: "Webcap",
    image: require("C:/pgangsaldtp/assets/images/webcap.jpg"),
    desc: "Extremely toxic, even a small amount can cause kidney failure.",
    fdesc: `Webcap (Cortinarius spp.) is one of the most toxic mushrooms, containing deadly compounds that can cause severe kidney damage. Even small amounts of Webcap mushrooms can lead to poisoning, with symptoms including nausea, vomiting, and abdominal pain. The toxins in Webcap mushrooms cause delayed kidney failure, often showing up only after several days. Due to the risk of fatal poisoning, it is crucial to avoid this mushroom in the wild.`,
    type: "dangerous",
  },
  {
    id: "28",
    name: "Wood Ear",
    image: require("C:/pgangsaldtp/assets/images/woodear.jpg"),
    desc: "Commonly used in Asian cuisine, has a jelly-like texture.",
    fdesc: `Wood Ear mushrooms (Auricularia auricula-judae) are a type of edible fungus with a rubbery, jelly-like texture. Often used in Chinese and other Asian cuisines, Wood Ears are prized for their ability to absorb flavors in soups, stews, and stir-fries. They are rich in fiber, antioxidants, and minerals, making them a healthy addition to any diet. Wood Ears are low in calories and are believed to have potential health benefits, including improving circulation and promoting skin health.`,
    type: "healthy",
  },
  {
    id: "29",
    name: "Cremini",
    image: require("C:/pgangsaldtp/assets/images/cremini.jpg"),
    desc: "Brown version of button mushroom; slightly more flavorful.",
    fdesc: `Cremini mushrooms (Agaricus bisporus) are the brown variety of the commonly known button mushrooms. They have a slightly richer, earthier flavor compared to their white counterparts. Cremini mushrooms are commonly used in a variety of dishes, including salads, soups, and sauces. They are versatile and can be eaten raw or cooked. These mushrooms are a good source of vitamins, minerals, and antioxidants, making them a nutritious addition to any meal.`,
    type: "healthy",
  },
  {
    id: "30",
    name: "Yellow Stainer",
    image: require("C:/pgangsaldtp/assets/images/diarrhea2.jpg"),
    desc: "Resembles edible button mushrooms; causes stomach upset.",
    fdesc: `Yellow Stainer (Agaricus xanthodermus) is a mushroom that looks very similar to the common button mushroom but contains toxins that can cause severe stomach upset. When handled, the flesh of this mushroom turns yellow, hence the name "Yellow Stainer." The toxins cause nausea, vomiting, and diarrhea after consumption, and while the symptoms are not usually life-threatening, they can be extremely unpleasant. It is important to avoid eating Yellow Stainers when foraging for wild mushrooms.`,
    type: "dangerous",
  },
];
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredMushrooms, setFilteredMushrooms] = useState(mushroomData);
  const [showSplash, setShowSplash] = useState(true);
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [selectedMushroom, setSelectedMushroom] = useState(null); // State to track selected mushroom

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterMushrooms(activeFilter, query);
  };

  const filterMushrooms = (filter, query = searchQuery) => {
    let filtered = mushroomData;
    if (filter === "healthy") {
      filtered = filtered.filter((mushroom) => mushroom.type === "healthy");
    } else if (filter === "dangerous") {
      filtered = filtered.filter((mushroom) => mushroom.type === "dangerous");
    }

    if (query) {
      filtered = filtered.filter((mushroom) =>
        mushroom.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredMushrooms(filtered);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => setSelectedMushroom(item)}>
      <Card.Cover source={item.image} />
      <Card.Content>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text>{item.desc}</Text>
      </Card.Content>
    </Card>
  );

  const renderDetailView = () => (
    <View style={styles.detailContainer}>
      <Image source={selectedMushroom.image} style={styles.detailImage} />
      <Text style={styles.detailTitle}>{selectedMushroom.name}</Text>
      <Text style={styles.detailDesc}>{selectedMushroom.fdesc}</Text>
      <Button
        mode="outlined"
        onPress={() => setSelectedMushroom(null)}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </Button>
    </View>
  );

  const renderHomeScreen = () => (
    <View style={styles.homeContainer}>
      <Image
        source={require("C:/pgangsaldtp/assets/images/LOGO.png")}
        style={styles.logo}
      />
      <Text style={styles.homeTitle}>Welcome to Mushroom Explorer</Text>
      <View style={styles.buttonRow}>
        <Button
          mode="contained"
          onPress={() => setCurrentScreen("Explorer")}
          style={styles.homeButton}
        >
          Explore!
        </Button>
        <Button
          mode="contained"
          onPress={() => setCurrentScreen("Profile")}
          style={styles.homeButton}
        >
          Profile
        </Button>
      </View>
    </View>
  );

  const renderProfileScreen = () => (
    <View style={styles.profileContainer}>
      <Image
        source={require("C:/pgangsaldtp/assets/images/LOGO.png")}
        style={styles.logoProfile}
      />
      <Text style={styles.profileTitle}>Profile Page</Text>
      <Text style={styles.profileContent}>Step into the fascinating world of fungi with MushrooMate, your trusted reference for identifying, understanding, and enjoying mushrooms. Whether you're a beginner forager, a seasoned mycologist, or just someone curious about the mushrooms in your backyard, this app is designed to help you explore mushrooms safely and confidently.</Text>
      <Text style={styles.profileSocmed}>Our Instagram: @account.example</Text>
      <Text style={styles.profileSocmed}>Our Gmail: workemail@gmail.com</Text>
      <Text style={styles.profileSocmedFinal}>Our YouTube: MushrooMates</Text>
      <Button
        mode="contained"
        onPress={() => setCurrentScreen("Home")}
        style={styles.backButton}
      >
        Back to Home
      </Button>
    </View>
  );

  const renderExplorerScreen = () => (
    <>
      <TextInput
        label="Search"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <ScrollView
        horizontal
        style={styles.filterContainer}
        showsHorizontalScrollIndicator={false}
      >
        <Button
          mode={activeFilter === "healthy" ? "contained" : "outlined"}
          onPress={() => {
            setActiveFilter("healthy");
            filterMushrooms("healthy");
          }}
          style={styles.filterButton}
          labelStyle={{
            color: activeFilter === "healthy" ? "#2e7d32" : "#000000",
            fontSize: 14, // Ensure the font size fits well
          }}
        >
          Healthy Mushrooms
        </Button>
        <Button
          mode={activeFilter === "dangerous" ? "contained" : "outlined"}
          onPress={() => {
            setActiveFilter("dangerous");
            filterMushrooms("dangerous");
          }}
          style={styles.filterButton}
          labelStyle={{
            color: activeFilter === "dangerous" ? "#d32f2f" : "#000000",
            fontSize: 14, // Ensure the font size fits well
          }}
        >
          Dangerous Mushrooms
        </Button>
        <Button
          mode={activeFilter === "all" ? "contained" : "outlined"}
          onPress={() => {
            setActiveFilter("all");
            filterMushrooms("all");
          }}
          style={styles.filterButton}
          labelStyle={{
            color: activeFilter === "all" ? "#CAA8F5" : "#000000",
            fontSize: 14, // Ensure the font size fits well
          }}
        >
          All Mushrooms
        </Button>
      </ScrollView>
      <FlatList
        data={filteredMushrooms}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        mode="contained"
        onPress={() => setCurrentScreen("Home")}
        style={styles.backButton}
      >
        Back to Home
      </Button>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <View style={styles.splash}>
          <Image
            source={require("C:/pgangsaldtp/assets/images/LOGO.png")}
            style={styles.logo}
          />
        </View>
      ) : selectedMushroom ? (
        renderDetailView()
      ) : currentScreen === "Home" ? (
        renderHomeScreen()
      ) : currentScreen === "Explorer" ? (
        renderExplorerScreen()
      ) : (
        renderProfileScreen()
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
  },
  splashText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoProfile: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  searchInput: {
    marginBottom: 16,
  },
  filterContainer: {
    marginBottom: 16,
    height: 52,
  },
  filterButton: {
    marginRight: 10,
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#e8f5e9",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileContent: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  profileSocmed: {
    fontSize: 16,
    marginBottom: 3,
    textAlign: "center",
    color: "black",
  },
  profileSocmedFinal: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  detailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#646464",
  },
  detailImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailDesc: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  homeButton: {
    width: "40%",
  },
  backButtonText: {
    color: "black",
  },
});