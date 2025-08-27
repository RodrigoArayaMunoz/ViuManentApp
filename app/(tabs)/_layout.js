import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#b8983bff' }}>
      <Tabs.Screen name="App" options={{ title: 'Inicio'
      ,   tabBarIcon: ({focused}) => 
        <Ionicons 
        name={focused ? 'home' : 'home-outline'}
        size={24}
        color={focused ? '#b8983bff' : '#888'}
        />
         }}  
         />
         
      <Tabs.Screen name="Catalog" options={{ title: 'Catalogo' 
        ,   tabBarIcon: ({focused}) => 
            <Ionicons 
            name={focused ? 'cube' : 'cube-outline'}
            size={24}
            color={focused ? '#b8983bff' : '#888'}
            />


      }} 
        
      />
      <Tabs.Screen name="Tours" options={{ title: 'Tours',
        tabBarIcon: ({focused}) => 
        <Ionicons 
        name={focused ? 'earth' : 'earth-outline'}
        size={24}
        color={focused ? '#b8983bff' : '#888'}
        />
       }} />

       
      <Tabs.Screen name="Profile" options={{ title: 'Profile',
        tabBarIcon: ({focused}) => 
        <Ionicons 
        name={focused ? 'person' : 'person-outline'}
        size={24}
        color={focused ? '#b8983bff' : '#888'}
        />
       }} />
    </Tabs>
  );
};

export default TabsLayout;