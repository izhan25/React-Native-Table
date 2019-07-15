### Follow the steps to use this Table Components:

## Preview

Page 1            |  Page 2
:-------------------------:|:-------------------------:
![IMG 1](images/img1.png?raw=true "Image 1")  |  ![IMG 2](images/img2.png?raw=true "Image 1")




## Step 1:
Define Your States:

    // Define your states like this

    const [tableHead] = useState(['Sr.', 'Name', 'Icon', 'Color', 'Actions']);

    const [widthArr] = useState([40, 120, 80, 80, 150]); // width for each column

    const [tableData] = useState([
        ['1', 'Annual', 'annual', '#2a7c7c', 'button'],
        ['2', 'Sick', 'sick', '#0062ff', 'button'],
    ]);

## Step 2:
Pass The States

    // Then pass the states like this
    <Table
        tableHead={tableHead} 
        tableData={tableData} 
        widthArr={widthArr} 
        ContentMaker={LeavesCellContentMaker}
    >
Notice that I have passed a component in ContentMaker prop named *LeavesCellContentMaker*, The JSX of this component is in the end of the document for your help.


## Help: LeavesCellContentMaker
Make your component which will Render the cell content, I have mine like this

    // JSX of LeavesCellContentMaker

    import React from 'react';
    import { View, Image } from 'react-native';
    import { Button, Icon, Text } from 'native-base';

    const CellContentMaker = ({ data, index }) => {
        if (index === 1) {
            return (
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={{ paddingHorizontal: 5, fontSize: 18 }}>{data}</Text>
                </View>
            );
        }
        if (index === 2) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <Image
                    source={getIcon(data)}
                    style={{ resizeMode: 'contain', width: 35, height: 35 }}
                    />
                </View>
            );
        } else if (index === 3) {
            return (
                <View
                    style={{
                    alignItems: 'center'
                    }}
                >
                    <View style={{ width: 20, height: 20, backgroundColor: data }} />
                </View>
            );
        } else if (index === 4) {
            return (
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Button icon transparent>
                    <Icon name="create" />
                    </Button>

                    <Button icon transparent danger>
                    <Icon name="trash" />
                    </Button>
                </View>
            );
        }

        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>{data}</Text>
            </View>
        );
    };

    function getIcon(type) {
        switch (type) {
            case 'casual':
                return require('/assets/images/icons/casual_Leave.png');
            case 'annual':
                return require('/assets/images/icons/annual_Leave.png');
            case 'sick':
                return require('/assets/images/icons/sick_Leave.png');
            default:
                return require('/assets/images/icons/android-flat.png');
        }
    }

    export default CellContentMaker;

