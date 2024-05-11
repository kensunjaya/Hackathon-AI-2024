import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
  return (
    <View>
      <Image
        source={images.loginImage}
        className="w-full h-[31vh] justify-end flex flex-end align-top bg-thirdary"
        resizeMode="contain"
      />
      <View className="h-full bg-beige">
        <SafeAreaView className="bg-primary h-full rounded-t-[40px]">
          <ScrollView>
            <View className="w-full justify-center px-4">
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardTypes="email-address"
                placeholder="email"
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                placeholder="password"
                otherStyles="mt-7"
              />
              <CustomButton
                title="Login"
                handlePress={submit}
                containerStyles="w-full mt-7 bg-btn_primary"
                textStyles="text-white"
                isLoading={isSubmitting}
              />
              <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-black font-pregular">
                  Don't have account?
                </Text>
                <Link
                  href="/sign-up"
                  className="text-lg font-psemibold text-btn_primary"
                >
                  Register here
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <StatusBar />
    </View>
  );
};

export default SignIn;
