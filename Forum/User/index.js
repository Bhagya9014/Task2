import React from "react";
import { View,Text } from 'native-base';

export default function User({route}) {
    let user = route.params.user;
  return (
    <View>
        <Text>userName : {user.username}</Text>
        <Text>Name : {user.name}</Text>
        <Text>email : {user.email}</Text>
        <Text>website : {user.website}</Text>
        <Text>company name: {user.company.name}</Text>
        <Text>company bs: {user.company.bs}</Text>
        <Text>company catchPhrase: {user.company.catchPhrase}</Text>
    </View>
  );
}