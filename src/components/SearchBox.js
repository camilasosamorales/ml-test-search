import React, {Component} from "react";
import logo from '../images/Logo_ML.png';
import search from '../images/ic_Search.png';
class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {valueText: ''};

    this.handleInput = this.handleInput.bind(this);
    this.submitButtonHundler = this.submitButtonHundler.bind(this);
    }

    handleInput = (event) => {
        this.setState({
            valueText: event.target.value,
        });
    }

    submitButtonHundler = (event) => {
        event.preventDefault();

        if(this.state.valueText !== ''){
            //llamamos a la api
            this.getResultApi();
        }
        else{
            alert('inserte texto a buscar');
        }
    } 

    getResultApi = () =>{
        const api_url = "https://api.mercadolibre.com/sites/MLA/search?q=" + this.state.valueText + "&limit=4";
        fetch(api_url)
        .then((response) =>{
            console.log(response.json());
        })
    }

    render() {
        return (
            <nav className="navbar bg-brand">
            <div className="container">
                {/* <Link to="/"> */}
                    <a className="navbar-brand">
                        <img src={logo} alt="logo" title="Mercado Libre" />
                    </a>
                {/* </Link> */}
                <form className="mr-auto nav-search form-inline" onSubmit={this.submitButtonHundler}>
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nunca dejes de buscar" value={this.state.valueText} onChange={this.handleInput} />
                    <button className="input-group-addon search-button" type="submit">
                            <img src={search} alt="search"/>
                    </button>
                    </div>
            </form>
            </div>
        </nav>
            
        );
    }

}

export default SearchBox;