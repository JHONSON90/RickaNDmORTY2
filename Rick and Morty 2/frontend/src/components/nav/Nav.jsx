import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";



const Nav = ({ onSearch })=>{
    return(
        <nav>
            <Button link="/" text="Home"/>
            <Button link="/favorites" text="Favorites"/>
            {/*<Button link="/about" text={About}/>*/}
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav