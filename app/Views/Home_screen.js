import React, { Component } from 'react';
import { AsyncStorage, FlatList, Alert } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { getItemsUsers } from '../Redux/Actions/Items';
import { deleteItems } from '../Redux/Actions/Items';


class Home_screen extends Component {

    async cekToken() {
        const A = await AsyncStorage.getItem('token')
        alert(A)
    }

    componentDidMount() {
        // Ini menjalankan action atau fungsi
        this.getDataItemsUsers();
    }

    getDataItemsUsers = () => {
        // Didapat dari import products dari folder action
        this.props.dispatch(getItemsUsers());
    }

    deleteDataItems = (id) => {
        Alert.alert(
            'Delete Confirm',
            'Are you sure to delete your report ?',
            [
                {
                    text: 'No',
                    onDismiss: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () =>// Didapat dari import orders dari folder action
                        (
                            this.props.dispatch(deleteItems(id)),
                            this.props.dispatch(getItemsUsers())
                        )
                },
            ],
            { cancelable: false },
        );
    }

    // ======================FOR RENDERING ITEM FLATLIST==============================================

    _keyExtractor = (item, index) => item.id.toString();;

    _renderItem = ({ item }) => (
        <ListItem thumbnail onPress={() => (this.props.navigation.navigate("ItemUpdate", { id: item.id }))}>
            <Left>
                <Thumbnail square source={{ uri: item.image_item }} />
            </Left>
            <Body>
                <Text>{item.name_item}</Text>
                <Text note >{item.status_item}</Text>
            </Body>
            <Right>
                <Icon
                    size={30}
                    name="trash"
                    color="#D14836"
                    onPress={() => (this.deleteDataItems(item.id))}>
                </Icon>
            </Right>
        </ListItem>
    );

    /* ======================END RENDERING ITEM FLATLIST============================================== */

    render() {
        // console.warn(this.props.Items.detailuser)
        return (
            <Container>
                <List>
                    <FlatList
                        data={this.props.Items.detailuser}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        refreshing={this.props.Items.isLoading}
                        onRefresh={this.getDataItemsUsers}
                    />
                </List>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Items: state.Items
    }
}

export default connect(mapStateToProps)(Home_screen)