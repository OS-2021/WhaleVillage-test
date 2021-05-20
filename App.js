
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View>
      <View style={Style.Header}>
        <Text style={FontStyle.Title}>고래산마을</Text>
      </View>
      <View style={Style.Body}>

        <View style={{ paddingTop: 50, width: 400, height: 290 }}>
          <WebView
            javaScriptEnabled={true}
            useWebKit={true}
            domStorageEnabled={true}
            allowsInlineMediaPlayback={true}
            source={{ uri: "https://www.youtube.com/embed/TcMBFSGVi1c?playsinline=1&fs=1" }}
          />
        </View>
      </View>
      <View style={Style.Footer}>

      </View>
    </View>
  );
};

const FontStyle = StyleSheet.create({
  Title: {
    fontSize: 40,
    paddingTop: 20,
  },
});

const Style = StyleSheet.create({
  Header: {
    backgroundColor: 'red',
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Body: {
    backgroundColor: 'orange',
    width: '100%',
    height: 700,
  },
  Footer: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 100,
  }
})