import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import TableRows from './TableRows';
import Pagination from './Pagination';
import Colors from '../../utills/colors';

const iTable = ({ ContentMaker, tableHead, tableData, widthArr }) => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView style={styles.dataWrapper}>
          <Table>
            <Row
              data={tableHead}
              style={styles.header}
              widthArr={widthArr}
              textStyle={styles.headerText}
            />
            <TableRows
              items={currentItems}
              widthArr={widthArr}
              ContentMaker={ContentMaker}
            />
          </Table>
        </ScrollView>
      </ScrollView>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={tableData.length}
        paginate={paginate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    backgroundColor: '#fff',
    paddingBottom: 20
  },
  dataWrapper: {
    marginTop: -1,
    paddingRight: 20
  },
  header: {
    height: 50,
    backgroundColor: Colors.primary
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.light
  }
});

export default iTable;
