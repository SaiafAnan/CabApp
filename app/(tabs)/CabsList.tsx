///CabsList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import { db } from './FirebaseConfig';

// Define the navigation types
type NavigationType = {
  CabsList: undefined;
  'Cab Detail': { cabId: string };
};

type Props = {
  navigation: StackNavigationProp<NavigationType, 'CabsList'>;
};

interface Cab {
  id: string;
  cabCompanyName: string;
  carModel: string;
}


export default function CabsList({ navigation }: Props) {
  const [cabs, setCabs] = useState<Cab[]>([]);

  useEffect(() => {
    const fetchCabs = async () => {
      const querySnapshot = await getDocs(collection(db, "cabs"));
      setCabs(querySnapshot.docs.map(doc => ({
        id: doc.id,
        cabCompanyName: doc.data().cabCompanyName,
        carModel: doc.data().carModel,
      })));
    };

    fetchCabs();
  }, []);

  return (
    <View>
      <FlatList
        data={cabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Cab Detail', { cabId: item.id })}>
            <Text>{item.cabCompanyName} - {item.carModel}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
