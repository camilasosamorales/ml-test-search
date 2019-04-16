import React, { Component } from "react";
import logo from '../../images/Logo_ML.png';
import search from '../../images/ic_Search.png';
import { Link } from 'react-router-dom';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { valueText: '' };

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

        if (this.state.valueText !== '') {
            const search = this.state.valueText;
            this.props.history.push(`/items?search=${search}`);

        }
        else {
            alert('inserte texto a buscar');
        }
    }
    render() {
        return (
            <nav className="navbar bg-brand">
                <div className="container">
                    {/* <Link to="/"> */}
                        <a className="navbar-brand" href='/'>
                            <img src={logo} alt="logo" title="Mercado Libre" />
                        </a>
                    {/* </Link> */}
                    <form className="mr-auto nav-search form-inline" onSubmit={this.submitButtonHundler}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Nunca dejes de buscar" value={this.state.valueText} onChange={this.handleInput} />
                            <button className="input-group-addon search-button" type="submit">
                                <img src={search} alt="search" />
                            </button>
                        </div>
                    </form>
                </div>
            </nav>

        );
    }

}

export default SearchBox;