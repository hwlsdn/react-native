import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { Colors } from "../constants/colors";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}

      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={Colors.primary50} />
          </Text>
        </View>
        <UserIcon size={35} color={Colors.primary50} />
      </View>

      {/* Search Bar */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={Colors.primary50} size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={Colors.primary50} />
      </View>

      {/* Content */}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {/* Featured */}
        <FeaturedRow
          title="Featured"
          description="Paid deliveries from our partners"
          featuredCategory="featured"
        />

        {/* Tasty Discounts */}
        
        {/* Offers near you */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
