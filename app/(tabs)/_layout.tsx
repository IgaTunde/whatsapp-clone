import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StatusBar, Pressable, View, Text } from 'react-native';

export default function TabsLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        initialRouteName="chats"
        screenOptions={{
          headerShown: true,
          headerTitle: 'WA Business',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#273443',
          },
          tabBarActiveTintColor: '#273443',
          tabBarStyle: {
            height: 100,
            paddingBottom: 10,
          },

          headerRight: () => (
            <Pressable onPress={() => console.log('Search icon pressed')}>
              <View className="flex-row items-center justify-center">
                <Ionicons
                  name="camera-outline"
                  color="white"
                  size={24}
                  style={{ marginRight: 15 }}
                />
                <Ionicons name="search" color="white" size={24} style={{ marginRight: 15 }} />
                <Ionicons
                  name="ellipsis-vertical"
                  color="white"
                  size={24}
                  style={{ marginRight: 15 }}
                />
              </View>
            </Pressable>
          ),
        }}>
        <Tabs.Screen
          name="chats"
          options={{
            title: 'Chats',
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? '#273443' : '##273443',
                  fontWeight: focused ? 'bold' : 'normal',
                  fontSize: 14,
                }}>
                Chats
              </Text>
            ),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'chatbox' : 'chatbox-outline'} color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="calls"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? '#273443' : '##273443',
                  fontWeight: focused ? 'bold' : 'normal',
                  fontSize: 14,
                }}>
                Calls
              </Text>
            ),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'call' : 'call-outline'}
                color={color}
                size={24}
                className={focused ? 'rounded-3xl bg-gray-100 px-5 py-1' : ''}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="updates"
          options={{
            title: 'Updates',
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? '#273443' : '##273443',
                  fontWeight: focused ? 'bold' : 'normal',
                  fontSize: 14,
                }}>
                Updates
              </Text>
            ),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tools"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? '#273443' : '##273443',
                  fontWeight: focused ? 'bold' : 'normal',
                  fontSize: 14,
                }}>
                Tools
              </Text>
            ),
            // tabBarIcon: ({ color, focused }) => (
            //   <FontAwesome name={focused ? 'tools' : 'wrench'} color={color} size={24} />
            // ),
          }}
        />
      </Tabs>
    </>
  );
}
