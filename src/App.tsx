import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  // Map the JSON data to TypeScript
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// const TeamNames = () => {
//   return (
//     <div>
//       {data.teams.map((team) => (
//         <div key={team.tid}>
//           <p>{team.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

function Heading() {
  const headingStyle = {
    fontStyle: 'italic',
  };

  return (
    <h1 style={headingStyle}>
      This site is to provide you with an overall look into all the teams in
      college basketball!
    </h1>
  );
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    const cardStyle = {
      border: '2px solid black',
      padding: '10px',
      margin: '10px',
    };

    return (
      <div style={cardStyle}>
        <h2>School Name: {oneTeam.school}</h2>
        <p>School Mascot Name: {oneTeam.name}</p>
        <p>
          Location (City, State): {oneTeam.state}, {oneTeam.city}
        </p>
      </div>
    );
  }
}

function ListTeams() {
  return (
    <div>
      {data.teams.map((team) => (
        <TeamCard key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <ListTeams />
    </div>
  );
}

export default App;
