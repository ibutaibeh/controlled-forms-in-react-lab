import React, { useState } from 'react'
import './Bookshelf.css'

const Bookshelf = () => {
const [books,setBooks]= useState([])
const [newBook, setNewBooks]=useState([{title:'', author:''}])

const handleChange =(event)=>{
const {name,value}=event.target

setNewBooks({...newBook,[name]:value})
}

const handleSubmit=(event)=>{
    event.preventDefault();
const newBookID= {...newBook, id: Math.random()*1000}
setBooks([...books,newBookID])

setNewBooks({title:'', author:''})

}


  return (
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit} >
        <label htmlFor="title">Title</label>
        <input type="text" name='title' onChange={handleChange} value={newBook.title} />
        <label htmlFor="author">Author</label>
        <input type="text" name='author' onChange={handleChange} value={newBook.author} />
        <button>Add</button>

    </form>
  </div>
  <div className="bookCardsDiv">

<ul>
    {books.map((book)=>(<li className='bookCard' key={book.id}>{book.title} by {book.author}</li>))}
</ul>

  </div>
</div>

  )
}

export default Bookshelf