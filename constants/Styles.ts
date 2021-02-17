import { StyleSheet } from "react-native"



const Sizes = {
  //global sizes

  base:10,
  font:14,
  radius:30,
  padding:10, 
  padding2:12,

  // fontSize

  h1:30,
  h2:27,
  h3:24,
  h4:20,
  subtitle:18, 
  body1:20,
  body2:18,
  body3:16,
  caption:18,

}

const Fonts = StyleSheet.create({
  h1:{
    fontWeight:"bold",
    fontSize:Sizes.h1,
    lineHeight:30,
  },
  h2:{
    fontWeight:"bold",
    fontSize:Sizes.h2,
    lineHeight:27,
  },
  h3:{
    fontWeight:"bold",
    fontSize:Sizes.h3,
    lineHeight:24,
  },
  h4:{
    fontWeight:"bold",
    fontSize:Sizes.h4,
    lineHeight:20,
  }
  ,
  subtitle:{
    fontWeight:"bold",
    fontSize:Sizes.subtitle,
    lineHeight:18,
  }
  ,
  body1:{
    fontSize:Sizes.body1,
    lineHeight:20,
  }
  ,
  body2:{
    fontSize:Sizes.body2,
    lineHeight:18,
  },
  body3:{
    fontSize:Sizes.body3,
    lineHeight:16,
  },
  caption:{
    fontSize:Sizes.caption,
  },

});

const Styles =StyleSheet.create( {
  centerH:{
    alignItems: "center",
  },
  centerV:{
    justifyContent: "center",
  },
  centerHV:{
    alignItems: "center",
    justifyContent:"center"
  },
  fRow:{
    flexDirection: "row",
  },
  centerSelf:{
    alignSelf:"center"
  },
  container:{
    padding:Sizes.base
  },
  
})

export {Fonts, Sizes, Styles}