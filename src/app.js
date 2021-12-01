import { useState } from "react";

import Header from "./components/header";
import Mails from "./Mails";

//import initialEmails from "./data/emails";

import "./styles/app.css";

//function App() {
// Use initialEmails for state
const App = () => {
  // console.log(initialEmails);
  const [mails, setMails] = useState([
    {
      id: 1,
      sender: `Zoom`,
      title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
      starred: false,
      read: true,
    },
    {
      id: 2,
      sender: `Zoom`,
      title: `Sean Davison has joined your Personal Meeting Room`,
      starred: false,
      read: false,
    },
    {
      id: 3,
      sender: `Notion`,
      title: `1 update in Boolean`,
      starred: true,
      read: true,
    },
    {
      id: 4,
      sender: `The Calendly Team`,
      title: `Use more than one calendar?`,
      starred: false,
      read: false,
    },
    {
      id: 5,
      sender: `Patrick`,
      title: `Updated invitation: Coding chat with Nico`,
      starred: true,
      read: false,
    },
  ]);
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <Mails mails={mails} />
    </div>
  );
};

export default App;

//export default [
//   {
//     id: 1,
//     sender: `Zoom`,
//     title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
//     starred: false,
//     read: true
//   },
//   {
//     id: 2,
//     sender: `Zoom`,
//     title: `Sean Davison has joined your Personal Meeting Room`,
//     starred: false,
//     read: false
//   },
//   {
//     id: 3,
//     sender: `Notion`,
//     title: `1 update in Boolean`,
//     starred: true,
//     read: true
//   },
//   {
//     id: 4,
//     sender: `The Calendly Team`,
//     title: `Use more than one calendar?`,
//     starred: false,
//     read: false
//   },
//   {
//     id: 5,
//     sender: `Patrick`,
//     title: `Updated invitation: Coding chat with Nico`,
//     starred: true,
//     read: false
//   }
// ]
