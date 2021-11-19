import './App.css';
import { Fragment } from 'react';

const person = {
  name: 'Adam',
  age: 3,
  address: {
    city: 'Delhi'
  }
}
const address = {
  city: 'Delhi',
  pin: 132456
}

const members = ["Steve", "John", "Will"];

function formatName(name) {
  return name + ' ' + 'Cole';
}

function App() {

  const canVoteTemplate = (
    <div>{person.age > 18 ? <p> {formatName(person.name)} can vote</p> : <p>Sorry, {formatName(person.name)} can not vote</p>}</div>
  )



  return (
    <Fragment>
      <h3>This is for heading</h3>
      <div className="App">
        <p>Hello, {person.name}</p>
        {canVoteTemplate}
        <Welcome fname="Sara" lname="Jones" />
        <Welcome fname="Sara 1" />
        <Welcome fname="Sara 2" />
        <WelcomeMembers members={members} membersCount={members.length} isActive={members.length > 1} />
        <Address {...address} />
        {/* <Address address={address} /> */}
      </div>
    </Fragment>
  );
}

function Welcome(props) {
  const { fname, lname } = props;
  return (
    <Fragment>
      <p>Welcome {fname} {lname}</p>
    </Fragment>
  )
}

function WelcomeMembers(props) {
  console.log('WelcomeMembers', props);
  return (
    <Fragment>
      <p>Members</p>
    </Fragment>
  )
}

function Address(props) {
  const { city, pin } = props;
  return (
    <Fragment>
      <p>{city}</p>
      <p>{pin}</p>
    </Fragment>
  )
}

export default App;
