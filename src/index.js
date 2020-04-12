import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Person = (props) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person image"></img>
      <h4>{props.name}</h4>
      <h4>{props.job}</h4>
      {props.children}
    </article>
  )
}
const PersonList =  () => {
  return (
    <section className="person-list">
     <Person img="34" name="john" job="developer" />
     <Person img="22" name="bob" job="designer">
       <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p> 
       </Person>
     <Person img="56" name="davidd" job="boss" />

    </section>
  )
}
ReactDOM.render(<PersonList></PersonList>,
  document.getElementById('root'));