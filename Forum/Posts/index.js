import React from "react";
import { FlatList,TouchableOpacity, Platform,StyleSheet } from "react-native";
import { Text, ListItem, Body,Button,Container,Header,Item,Input } from 'native-base';
import { connect } from 'react-redux';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
        input: '',
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
       .then(response => response.json())
       .then(data => this.props.addPosts(data));

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.props.addUser(data));
  }

  renderItem = ({ item }) => {
    const {users} = this.props;
    var user = users ? users.find(user => user.id == item.userId) : null;
      return (
            <ListItem style={styles.list}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Comments',{userName: user.username,post: item})}>
                    <Body>
                        <Text>Title : {item.title}</Text>
                        <Button transparent onPress={() => this.props.navigation.navigate('User',{user : user})}>
                          <Text>userName : {user ? user.username : null}</Text>
                        </Button>
                    </Body>
                </TouchableOpacity>
            </ListItem>
      ); 
  };

changeText = (value) => {
  this.setState({input : value})
}

render(){
  const {posts,users} = this.props;
  return (
    <Container>
      <Header searchBar rounded>
          <Item>
            <Input placeholder="Search..." value={ this.state.input }  onChangeText={ (text) => this.changeText(text) }/>
          </Item>
          <TouchableOpacity style={styles.searchButton} onPress={() => this.props.navigation.navigate('User',{user : users.find(user => (user.username).toUpperCase() === (this.state.input).toUpperCase())})}>
            <Text style={styles.searchBtnText}>Search</Text>
          </TouchableOpacity>
      </Header>
      <FlatList
          data={posts}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
    </Container>
  );
}
}

const styles = StyleSheet.create({
  searchButton: {
    marginTop:Platform.OS == 'ios' ? 20 : 12,
    marginLeft: 8
  },
  searchBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Platform.OS == 'ios' ? 'blue' : '#fff'
  },
  list: {
    marginLeft: 0 
  }
});

const mapStateToProps = (state) => {
  return {
      posts: state.posts,
      users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addUser: (product) => dispatch({ type: 'ADD_USERS', payload: product }),
      addPosts: (product) => dispatch({ type: 'ADD_POSTS', payload: product })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);