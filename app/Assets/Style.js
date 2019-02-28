'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    buttonCustom: {
        flex: 1, marginTop: 20, backgroundColor: "#6fb98f", alignItems: 'center', alignContent: 'center', justifyContent: "center"
    },
    buttonCustomSmall: {
        flex: 1, marginTop: 15, backgroundColor: "#6fb98f", alignItems: 'center', alignContent: 'center', justifyContent: "center", height: 30
    },
    titleCustom: {
        color: "#011b1d", fontSize: 18, fontWeight: "bold" 
    },
    smallTitleCustom: {
        color: "#011b1d", fontSize: 8, fontWeight: "bold"
    },
    statusItemLost: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute', // child
        top: 7, // position where you want
        right: 7,
        padding: 7,
        fontSize: 12,
        zIndex: 2,
        width: 70,
        textAlign: "center",
        backgroundColor: "#D14836",
    },
    statusItemFound: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute', // child
        top: 7, // position where you want
        right: 7,
        padding: 7,
        fontSize: 12,
        zIndex: 2,
        width: 70,
        textAlign: "center",
        backgroundColor: "#0072bc",
    },
    statusItemReturn: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute', // child
        top: 7, // position where you want
        right: 7,
        padding: 7,
        fontSize: 12,
        zIndex: 2,
        width: 70,
        textAlign: "center",
        backgroundColor: "#2b7873",
    },
      overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
    }  


});