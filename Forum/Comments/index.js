import React, { useState,useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { View,Text, ListItem, Body } from 'native-base';

export default function Comments({route}) {
    const [comments, setComments] = useState([]);
    let userName = route.params.userName;
    let post = route.params.post;
    let id = post.id;
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
          .then(response => response.json())
          .then(data => setComments(data));
    })

    renderItem = ({ item }) => {
        if(item){
          return (
                <ListItem style={styles.list}>
                        <Body>
                            <Text>Subject : {item.name}</Text>
                            <Text>Comment : {item.body}</Text>
                            <Text>Email : {item.email}</Text>
                        </Body>
                </ListItem>
          ); 
        }
      };

  return (
    <View>
        <Text>Title : {post.title}</Text>
        <Text>userName : {userName}</Text>
        <Text style={styles.comment}>comments</Text>
        <FlatList
        data={comments}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    alignSelf: 'center'
  },
  list: {
    marginLeft: 0 
  }

})