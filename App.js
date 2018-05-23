/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput
} from 'react-native';

class ShoppingListScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {   
      data: [],
      ingredients: ''};
  }
  static navigationOptions = {
    title: 'Shopping List',
};
  _handleIngredients = (text) => {
  this.setState({ ingredients: text })
  }



  render(){
      return(
          <View style = {styles.ladboy}>
            <FlatList
                data={this.state.data}
                extraData={this.state}
                renderItem={({item}) => 
                <Text style={styles.item}>{this.state.ingredients}</Text>}
              />
            <TextInput
                style={styles.input}
                onChangeText={this._handleIngredients}
                value={this.state.text}
                placeholder = 'Add Ingredients to Shopping List'
              />
            <View style = {styles.buttonshop}>
              <Button 
                title='       Add       '
                onPress={() => {
                  this.state.data.push(this.state.ingredients)
                //this.setState({isLoading: true})
                }}
                />
              
              <Button 
                title='      Clear      '
                onPress={() => {
                //this.setState({isLoading: true})
                }}
                />
            </View>
      </View>
      );
  }
}


class MainScreen extends React.Component{
  static navigationOptions ={
    title: 'Main',
  };
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.firstrow}>
      <Button 
        title='Recipes'
        disabled={true}
        onPress={() => {
          //this.setState({isLoading: true})
          //this.getQuakesAPI()
         }}
        />
      </View>
      <View style={styles.secondrow}>
        <Button 
          title='Meal Plan'
          disabled={true}
          onPress={() => {
          //this.setState({isLoading: true})
          //this.getQuakesAPI()
          }}
        />
        </View>
        <View style={styles.thirdrow}>
          <Button 
            title='Shopping List'
            onPress={
              () => navigate("ShoppingList", {})   
         }
        />
        </View>
        <View style = {styles.fourthrow}>
          <Button 
            title='Settings'
            disabled ={true}
            onPress={() => {
           }}
            />
        </View>
      </View>
    );
  }
}

const Navigation = StackNavigator({
    Main: {screen: MainScreen},
    ShoppingList: {screen: ShoppingListScreen},
    },
    {initialRouteName: 'Main',});
//stype Props = {};
export default Navigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-around',
  },

  ladboy: {
    flex: 1,
    paddingTop: 22
   },

   buttonshop: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
   },
  firstrow: {
    width: 75,
    height: 100,
    marginTop: 150,
    marginLeft: 75,
    position: 'absolute'
  },

  secondrow: {
    width: 75,
    height: 100,
    marginTop: 150,
    marginLeft: 225,
    marginRight: 50,
    position: 'absolute'
  },

  thirdrow: {
    width: 75,
    height: 100,
    marginTop: 275,
    marginLeft: 75,
    marginRight: 50,
    position: 'absolute'
  },

  fourthrow: {
    width: 75,
    height: 100,
    marginTop: 275,
    marginLeft: 225,
    marginRight: 50,
    position: 'absolute'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
});

