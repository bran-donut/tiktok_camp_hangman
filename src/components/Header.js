const Header = ({title, gameText}) => {
  return (
    <header>
        <h1 className= "header">{title}</h1>
        <h4 className= "sub-header">{gameText}</h4>
    </header>
  )
}

Header.defaultProps = {
    title: "Murdered by words",
    gameText: "Pen is shaper than a k_ife",
}



export default Header;