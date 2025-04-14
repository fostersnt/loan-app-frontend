import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.greeting}>👋 Hello, John!</Text>
        <Text style={styles.balance}>Your balance: <Text style={styles.balanceAmount}>$1,250.00</Text></Text>

        <View style={styles.actionRow}>
          <ActionButton icon="add-circle-outline" label="Apply Loan" />
          <ActionButton icon="document-text-outline" label="My Loans" />
          <ActionButton icon="card-outline" label="Repay Loan" />
          <ActionButton icon="calculator-outline" label="Calculator" />
        </View>

        <View style={styles.loanSummary}>
          <Text style={styles.sectionTitle}>🧾 Latest Loan Summary</Text>
          <Text>Loan ID: #123456</Text>
          <Text>Status: Approved ✅</Text>
          <Text>Amount: $5,000</Text>
          <Text>EMI Due: $250 on 20th Apr</Text>
        </View>

        <TouchableOpacity style={styles.notification}>
          <Text>🔔 Notifications (1)</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.button}>
    <Icon name={icon} size={24} color="#4A90E2" />
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  balance: {
    fontSize: 16,
    marginBottom: 20,
  },
  balanceAmount: {
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 14,
  },
  loanSummary: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  notification: {
    padding: 15,
    backgroundColor: '#EAF1FB',
    borderRadius: 10,
    alignItems: 'center',
  },
});
