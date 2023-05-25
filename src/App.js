import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Items from './components/Items'; 
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';


class App extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Amazing place for resting after a long day.',
          category: 'chairs',
          price: '49.99'



        },
        
        {
          id: 2,
          title: 'Blue table',
          img: 'table.jpeg',
          desc: 'Luxiorius table for important items.',
          category: 'tables',
          price: ' 110'



        },

        {
          id: 3,
          title: 'Caoch',
          img: 'Caoch.jpeg',
          desc: 'Coach made of highest quality materials.',
          category: 'coaches',
          price: '240'



        },

        {
          id: 4,
          title: 'Closet',
          img: 'closet.jpeg',
          desc: 'Place to store your cloathing.',
          category: 'closets',
          price: '300'



        },

        {
          id: 5,
          title: 'Sofa',
          img: 'Sofa.jpg',
          desc: 'Place for a wholre family.',
          category: 'sofas',
          price: '59.99'



        },

        {
          id: 6,
          title: 'Single sofa',
          img: 'SingleSofa.jpg',
          desc: 'Children favorite place to sit.',
          category: 'sofas',
          price: '29.99'



        },

      ],
      showFullItem: false,
      fullItem: {}

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
render() {
  return(
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
      
    </div>

  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category ==='all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el =>el.category ===category)
    })
  }
  
  
deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  

addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el =>{
    if(el.id === item.id)
    isInArray =true
  })
  if (!isInArray)
    this.setState({orders: [...this.state.orders,item] })
  }
}


export default App;
