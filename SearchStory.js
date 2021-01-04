import React from 'react';
import { Text, View, FlatList } from 'react-native';
import db from '../config'
import {ScrollView} from 'react-native-gesture-handler'
export default class SearchScreen extends React.Component {
  constructor(){
    super();
    this.state={
     allTransaction:[],
     lastVisibleTransaction:null

    }
  }
 fetchMoreTransactions=async()=>{
   const query=await db.collection("transaction").startAfter(this.state.lastVisibleTransaction).limit(10).get()
   query.docs.map((doc)=>{
    this.setState({
   allTransaction:[...this.state.allTransaction,doc.data()],
   lastVisibleTransaction:doc
  })
  })
 }

  componentDidMount=async()=>{
  const query=await db.collection("transaction").get()
  query.docs.map((doc)=>{
    this.setState({
   allTransaction:[...this.state.allTransaction,doc.data()],
   lastVisibleTransaction:doc
  })
  })
  }
    render() {
      return (

        <FlatList data={this.state.allTransaction}
        renderItem={({item})=>(
          <View>
            <Text>
              {"book id is:"+item.bookId}
            </Text>
            <Text>
              {"student id is:"+item.studentId}
            </Text>
           
            <Text>
              {"transaction type is:"+item.transactionType}
            </Text>
          </View>
        )}
        keyExtractor={(item,index)=>index.toString()}
        onEndReached={this.fetchMoreTransactions}
        onEndReachedThreshold={0.8}
        />

       // <ScrollView>
           //{this.state.allTransaction.map((transaction, index)=>{
            // return(
              // <View key={index} style={{borderBotttomWidth:1}}>
               //  <Text>
                //   {"book id is:"+transaction.bookId}
               //  </Text>
               //  <Text>
                //   {"student id is:"+transaction.studentId}
                // </Text>
               //  <Text>
                //   {"date is:"+transaction.date.toDate()}
                // </Text>
                // <Text>
                 //  {"transaction type is:"+transaction.transactionType}
               //  </Text>
             //  </View>
            // )
         //  })}
        //</ScrollView>
        
      );
    }
  }








