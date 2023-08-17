import "./Footer.css"

const Footer = () => {
  return <footer className="footer" style={{backgroundImage: "url(./img/footer.png)"}}>
    <div className="redes">
        <a href="https://facebook.com/xdsolraC/" target="_blank">
            <img src="./img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/xds0lr4C" target="_blank">
            <img src="./img/twitter.png" alt="" />
        </a>
        <a href="https://instagram.com/xdsolrac/" target="_blank">
            <img src="./img/instagram.png" alt="" />
        </a>
    </div>
    <img src="img/logo.png" alt="" />
    <p className="creditos">Desarrollado por <a href="https://github.com/xdsolraC" target="_blank" >xdsolraC</a></p>
  </footer>;
};

export default Footer;
