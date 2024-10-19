import { Stack } from 'expo-router';

export default function UpdatesLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" options={{ title: 'Wa Business' }} />
    </Stack>
  );
}
