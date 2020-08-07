import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class Content extends PureComponent {
  static propTypes = {

  }

  render() {
    const { children, title} = this.props;
    const { path } = children.props;
    const pathSnippets = path.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      return  `/${pathSnippets.slice(0, index + 1).join('/')}`;
      // return (
      //   <Breadcrumb.Item key={url}>
      //     <Link to={url}>{title}</Link>
      //   </Breadcrumb.Item>
      // );
    });
    return (
      <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{title}</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <Link className="breadcrumb-item" to="/">Home</Link>
                <Link className="breadcrumb-item active" to={extraBreadcrumbItems}>{title}</Link>
                {/* <li className="breadcrumb-item active">Dashboard v3</li> */}
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
            {children}
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
    )
  }
}

export default Content


