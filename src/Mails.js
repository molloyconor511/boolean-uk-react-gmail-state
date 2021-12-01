import Mail from "./Mail";

const Mails = ({ mails }) => {
  return (
    <>
      {mails.map((mail) => (
        <Mail key={mail.id} mail={mail} />
      ))}
    </>
  );
};

export default Mails;
