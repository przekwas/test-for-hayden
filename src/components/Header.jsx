import React from 'react';

const Header = props => {

    const { name, role } = props.person;

    return (
        <div className="col-md-6">
            <div className="card m-2 p-2 shadow">
                <div className="card-body">
                    <h4 className="card-title">Hello {name}</h4>
                    <p className="card-text">you are {role}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;