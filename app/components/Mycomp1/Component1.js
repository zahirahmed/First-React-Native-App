
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  Alert
} from 'react-native';

export default class Component1 extends Component {

    render(){
        return (

            <View style={styles.body}>

                <Image 
                    height='200'
                    width='200' 
                    style={{backgroundColor: 'black'}}
                    source={{uri: 'https://www.logomadeeasy.com/wp-content/uploads/2018/08/Cannabis-logo.jpg'}}/>

                <View style={styles.sectionContainer}>

                    <Text style={styles.sectionTitle}>Login</Text>

                    <Text style={styles.sectionDescription}>

                      Login to continue.

                    </Text>

                    <TextInput
                        placeholder='Email Address'
                        style={{
                            borderColor: '#f4f4f4',
                            borderWidth: 1,
                            marginTop: 80,
                            paddingLeft: 10,
                            shadowRadius: 10,
                            borderBottomColor: '#1e90ff'
                          }}
                          keyboardType='email-address'
                    />
                    
                    <TextInput
                        placeholder='Password'
                        style={{
                            borderColor: '#f4f4f4',
                            borderWidth: 1,
                            marginTop: 40,
                            paddingLeft: 10,
                            shadowRadius: 10,
                            borderBottomColor: '#1e90ff'
                          }}
                          secureTextEntry={true}
                    />

                    <View 
                        style={{
                            marginTop: 50
                        }}>
                        <Button 
                            style={{
                                marginTop: 20
                            }}
                            title='Login'
                            onPress={() =>{
                                alert('Login is under process.');
                            }}
                        />
                    </View>

                    <Text style={styles.txtForgot}>Forgot Password?</Text>
                    <Text style={styles.txtForgot}>Don't have an Account? Signup</Text>

{/* 
                <View>
                    <View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
                    <View style={{width: 200, height: 200, backgroundColor: 'red'}}></View>
                    <View style={{width: 200, height: 200, backgroundColor: 'cyan'}}></View>
                </View> */}

                </View>
              
            </View>

        );
    }
  
}


const styles = StyleSheet.create({
  
  body: {
    flex:1,  
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    shadowRadius: 20,
    shadowColor: '#f4f4f4',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  txtForgot: {
    marginTop: 40,
    fontSize: 14,
    fontWeight: '200',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },

});


