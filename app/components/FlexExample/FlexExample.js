
import React, {Component} from 'react';
import {
  View
} from 'react-native';

export default class FlexExample extends Component{

    render(){
        return(

            <View style={{
                flex: 1, 
                flexDirection: 'row', 
                justifyContent: 'center'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'mediumaquamarine', marginBottom: 20}}></View>
                <View style={{width: 50, height: 50, backgroundColor: '#1e90ff', marginBottom: 20}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'darkslategrey'}}></View>
            </View>
        );
    }
}