import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  var coverImg =
    "https://t4.ftcdn.net/jpg/03/08/44/53/360_F_308445331_ZZinysRse5xOZacNTnoQqG24TAy7ftZ5.jpg";
  var logoImg =
    "https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png";
  var img =
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  var toyota =
    "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674";
  var honda =
    "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945";
  var suzukiAlto =
    "https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100";
  var hondaCivic =
    "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254";
  var suzukiCultus =
    "https://cache4.pakwheels.com/system/car_generation_pictures/6014/original/Suzuki_Cultus_-_PNG.png?1635945515";
  var suzukiWagonR =
    "https://cache4.pakwheels.com/system/car_generation_pictures/7314/original/Wagon-R.jpg?1677147187";
  var suzukiSwift =
    "https://cache1.pakwheels.com/system/car_generation_pictures/7441/original/SWIFT.jpg?1677750438";
  var toyotaYaris =
    "https://cache2.pakwheels.com/system/car_generation_pictures/6392/original/Toyota_Yaris_Front_Right_Angled.jpg?1650541837";
  // Array

  var car = [
    { tittle: "Toyota Corolla", price: "59.7-75.5", img: toyota },
    { tittle: "Honda City", price: "47.0 - 58.5", img: honda },
    { tittle: "Suzuki Alto", price: "23.3 - 30.5", img: suzukiAlto },
    { tittle: "Honda Civic", price: "83.3 - 99.0 ", img: hondaCivic },
    { tittle: "Suzuki Cultus", price: "38.6 - 43.7", img: suzukiCultus },
    { tittle: "Suzuki Wagon R", price: "32.1 - 37.4", img: suzukiWagonR },
    { tittle: "Suzuki Swift ", price: "44.2 - 51.3", img: suzukiSwift },
    { tittle: "Toyota Yaris  ", price: "44.0 - 58.5", img: toyotaYaris },
  ];

  // Array end

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Image
          source={{
            uri: logoImg,
          }}
          style={styles.logo}
        />
      </View>
      <Image
        source={{
          uri: coverImg,
        }}
        style={{ width: "100%", height: 150, opacity: 0.9 }}
      />
      <Text style={styles.text}>lorem ipsum dolor sit amet, consectetur </Text>

      <Text style={styles.hading}>Popular New Cars</Text>

      {/* start cards */}
      <ScrollView>
        <View style={styles.row}>
          {/* cards loop start*/}

          {car.map((item) => {
            return (
              <View style={styles.card}>
                <Image
                  source={{
                    uri: item.img,
                  }}
                  style={{ width: "100%", height: 100 }}
                />
                <Text style={styles.tittle}>{item.tittle}</Text>
                <Text>Rs: {item.price} Lac</Text>
              </View>
            );
          })}
          <Text style={styles.tittle}>Thanks for vist</Text>
          {/* cards loop end*/}
        </View>
        {/* start cards End */}
      </ScrollView>
    </SafeAreaView>
  );
}

// StyleSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: "center",
  },
  logo: {
    marginTop: 10,
    padding: 10,
    width: 50,
    height: 50,
    alignItems: "center",
  },
  hading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 10,
    position: "absolute",
    left: 10,
    top: 100,
    textAlign: "Left",
    color: "white",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "5",
    justifyContent: "space-around",
  },
  card: {
    width: "45%",
    borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 10,
    padding: 5,
    margin: "auto",
    marginTop: 13,
  },
  tittle: {
    fontWeight: "700",
    fontSize: 16,
  },
});
