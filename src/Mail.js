const Mail = ({ mail }) => {
  return (
    <ul className="emailList">
      <li className="email">{mail.read}</li>
      <li className="email">{mail.starred}</li>
      <li className="email">{mail.sender}</li>
      <li className="email">{mail.title}</li>
    </ul>
  );
};

export default Mail;
