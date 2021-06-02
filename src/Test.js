import React from 'react';

export default function Test() {
    return (
        <div>
            <div id="navbar-full">
                <div className="container">
                    <nav className="navbar navbar-ct-blue navbar-transparent navbar-fixed-top" role="navigation">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href="http://creative-tim.com">
                                    <div className="logo-container">
                                        <div className="logo">
                                            <img src="assets/img/new_logo.png" />
                                        </div>
                                        <div className="brand">
                                            Creative Tim
                      </div>
                                    </div>
                                </a>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="components.html">Components</a></li>
                                    <li><a href="http://www.creative-tim.com/product/get-shit-done-kit" className="btn btn-round btn-default">Download</a></li>
                                </ul>
                            </div>{/* /.navbar-collapse */}
                        </div>{/* /.container-fluid */}
                    </nav>
                </div>{/*  end container*/}
                <div className="blurred-container">
                    <div className="motto">
                        <div>Get</div>
                        <div className="border no-right-border">Sh</div><div className="border">it</div>
                        <div>Done</div>
                    </div>
                    <div className="img-src" style={{ backgroundImage: 'url("assets/img/cover_4.jpg")' }} />
                    <div className="img-src blur" style={{ backgroundImage: 'url("assets/img/cover_4_blur.jpg")' }} />
                </div>
            </div>
            <div className="main">
                <div className="container tim-container">
                    <div className="tim-title">
                        <h2>Basic Elements</h2>
                    </div>
                    <div id="buttons">
                        <div className="tim-title">
                            <h3>Buttons <small> Pick your class </small></h3>
                        </div>
                        <div className="row tim-row">
                            <div className="col-md-6">
                                <div className="pick-class">
                                    <span className="pick-class-label label-default label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Default" new-class="btn-default"> </span>
                                    <span className="pick-class-label label-primary label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Primary" new-class="btn-primary"> </span>
                                    <span className="pick-class-label label-info label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Info" new-class="btn-info"> </span>
                                    <span className="pick-class-label label-success label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Success" new-class="btn-success"> </span>
                                    <span className="pick-class-label label-warning label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Warning" new-class="btn-warning"> </span>
                                    <span className="pick-class-label label-danger label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Danger" new-class="btn-danger"> </span>
                                </div>
                            </div>
                        </div>
                        <div className="row tim-row" id="display-buttons" data-class="btn-info">
                            <div className="col-md-3 col-sm-6">
                                <button href="#fakelink" className="btn btn-block btn-lg btn-info">Default Button</button>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <button href="#fakelink" className="btn btn-block btn-lg btn-info btn-fill">Filled Button</button>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <button href="#fakelink" className="btn btn-block btn-lg btn-info btn-round">Rounded Button</button>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <button href="#fakelink" className="btn btn-block btn-lg btn-info btn-simple">Simple Button</button>
                            </div>
                        </div> {/* end row */}
                    </div>
                    {/* end buttons div */}
                    <div id="inputs">
                        <div className="tim-title">
                            <h3>Inputs</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <input type="text" defaultValue placeholder="Inactive" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group has-success">
                                    <input type="text" defaultValue="Success" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group has-error has-feedback">
                                    <input type="text" defaultValue="Error" className="form-control" />
                                    <span className="glyphicon glyphicon-remove form-control-feedback" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="input-group">
                                    {/* 	   Since the css properties cannot check the previous sibling of an element and for the design consistency we recommend to use the "input-group-addon" after the "form-control" like in this example */}
                                    <input type="text" defaultValue="Group Addon" className="form-control" />
                                    <span className="input-group-addon"><i className="fa fa-group" /></span>
                                </div>
                            </div>
                        </div> {/* end row */}
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="tim-title">
                                    <h3>Checkboxes</h3>
                                </div>
                                <label className="checkbox" htmlFor="checkbox1">
                                    <input type="checkbox" defaultValue id="checkbox1" data-toggle="checkbox" />
                    Unchecked
                  </label>
                                <label className="checkbox" htmlFor="checkbox2">
                                    <input type="checkbox" defaultValue id="checkbox2" data-toggle="checkbox" defaultChecked />
                    Checked
                  </label>
                                <label className="checkbox" htmlFor="checkbox3">
                                    <input type="checkbox" defaultValue id="checkbox3" data-toggle="checkbox" disabled />
                    Disabled unchecked
                  </label>
                                <label className="checkbox" htmlFor="checkbox4">
                                    <input type="checkbox" defaultValue id="checkbox4" data-toggle="checkbox" disabled defaultChecked />
                    Disabled checked
                  </label>
                            </div>
                            <div className="col-sm-3">
                                <div className="tim-title">
                                    <h3>Radio Buttons</h3>
                                </div>
                                <label className="radio">
                                    <input type="radio" name="optionsRadios" data-toggle="radio" id="optionsRadios1" defaultValue="option1" />
                                    <i />Radio is off
                  </label>
                                <label className="radio">
                                    <input type="radio" name="optionsRadios" data-toggle="radio" id="optionsRadios2" defaultValue="option1" defaultChecked />
                                    <i />Radio is on
                  </label>
                                <label className="radio">
                                    <input type="radio" name="optionsRadiosDisabled" data-toggle="radio" id="optionsRadios3" defaultValue="option2" disabled />
                                    <i />Disabled radio is off
                  </label>
                                <label className="radio">
                                    <input type="radio" name="optionsRadiosDisabled" data-toggle="radio" id="optionsRadios4" defaultValue="option2" defaultChecked disabled />
                                    <i />Disabled radio is on
                  </label>
                            </div>
                            <div className="col-sm-3">
                                <div className="tim-title">
                                    <h3>Switches</h3>
                                    {/*                    
                        
                        The colors for checkbox: ct-blue[default], ct-azure, ct-orange, ct-green, ct-red    
                        <input type="checkbox" checked data-toggle="switch" class="ct-red"/> 
                         
                         */}
                                    <input type="checkbox" defaultChecked data-toggle="switch" className="ct-info" />
                                    <input type="checkbox" data-toggle="switch" />
                                    <h3>Switches with icons</h3>
                                    <div className="switch" data-on-label="<i class='fa fa-check'></i>" data-off-label="<i class='fa fa-times'></i>">
                                        <input type="checkbox" defaultChecked />
                                    </div>
                                    <div className="switch" data-on-label="<i class='fa fa-check'></i>" data-off-label="<i class='fa fa-times'></i>">
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>{/*  end row */}
                    </div>{/*  end inputs */}
                    <div id="menu-dropdown">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="tim-title">
                                    <h3>Menu &amp; Dropdown</h3>
                                </div>
                                <div id="navbar">
                                    <nav className="navbar navbar-default">
                                        <div className="container-fluid">
                                            {/* Brand and toggle get grouped for better mobile display */}
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                </button>
                                                <a className="navbar-brand" href="#gsdk">Brand</a>
                                            </div>
                                            {/* Collect the nav links, forms, and other content for toggling */}
                                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                                <ul className="nav navbar-nav">
                                                    <li className="active"><a href="#gsdk">Link</a></li>
                                                    <li><a href="#gsdk">Link</a></li>
                                                    <li className="dropdown">
                                                        <a href="#gsdk" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#gsdk">Action</a></li>
                                                            <li><a href="#gsdk">Another action</a></li>
                                                            <li><a href="#gsdk">Something else here</a></li>
                                                            <li className="divider" />
                                                            <li><a href="#gsdk">Separated link</a></li>
                                                            <li className="divider" />
                                                            <li><a href="#gsdk">One more separated link</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>{/* /.navbar-collapse */}
                                        </div>{/* /.container-fluid */}
                                    </nav>
                                </div>{/*  end navbar */}
                            </div>
                        </div> {/* end row */}
                    </div> {/* end menu-dropdown */}
                    <div className="tim-title">
                        <h3>Transparent Navigation
                <a href="navbar-transparent.html" target="_blank" className="btn btn-info btn-fill">Live Preview</a>
                        </h3>
                    </div>
                </div>
            </div>
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
                        <div className="img-src" style={{ backgroundImage: 'url("assets/img/bg.jpg")' }} />
                    </div>
                </div>{/*  end navbar */}
            </div> {/* end menu-dropdown */}
            <div className="main">
                <div className="container tim-container">
                    <div id="sliders-navigation">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="tim-title">
                                    <h3>Progress Bars</h3>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '30%' }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" style={{ width: '35%' }}>
                                        <span className="sr-only">35% Complete (success)</span>
                                    </div>
                                    <div className="progress-bar progress-bar-warning" style={{ width: '20%' }}>
                                        <span className="sr-only">20% Complete (warning)</span>
                                    </div>
                                    <div className="progress-bar progress-bar-danger" style={{ width: '10%' }}>
                                        <span className="sr-only">10% Complete (danger)</span>
                                    </div>
                                </div>
                                <div className="tim-title">
                                    <h3>Sliders</h3>
                                </div>
                                <div id="slider-default" className="slider-info" />
                                <br />
                                <div id="slider-range" className="slider-success" />
                            </div>
                            <div className="col-md-6">
                                <div className="tim-title">
                                    <h3>Navigation Menu</h3>
                                </div>
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#Bla">Home</a></li>
                                    <li><a href="#nice">Profile</a></li>
                                    <li><a href="#best">Messages</a></li>
                                </ul>
                                <br />
                                <ul className="nav nav-pills">
                                    {/*  color-classes: "ct-blue", "ct-azure", "ct-orange", "ct-red", "ct-green"
                           special-classes: "no-border"        
                     */}
                                    <li className="active"><a href="#gsdk">Home</a></li>
                                    <li><a href="#gsdk"> Profile</a></li>
                                    <li><a href="#gsdk">Messages</a></li>
                                </ul>
                                <div className="tim-title">
                                    <h3>Pagination</h3>
                                </div>
                                <ul className="pagination">
                                    {/*   color-classes: "ct-blue", "ct-azure", "ct-orange", "ct-red", "ct-green"
                            special-classes: "no-border"        
                     */}
                                    <li><a href="#gsdk">«</a></li>
                                    <li><a href="#gsdk">1</a></li>
                                    <li><a href="#gsdk">2</a></li>
                                    <li className="active"><a href="#gsdk">3</a></li>
                                    <li><a href="#gsdk">4</a></li>
                                    <li><a href="#gsdk">5</a></li>
                                    <li><a href="#gsdk">»</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>{/*  end sliders-navigation */}
                    <div id="labels-badges">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tim-title">
                                    <h3>Labels</h3>
                                    <span className="label label-default">Default</span>
                                    <span className="label label-primary">Primary</span>
                                    <span className="label label-success">Success</span>
                                    <span className="label label-info">Info</span>
                                    <span className="label label-warning">Warning</span>
                                    <span className="label label-danger">Danger</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div> {/* end row */}
                    </div> {/* end labels-badges */}
                    <div className="tim-title">
                        <h3>Notifications</h3>
                    </div>
                </div>
            </div>
            <div id="notifications">
                {/*            De scris la tutorial sa bage in container  */}
                <div className="alert alert-success">
                    <div className="container">
                        <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
                </div>
                <div className="alert alert-info">
                    <div className="container">
                        <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
                </div>
                <div className="alert alert-warning">
                    <div className="container">
                        <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
                </div>
                <div className="alert alert-danger">
                    <div className="container">
                        <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
                </div>
                <div className="clearfix" />
            </div>{/*  end notifications */}
            <div className="main">
                <div className="container tim-container">
                    <div className="tim-title">
                        <h2>Typography</h2>
                    </div>
                    <div id="typography">
                        <div className="row">
                            <div className="tim-typo">
                                <h1><span className="tim-note">Header 1</span>Awesome looking header </h1>
                            </div>
                            <div className="tim-typo">
                                <h2><span className="tim-note">Header 2</span>Awesome looking header</h2>
                            </div>
                            <div className="tim-typo">
                                <h3><span className="tim-note">Header 3</span>Awesome looking header</h3>
                            </div>
                            <div className="tim-typo">
                                <h4><span className="tim-note">Header 4</span>Awesome looking header</h4>
                            </div>
                            <div className="tim-typo">
                                <h5><span className="tim-note">Header 5</span>Awesome looking header</h5>
                            </div>
                            <div className="tim-typo">
                                <h6><span className="tim-note">Header 6</span>Awesome looking header</h6>
                            </div>
                            <div className="tim-typo">
                                <p><span className="tim-note">Paragraph</span>            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                            </div>
                            <div className="tim-typo">
                                <span className="tim-note">Quote</span>
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                                    <small>
                                        Steve Jobs, CEO Apple
                    </small>
                                </blockquote>
                            </div>
                            <div className="tim-typo">
                                <span className="tim-note">Muted Text</span>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                  </p>
                            </div>
                            <div className="tim-typo">
                                {/* 
                    
                     there are also "text-info", "text-success", "text-warning", "text-warning" clases for the text 
                     
                     */}
                                <span className="tim-note">Primary Text</span>
                                <p className="text-primary">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                  </p>
                            </div>
                            <div className="tim-typo">
                                <h1><span className="tim-note">Special Header</span>Header with special subtitle <small className="subtitle">".subtitle" is a special class for h1 title</small> </h1>
                            </div>
                            <div className="tim-typo">
                                <h2><span className="tim-note">Small Tag</span>Header with small subtitle <br /><small>".small" is a tag for the headers</small> </h2>
                            </div>
                        </div>
                    </div>
                    {/*   end typography */}
                    <div className="space" />
                    <div id="images">
                        <div className="tim-title">
                            <h2>Images</h2>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <h4>Rounded Image</h4>
                                <img src="assets/img/mockup.png" alt="Rounded Image" className="img-rounded" />
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <h4>Circle Image</h4>
                                <img src="assets/img/mockup.png" alt="Circle Image" className="img-circle" />
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <h4>Thumbnail Image</h4>
                                <img src="assets/img/mockup.png" alt="Thumbnail Image" className="img-thumbnail" />
                            </div>
                        </div>
                        <div className="row">
                        </div>
                    </div>
                    {/*   end images */}
                    <div className="tim-title">
                        <h2>Javascript components</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tim-title">
                                <h3>Modal</h3>
                            </div>
                            {/* Button trigger modal */}
                            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                Launch demo modal
                </button>
                            {/* Modal */}
                            <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                            <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                        </div>
                                        <div className="modal-body">
                                            ...
                      </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Close</button>
                                            <div className="divider" />
                                            <button type="button" className="btn btn-info btn-simple">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*    end modal */}
                        <div className="col-md-6">
                            <div id="tooltips">
                                <div className="tim-title">
                                    <h3>Tooltips</h3>
                                </div>
                                <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
                                <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
                                <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                                <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
                            </div>
                        </div>
                        <div className="clearfix" /><br /><br />
                        {/*     end tooltips */}
                    </div>{/*  end row */}
                    <div className="tim-title">
                        <h3>Collapse</h3>
                    </div>
                    <div id="acordeon">
                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-target="#collapseOne" href="#collapseOne" data-toggle="gsdk-collapse">
                                            GSDK Collapsible Item 1
                      </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-target="#collapseTwo" href="#collapseTwo" data-toggle="gsdk-collapse">
                                            GSDK Collapsible Item 2
                      </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-target="#collapseThree" href="#collapseTwo" data-toggle="gsdk-collapse">
                                            GSDK Collapsible Item 3
                      </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#collapseFour">
                                            Default Collapsible Item 1
                      </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#collapseFive">
                                            Default Collapsible Item 2
                      </a>
                                    </h4>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*  end acordeon */}
                    <div className="space" />
                    <div className="tim-title">
                        <h3>Carousel</h3>
                    </div>
                </div>
            </div>
            <div id="carousel">
                {/*    
            IMPORTANT - This carousel can have a special class for a smooth transition "gsdk-transition". Since javascript cannot be overwritten, if you want to use it, you can use the bootstrap.js or bootstrap.min.js from the GSDKit or you can open your bootstrap.js file, search for "emulateTransitionEnd(600)" and change it with "emulateTransitionEnd(1200)"     
            
    */}
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                        <li data-target="#carousel-example-generic" data-slide-to={1} />
                        <li data-target="#carousel-example-generic" data-slide-to={2} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="assets/img/carousel_blue.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="assets/img/carousel_green.png" alt="Awesome Image" />
                        </div>
                        <div className="item">
                            <img src="assets/img/carousel_red.png" alt="Awesome Image" />
                        </div>
                    </div>
                    {/* Controls */}
                    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                        <span className="fa fa-angle-left" />
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                        <span className="fa fa-angle-right" />
                    </a>
                </div>
            </div> {/* end carousel */}
            <div className="main">
                <div className="container tim-container">
                    <div id="extras">
                        <div className="space" />
                        <div className="row">
                            <div className="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1">
                                <div className="text-center">
                                    <img src="assets/img/dulau.jpg" alt="Rounded Image" className="img-rounded img-responsive img-dog" />
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <h1 className="text-center">About Creative Tim
                    <small className="subtitle">Get to know us</small></h1>
                                <hr />
                                <p>
                                    Creative Tim offers Bootstrap based design elements that speed up your development work. From plugins to complex kits, we have everything you need.
                  </p>
                                <p>
                                    We love the web and care deeply for how users interact with a digital product. The idea behind Creative Tim was creating a standard of things we actually need and would personally use inside our web projects. We power businesses and individuals to create better looking web projects around the world.
                  </p>
                                <p>
                                    We take great interest in how our customers use our resources and offer strong support and unlimited updates. We are constantly thinking about how to make our products intuitive, beautiful and extremely easy to understand, so feel free to tell us your thoughts!
                  </p>
                            </div>
                        </div>
                    </div>
                    {/*     end extras */}
                </div>
                {/* end container */}
                <div className="space-30" />
            </div>
            {/* end main */}
            <div className="parallax-pro">
                <div className="img-src" style={{ backgroundImage: 'url("http://get-shit-done-pro.herokuapp.com/assets/img/bg6.jpg")' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>
                                <small>
                                    Don't forget to check our latest release:<a>
                                    </a></small><a>
                                </a></h1><a>
                            </a></div><a>
                        </a><div className="col-md-6 col-md-offset-3 col-md-12 text-center"><a>
                        </a><h1 className="hello text-center"><a>
                        </a><a href="http://gsdk.creative-tim.com">Get Shit Done Kit <span className="label label-warning"> Pro</span></a>
                                <small>
                                    <ul className="list-unstyled">
                                        <li>50+ new elements</li>
                                        <li>LESS and SASS files</li>
                                        <li>PSD for designers</li>
                                        <li>New Font Icons </li>
                                    </ul>
                                </small>
                            </h1>
                            <div className="actions">
                                <a className="btn btn-lg btn-warning btn-fill" href="http://gsdk.creative-tim.com/?ref=get-shit-done">Live Preview Kit</a>
                            </div>
                        </div>
                    </div>
                    <div className="space-30" />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="credits">
                                ©  Get Shit Done Kit by <a href="http://creative-tim.com"> Creative Tim</a>, made with <i className="fa fa-heart heart" alt="love" /> for a better web.
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}