import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getMemberContribution, getSavingsOptimization } from '../api';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [savingsData, setSavingsData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Example static transactions data
    const transactions = [
      { memberId: '1', amount: 100, transactionDate: '2024-01-01' },
      { memberId: '2', amount: 200, transactionDate: '2024-01-02' },
    ];

    getMemberContribution(transactions).then(setData);
    getSavingsOptimization({
      familyIncome: 50000,
      savings: 10000,
      totalExpenses: 30000,
      dependents: 2,
      monthlyExpenses: 1500,
    }).then(setSavingsData);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card>
        <Text>Total Family Expenses: {data?.totalExpenses}</Text>
        <Text>Highest Spender: {data?.highestSpender?.memberId}</Text>
        <Text>Suggested Savings Percentage: {savingsData?.suggestedSavingPercentage}%</Text>
        <Text>Spending Status: {savingsData?.spendingStatus}</Text>
      </Card>
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
    </ScrollView>
  );
};

export default HomeScreen;
