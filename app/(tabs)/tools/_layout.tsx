import { Stack } from 'expo-router';
import React from 'react';

export default function ToolsLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" options={{ title: 'Wa Business' }} />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
