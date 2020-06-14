import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Rep(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleCopy1}>
        <View style={styles.patrickPerkins3WylDrjxHEUnsplashCopy}>
          <View style={styles.mask3}>
            <Image
              source={require('../../assets/images/ivoted.jpg')}
              resizeMode="cover"
              style={styles.patrickPerkins3WylDrjxHEUnsplash2}
            ></Image>
          </View>
        </View>
        <View style={styles.groupCopy}>
          <Text style={styles.tittleCopy121}>Tittle</Text>
          <Text style={styles.theSimplyDummyTexCopy121}>
            The simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&#39;s standard dummy text ever
            since the 1500s.
          </Text>
        </View>
        <View style={styles.rectangleCopy3Row}>
          <View style={styles.rectangleCopy3}>
            <Text style={styles.back}>Back</Text>
          </View>
          <View style={styles.rectangleCopy2}>
            <Text style={styles.learnMoreCopy}>Learn More</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 1,
    width: 348,
    height: 468
  },
  rectangleCopy1: {
    height: 468,
    width: 348,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.1492023601398601)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  patrickPerkins3WylDrjxHEUnsplashCopy: {
    height: 220,
    width: 348,
    opacity: 1
  },
  mask3: {
    height: 220,
    width: 348,
    opacity: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  patrickPerkins3WylDrjxHEUnsplash2: {
    height: 259,
    width: 348,
    opacity: 1,
    backgroundColor: "transparent"
  },
  groupCopy: {
    height: 118,
    width: 300,
    opacity: 1,
    marginTop: 24,
    marginLeft: 24
  },
  tittleCopy121: {
    height: 20,
    width: 88,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(66,72,116,1)",
    fontSize: 24,
    //fontFamily: "muli-800"
  },
  theSimplyDummyTexCopy121: {
    height: 82,
    width: 300,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(66,72,116,0.6)",
    fontSize: 14,
    //fontFamily: "muli-600",
    marginTop: 16
  },
  rectangleCopy3: {
    height: 50,
    width: 110,
    borderWidth: 1,
    borderColor: "rgba(66,72,116,1)",
    borderRadius: 8,
    backgroundColor: "transparent"
  },
  back: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(66,72,116,1)",
    fontSize: 16,
    //fontFamily: "muli-700",
    marginTop: 15,
    marginLeft: 36
  },
  rectangleCopy2: {
    height: 50,
    width: 174,
    borderRadius: 8,
    backgroundColor: "rgba(66,72,116,1)",
    marginLeft: 16
  },
  learnMoreCopy: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(244,238,255,1)",
    fontSize: 16,
    //fontFamily: "muli-700",
    marginTop: 15,
    marginLeft: 44
  },
  rectangleCopy3Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24
  }
});


