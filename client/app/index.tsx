import { router } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          router.replace("/chat");
        } else {
          router.replace("/auth/Auth");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        router.replace("/auth/Auth");
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading)
    return (
      <View>
        <Text>Root Layout</Text>
      </View>
    );
}
