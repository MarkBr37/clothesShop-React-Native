export default {
    container:{
        alignItems: 'center',

    },
    pressable:{ 
        width: 270,
        marginVertical: 15 ,
        borderRadius: 8,
        padding: 6,
        alignItems: 'center',
        backgroundColor: '#f4511e'
    },
    btnText:{
        fontSize: 30,
        color:'#fff'
    },
    centeredModal:{
        height: '100%',
        width: '100%',
        backgroundColor: "rgba(100, 100, 100, 0.3)", 
    },

    modalView: {
        marginTop: '20%',
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
      },

      dropBox:{
        marginVertical:22,
        flexDirection: 'row',
      },

      dropButton:{
        width:150,
        elevation: 2,
        borderRadius: 8,
        marginHorizontal: 16
      },

      modalImage:{
        height:200 ,
        width:200
      },

      button: {
        elevation: 2,
        borderRadius: 8,
      },
      
      buttonClose: {
        backgroundColor: "#d5d7dd",
        padding: 4,
        width:150,
      },
      buttonSave: {
        width:200,
        padding: 7,
        marginBottom: 20
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
      },
      btnCloseText:{
        color:'#6c757d'
      }
    }