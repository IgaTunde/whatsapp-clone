import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Tools() {
  const router = useRouter();

  return (
    <View>
      <Text>tools</Text>
      <Pressable onPress={() => router.push('/tools/profile')}>
        <Text>Go to profile</Text>
      </Pressable>
    </View>
  );
}
