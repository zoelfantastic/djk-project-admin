import React from 'react';

export default class Table extends React.Component {
    
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    componentDidMount() {
        const script = document.createElement("script");
        script.src = 'js/content.js';
        script.async = true;

        document.body.appendChild(script);
    }

    getKeys = function(){
     return Object.keys(this.props.data[0]);
      //  return this.props.header;
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
      return <tr key={index}>{this.renderRow({index, row, keys})  }</tr>
        // return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }

    renderRow = (props) => {
      return props.keys.map((key, index)=>{
        return <td key={props.row[key]}>{props.row[key]}</td>
      })
    }
    
    render() {
        let a = this.getRowsData();
        return (
          <div>
            <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {a}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}