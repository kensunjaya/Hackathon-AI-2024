import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    nik: "",
    namaLengkap: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    if (form.nik === "" || form.namaLengkap === "" || form.email === "" || form.password === "" || confirmPassword === "") {
      Alert.alert('Error', 'Please fill in all the fields');
    }
    else if (form.password !== confirmPassword) {
      Alert.alert('Error', 'Password does not match');
    }
    else {
      router.push("/home");
    }
  };
  return (
    <View>
      <Image
        source={images.registerImage}
        className="w-full h-[25vh] justify-end flex flex-end align-top bg-thirdary"
        resizeMode="contain"
      />
      <View className="h-full bg-beige">
        <ScrollView className="bg-primary h-full rounded-t-[40px] pt-3 w-full px-4">
            <FormField
              title="NIK"
              value={form.nik}
              handleChangeText={(e) => setForm({ ...form, nik: e })}
              otherStyles="mt-7"
              placeholder="NIK"
            />
            <FormField
              title="Nama Lengkap"
              value={form.namaLengkap}
              handleChangeText={(e) => setForm({ ...form, namaLengkap: e })}
              otherStyles="mt-7"
              placeholder="Nama Lengkap"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              placeholder="Email"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              placeholder="Password"
              otherStyles="mt-7"
            />
            <FormField
              title="Password"
              value={confirmPassword}
              handleChangeText={(e) => setConfirmPassword(e)}
              placeholder="Konfirmasi Password"
              otherStyles="mt-7"
            />
            <CustomButton
              title="Register"
              handlePress={submit}
              containerStyles="w-full mt-7 bg-btn_primary"
              textStyles="text-white"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-black font-pregular">
                Already have an account?
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold text-btn_primary"
              >
                Login here
              </Link>
            </View>

        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;
