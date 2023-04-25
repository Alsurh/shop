import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Items from './components/Items'; 


class App extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Template text',
          category: 'chairs',
          price: '49.99'



        },
        
        {
          id: 2,
          title: 'Blue table',
          img: 'table.jpeg',
          desc: 'Template text',
          category: 'tables',
          price: '110'



        },

        {
          id: 3,
          title: 'Caoch',
          img: 'Caoch.jpeg',
          desc: 'Template text',
          category: 'coaches',
          price: '240'



        },

        {
          id: 4,
          title: 'Closet',
          img: 'closet.jpeg',
          desc: 'Template text',
          category: 'closets',
          price: '300'



        },

      ]

    }
  }
render() {
  return(
    <div className="wrapper">
      <Header />
      <Items items = {this.state.items}/>
      <Footer />

    </div>

  )



  }
}

export default App;
