import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar hidden={true}  /> */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
