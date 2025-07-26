import icons from "@/constants/icons";
import images from "@/constants/images";
import React from 'react';
import {Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {login} from "@/lib/appwrite";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";

const SignIn = () => {

    const {refetch, isLoggedIn, loading} = useGlobalContext()

    if (!loading && isLoggedIn) {
        return <Redirect href="/"/>
    }

    const handleLogin = async () => {
        const result = await login();

        if (result) {
            refetch()
        } else {
            Alert.alert('Alert', 'Failed to login');
        }
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="min-h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode='contain'/>
                <View className='px-10 flex flex-col'>
                    <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome to
                        Restate</Text>
                    <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                        Let's Get You Closer to {"\n"}
                        <Text className='text-primary-300'>Your Ideal Home</Text>
                    </Text>
                    <TouchableOpacity onPress={handleLogin}
                                      className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                        <View className='flex flex-row items-center justify-center'>
                            <Image source={icons.google} className="w-5 h-5" resizeMode='contain'></Image>
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">continue with google</Text>
                        </View>
                    </TouchableOpacity>

                    <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
                        Login to Restate with Google
                    </Text>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
