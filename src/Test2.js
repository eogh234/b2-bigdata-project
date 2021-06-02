import React from 'react';

export default function Test2() {
    return (
        <div>
            <div id="navbar-full">
                <div id="navbar">
                    <div className="navigation-example">
                        <nav className="navbar navbar-default navbar-transparent" role="navigation-demo">
                            <div className="container">
                                {/* Brand and toggle get grouped for better mobile display */}
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    <a className="navbar-brand" href="#gsdk">GSDKit</a>
                                </div>
                                {/* Collect the nav links, forms, and other content for toggling */}
                                <div className="collapse navbar-collapse" id="navigation-example-2">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><a href="#gsdk">Link</a></li>
                                        <li className="dropdown">
                                            <a href="#gsdk" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#gsdk">Action</a></li>
                                                <li><a href="#gsdk">Another action</a></li>
                                                <li><a href="#gsdk">Something</a></li>
                                                <li><a href="#gsdk">Another action</a></li>
                                                <li><a href="#gsdk">Something</a></li>
                                                <li className="divider" />
                                                <li><a href="#gsdk">Separated link</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" data-toggle="search" className="hidden-xs"><i className="fa fa-search" /></a>
                                        </li>
                                    </ul>
                                    <form className="navbar-form navbar-left navbar-search-form" role="search">
                                        <div className="form-group">
                                            <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                        </div>
                                    </form>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#gsdk">Register</a></li>
                                        <li><button href="#gsdk" className="btn btn-round btn-default">Sign in</button></li>
                                    </ul>
                                </div>{/* /.navbar-collapse */}
                            </div>{/* /.container-fluid */}
                        </nav>
                        <div className="img-src" style={{ backgroundImage: 'url("assets/img/bg.png")' }} />
                    </div>
                </div>{/*  end navbar */}
            </div> {/* end menu-dropdown */}
        </div>
    )
}