import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TableWrapper, Cell } from 'react-native-table-component';
import Colors from '../../utills/colors';

const TableRows = ({ ContentMaker, items, widthArr }) => {
  return (
    <View>
      {items.map((rowData, index) => (
        <TableWrapper
          key={index}
          style={styles.row}
          textStyle={styles.headerText}
        >
          {rowData.map((cellData, cellIndex) => (
            <Cell
              key={cellIndex}
              data={<ContentMaker data={cellData} index={cellIndex} />}
              style={{ width: widthArr[cellIndex] }}
              textStyle={styles.text}
            />
          ))}
        </TableWrapper>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.light
  },
  text: {
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 20
  }
});

export default TableRows;
