import { Stack } from 'expo-router';

export default function CallsLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="index"
        // options={{
        //   title: 'Wa Business',
        // }}
      />
    </Stack>
  );
}
