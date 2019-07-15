import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import Colors from '../../utills/colors';
import { ScrollView } from 'react-native-gesture-handler';

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces>
      <View style={styles.container}>
        <View style={styles.pageNumberContainer}>
          {pageNumbers.map(number => (
            <View key={number} style={styles.pageNumber}>
              <Button
                onPress={() => paginate(number)}
                style={number === currentPage ? styles.active : styles.button}
              >
                <Text>{number}</Text>
              </Button>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingRight: 200
  },
  pageNumberContainer: {
    flexDirection: 'row'
  },
  pageNumber: {
    paddingLeft: 4,
    borderRadius: 2
  },
  button: {
    backgroundColor: Colors.gray,
    borderRadius: 3
  },
  active: {
    backgroundColor: Colors.primary
  }
});

export default Pagination;
