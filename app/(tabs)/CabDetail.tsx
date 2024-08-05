// CabDetail.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { db } from './FirebaseConfig';

// Define types for navigation and route parameters
type CabDetailStackParamList = {
  'Cab Detail': {
    cabId: string;
  };
};

type CabDetailScreenRouteProp = RouteProp<CabDetailStackParamList, 'Cab Detail'>;
type CabDetailScreenNavigationProp = StackNavigationProp<CabDetailStackParamList, 'Cab Detail'>;

type Props = {
  route: CabDetailScreenRouteProp;
  navigation: CabDetailScreenNavigationProp;
};

// Interface for the Cab data
interface Cab {
  cabCompanyName: string;
  carModel: string;
  numberOfPassengers: number;
  rating: number;
  costPerHour: number;
}



const CabDetail: React.FC<Props> = ({ route }) => {
  const { cabId } = route.params;
  const [cab, setCab] = useState<Cab | null>(null);

  useEffect(() => {
    const fetchCabDetail = async () => {
      const docRef = doc(db, "cabs", cabId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCab(docSnap.data() as Cab);
      } else {
        console.log("No such document!");
        // Optionally handle the case where the document doesn't exist
      }
    };

    fetchCabDetail();
  }, [cabId]);

  if (!cab) {
    return <Text>Loading...</Text>; // Display loading or not found message
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cab Company: {cab.cabCompanyName}</Text>
      <Text style={styles.detail}>Car Model: {cab.carModel}</Text>
      <Text style={styles.detail}>Passenger Limit: {cab.numberOfPassengers}</Text>
      <Text style={styles.detail}>Rating: {cab.rating}</Text>
      <Text style={styles.detail}>Cost per Hour: {cab.costPerHour}</Text>
      <Button title="Book Cab" onPress={() => {/* Implement booking logic here */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  detail: {
    fontSize: 16,
    marginBottom: 5
  }
});

export default CabDetail;
