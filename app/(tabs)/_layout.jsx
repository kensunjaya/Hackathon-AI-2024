import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";
import { icons } from "../../constants";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textRegular: {
    fontSize: 12,
    fontWeight: "400",
    color: "rgba(238, 245, 255, 1)",
  },
  textBold: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(238, 245, 255, 1)",
  },
});

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ ...styles.icon, tintColor: color }}
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"}text-xs`}
        style={{
          color: focused ? "rgba(134, 182, 246, 1)" : "rgba(238, 245, 255, 1)",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "rgba(180, 212, 255, 1)",
          },
          tabBarActiveTintColor: "rgba(134, 182, 246, 1)",
          tabBarInactiveTintColor: "rgba(238, 245, 255, 1)",
          borderTopColor: "transparent",
          borderTopWidth: 1,
          heigth: 84,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="History"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Ongoing"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
