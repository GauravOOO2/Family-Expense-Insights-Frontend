import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addTransaction } from '../api';

const AddTransactionScreen = () => {
  const [memberId, setMemberId] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    const transaction = { memberId, category, amount, transactionDate: date };
    const response = await addTransaction(transaction);
    console.log(response.message);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Member ID" onChangeText={setMemberId} value={memberId} />
      <TextInput placeholder="Category" onChangeText={setCategory} value={category} />
      <TextInput placeholder="Amount" onChangeText={setAmount} value={amount} keyboardType="numeric" />
      <TextInput placeholder="Date" onChangeText={setDate} value={date} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddTransactionScreen;
