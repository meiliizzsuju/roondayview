import { useState } from "react";
import SearchBar from "./searchbar/SearchBar";


function Main() {
    const [searchTerm, setSearchTerm] = useState('');

    return (

        <main>
            <div className="main__top">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
        </main>

    );
}

// default export — only one default export - asupposed to named export
export default Main;