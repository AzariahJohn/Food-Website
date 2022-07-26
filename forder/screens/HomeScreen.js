import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { 
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
 } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    

  return (
    <SafeAreaView className="bg-white pt-5">

    {/* Headder */}

      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image 
            source={{
                uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 p-4 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location <View />
                <ChevronDownIcon size={10} color="#00CCBB"/>
            </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>

    {/* searchbox */}

        <View className="flex-row items-center space-x-2 mx-4 pb-3">
            <View className="flex-row  space-x-2 flex-1 bg-gray-200 p-3 items-center">
                <SearchIcon color="black" size={20}/>
                <TextInput 
                    placeholder='Resturants and Recepie'
                    keyboardType='default'
                />
            </View>
            <AdjustmentsIcon color="#00CCBB" />
        </View>

    {/* Body */}

        <ScrollView 
            className="bg-gray-100 pt-3"
            contentContainerStyle={{
                paddingBottom: 200
            }}
        >

            {/* Categories */}

            <Categories />

            {/* Featured Row */}

            <FeaturedRow 
                id="1"
                title="Featured"
                description="Plaid Placements from our partners"
            />
            
            <FeaturedRow 
                id="12"
                title="Tasty Discounts"
                description="Plaid Placements from our partners"
            />

            <FeaturedRow 
                id="123"
                title="Offers near you"
                description="Plaid Placements from our partners"
            />
        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen