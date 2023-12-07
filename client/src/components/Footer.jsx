const Footer = () => {

  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer>
      <p>Copywrite ⓒ {year}</p>
    </footer>
  );
};
export default Footer;
