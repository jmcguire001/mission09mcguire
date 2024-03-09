// IS 413 - Mission 09
// by Jacob McGuire
// Section 002, Group 03

// Import React, CSSProperties, ./App.css, and the JSON file
import React, { CSSProperties } from 'react';
import './App.css';
// This line of code imports the data from the JSON file
import data from './CollegeBasketballTeams.json';

// Create an interface for the JSON data
interface TeamProps {
  // Map the JSON data to TypeScript; define the data types
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

// Create a function to display the heading
function Heading() {
  // Create a CSS style for the heading
  const headingStyle: CSSProperties = {
    color: 'blue',
  };

  // Create a CSS style for the paragraph
  const pStyle: CSSProperties = {
    fontStyle: 'italic',
    color: 'red',
    textAlign: 'justify',
    paddingLeft: '10px',
    paddingRight: '10px',
  };

  return (
    // Return some text for the heading and the paragraph
    <div>
      <h1 style={headingStyle}>IS 403 - MISSION 09</h1>

      <p style={pStyle}>
        This website was built by Jacob McGuire (Section 002, Group 03) for his
        Information Systems class. It shows a list of all Division 1 college
        basketball teams in little boxes, or, cards, with a little additional
        information. This is a simple React website that will dynamically
        change. React is very fast, powerful, and dynamic, and that is why it
        has gained popularity rapidly.
      </p>
    </div>
  );
}

// Use a Class Component to display the team cards; also, extend the TeamCard with the TeamProps interface
class TeamCard extends React.Component<TeamProps> {
  render() {
    // Create a constant for the JSON data, but individually
    const oneTeam = this.props;

    // Create a CSS style for the card content
    const cardStyle = {
      border: '2px solid black',
      padding: '5px',
      margin: '20px',
      backgroundColor: 'lightgray',
      borderRadius: '10px',
      width: '500px',
    };

    // Create a CSS style for the card
    const cardLook = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    // Get the data from the single JSON object (above) and display it in the card
    return (
      <div style={cardLook}>
        <div style={cardStyle}>
          <h2>School Name: {oneTeam.school}</h2>

          <p>School Mascot Name: {oneTeam.name}</p>
          <p>
            Location (City, State): {oneTeam.city}, {oneTeam.state}
          </p>
        </div>
      </div>
    );
  }
}

// Create a function to list the teams
function ListTeams() {
  // Return the data from the JSON file; I don't need CSS because this is to load the data
  return (
    <div>
      {data.teams.map((team) => (
        <TeamCard key={team.tid} {...team} />
      ))}
    </div>
    // I used the spread operator to pass props to the TeamCard component
  );
}

// Main App function
function App() {
  // Display the heading and the list of teams
  return (
    <div className="App">
      <Heading />
      <ListTeams />
    </div>
  );
}

// Export the App function to be used elsewhere
export default App;
