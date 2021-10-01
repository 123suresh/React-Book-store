import React, { Children } from 'react';
import ReactDOM from 'react-dom';

//CSS importing
import './index.css';

//creating objects for booklist.
const books=[
{
  id:1,
  img:"https://images-na.ssl-images-amazon.com/images/I/41ZN75rnLLL._AC_SX184_.jpg",
  title:`Peril`,
  author:`Bob Woodward`,
  price:`$17`
},
{
  id:2,
  img:"https://images-na.ssl-images-amazon.com/images/I/51NUTi4a5YL._AC_SX184_.jpg",
  title:`The Wish`,
  author:`Nicholas Sparks`,
   price:`$17`
},
{
  id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/41kuAx41bCL._AC_SX184_.jpg",
  title:`The Storyteller: Tales of Life and Music`,
  author:`Dave Grohl`,
   price:`$20`
},
{
  id:4,
  img:"https://images-na.ssl-images-amazon.com/images/I/51vUAyizUCS._AC_SX184_.jpg",
  title:`Feeding the Soul (Because It's My Business)`,
  author:`Tabitha Brown`,
   price:`$19`
},
{
  id:5,
  img:"https://images-na.ssl-images-amazon.com/images/I/51qV6D24NjL._AC_SX184_.jpg",
  title:`It's better to be Feared`,
  author:`Seth Wickersham`,
   price:`$12`
},
{
  id:6,
  img:"https://images-na.ssl-images-amazon.com/images/I/41szVKW4kjL._AC_SX184_.jpg",
  title:`I'll take your queation Now`,
  author:`Stephani Grisham`,
   price:`$24`
},
{
  id:7,
  img:"https://images-na.ssl-images-amazon.com/images/I/51Q622c1odL._AC_SX184_.jpg",
  title:`It Ends with Us`,
  author:`Collen Hoover`,
   price:`$11`
},
{
  id:8,
  img:"https://images-na.ssl-images-amazon.com/images/I/41H5veGs31S._AC_SX184_.jpg",
  title:`The Rise and Fall of an American`,
  author:`Anderson Cooper`,
   price:`$12`
},
{
  id:9,
  img:"https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._AC_SX184_.jpg",
  title:`Atomic Habits`,
  author:`James Clear`,
   price:`$15`
}
];

function BookList() {
 // you can pass property and value inside book in following ways
  return <section className='booklist'>{books.map((book)=>{
    return <Book key={book.id} {...book}></Book>;
  })}</section>
}

//now we are uning props object to access value from BookList
const Book =({img,title,author,price})=>{
  //attribute, eventHandler
  //onClick, onMouseOver

  return(
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <h3>{price}</h3>
    </article>
  );
};

//here if we want to do inline css the js treat all as js code so, style is treated as js object so we give two bracket and property,value insode.

ReactDOM.render(<BookList />, document.getElementById('root'));
