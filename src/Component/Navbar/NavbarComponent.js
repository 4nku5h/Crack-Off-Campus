import React from 'react';

const custom_style_logo = { fontWeight: "900", marginLeft: "50px" };
function NavbarComponent(props) {
    { console.log(props.data) }
    return (
        <div className="Navbar">
            <div className="Navbar_inner_divider_first">
                <p id="Navbar_home" style={custom_style_logo}>Crack off Campus</p>
                <p className="Navbar_Content" id="Navbar_Referals" href="#referals">Referals</p>
                <p className="Navbar_Content" id="Navbar_Resume" href="#post" >Resume</p>
                <p className="Navbar_Content" id="Navbar_PostJob" href="#post" >Seewe</p>
                <p className="Navbar_Content" id="Navbar_Careers" href="#post" >Careers</p>

                <input type="text" placeholder="Search" id="Navbar_Content_search"></input>
            </div>

            <div className="Navbar_inner_divider_second">
                <p onClick={()=>props.data.setLoggenIn(false)}>Logout</p>
            </div>

        </div>
    )
}

export default NavbarComponent;
//
//<BoxArrowLeft style={{ marginRight: "7px" }} id="logo_account" title="goodbye" color="#000" size={23} />
///////userDetails=//////
//undefinedField3: "null"
//undefinedField4: "null"
//userAge: "22"
//userId: "1245454"
//userName: "alpha"
//userTitle: "Billionaire"
