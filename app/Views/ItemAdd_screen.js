import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    Picker
} from 'react-native';
import { Container, Content, Toast, Root } from 'native-base';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';

export default class ItemAdd_screen extends Component {

    state = {
        name_item: '',
        image_item: '',
        location_item: '',
        status_item: 'lost',
        date_item: new Date(),
        id_category: '1',
        description_item: '',
        user_id: ''
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    handleSubmit = async () => {

        const Items = {
            name_item: this.state.name_item,
            image_item: this.state.image_item,
            location_item: this.state.location_item,
            status_item: this.state.status_item,
            date_item: this.state.date_item,
            id_category: this.state.id_category,
            description_item: this.state.description_item,
            user_id: this.state.user_id
        };

        await axios.post('http://192.168.43.108:3333/api/v1/items/', Items)
            .then(res => {
                console.log(res);
                console.log(res.data);
                Toast.show({
                    text: 'Your report success',
                    duration: 2000,
                    type: "success"
                })
            }).catch((error) => {
                alert(error)
            })
        // alert(JSON.stringify(Items))
    }

    render() {
        return (
            <Root>
                <Container>
                    <Content>
                        <View style={styles.container}>
                            <View style={{ marginBottom: 20, marginTop: 20 }}>
                                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>REPORT LOST/FOUND</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} /> */}
                                <TextInput style={styles.inputs}
                                    placeholder="Title"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name) => this.setState({ name_item: name })} />
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} /> */}
                                <TextInput style={styles.inputs}
                                    placeholder="Put url image"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(image) => this.setState({ image_item: image })} />
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                                <TextInput style={styles.inputs}
                                    placeholder="Location"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(location) => this.setState({ location_item: location })} />
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                                <Picker
                                    selectedValue={this.state.status_item}
                                    style={styles.inputs}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ status_item: itemValue })
                                    }>
                                    <Picker.Item label="Lost" value="lost" />
                                    <Picker.Item label="Found" value="found" />
                                </Picker>
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                                <DatePicker
                                    style={styles.inputs}
                                    date={this.state.date_item}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ date_item: date }) }}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                                <Picker
                                    selectedValue={this.state.id_category}
                                    style={styles.inputs}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ id_category: itemValue })
                                    }>
                                    <Picker.Item label="Goods" value="1" />
                                    <Picker.Item label="Animal" value="2" />
                                    <Picker.Item label="Person" value="3" />
                                    <Picker.Item label="Plant" value="4" />
                                </Picker>
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                                <TextInput style={styles.inputs}
                                    placeholder="description"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(description) => this.setState({ description_item: description })} />
                            </View>

                            <View style={styles.inputContainer}>
                                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                                <TextInput style={styles.inputs}
                                    placeholder="User"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(user_id) => this.setState({ user_id: user_id })} />
                            </View>

                            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.handleSubmit}>
                                <Text style={styles.signUpText}>Submit</Text>
                            </TouchableHighlight>
                        </View>
                    </Content>
                </Container>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#6fb98f",
    },
    signUpText: {
        color: 'white',
    }
});
