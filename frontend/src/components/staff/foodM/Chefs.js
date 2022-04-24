import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import jsPDF from 'jspdf';  
 
import html2canvas from 'html2canvas';  
import path from "path"
import { Link } from 'react-router-dom';
  
export default class Chefs extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      ChefData: []  
  
    }  
  }  
  printDocument() {  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {
        var img = new Image();
        img.src = path.resolve('thaulla.png');

        var img1 = new Image();
        img1.src = path.resolve('cms.png');
        
        const doc = new jsPDF('p', 'mm', 'a4')  
        doc.addImage(img, 'JPEG', 120, 20 , 30 , 30);
        doc.addImage(img1, 'JPEG', 80, 20 , 30 , 30); 
       
        doc.setTextColor(255 , 0 , 0)
        doc.setFontSize(28);
        doc.text(85, 10, 'Thaulla Bojun')
        doc.setTextColor(0 , 0 , 255)
        doc.setFontSize(16);
        doc.text(10, 70, 'Food Management')
        doc.setTextColor(0 , 255 , 0)
        doc.setFontSize(12);
       
        //Date
        var m_names = new Array("January", "February", "March", 
                          "April", "May", "June", "July",
                          "August", "September", 
                          "October", "November", "December");

        var today = new Date();
        var seconds = today.getSeconds();
        var minutes = today.getMinutes();
        var hours = today.getHours();
        var curr_date = today.getDate();
        var curr_month = today.getMonth();
        var curr_year = today.getFullYear();

        today = m_names[curr_month] + " " + curr_date + "/ " + curr_year + " | " + hours + "h : " + minutes + "min : " + seconds + "sec";
        var newdat = today;
        doc.setTextColor(0 , 0 , 0)
        doc.setFontSize(11);
        doc.text(130, 93, newdat); 
        var imgHeight = canvas.height * 200 / canvas.width;  
        const imgData = canvas.toDataURL('image/png');    
        doc.addImage(imgData, 'JPEG', 5 , 100, 200, imgHeight);  
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = "FoodManagement_" + date[0] + date[1] + date[2] + date[3] + date[4];
        doc.save(`report_${dateStr}.pdf`);
      });  
  }  
  
  componentDidMount() {  
    axios.get('http://localhost:8070/chefs').then(response => {  
      console.log(response.data);  
      this.setState({  
        ChefData: response.data  
      });  
    });  
  }  
  render() {  
    console.log(this.state.ChefData);  
    return (  
      <div>  
        <TableContainer id="pdfdiv" className="txt" component={Paper}>  
          <Table stickyHeader aria-label="sticky table">  
            <TableHead>  
              <TableRow>  
                <TableCell align="right">Chef ID</TableCell>  
                <TableCell align="right">Name</TableCell>  
                <TableCell align="right">Address</TableCell>  
                <TableCell align="right">Contact</TableCell>  
                <TableCell align="right">Email</TableCell>  
                <TableCell align="right">Experience</TableCell>
                <TableCell align="right">Photo</TableCell>  
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {  
                this.state.ChefData.map((p, index) => {  
                  return <TableRow key={index}>  
                    <TableCell align="right">{p.chefid}</TableCell>  
                    <TableCell align="right">{p.name}</TableCell>  
                    <TableCell align="right">{p.address}</TableCell>  
                    <TableCell align="right">{p.phone}</TableCell>  
                    <TableCell align="right">{p.email}</TableCell>  
                    <TableCell align="right">{p.exp}</TableCell> 
                    <TableCell align="right"><img src={"images/" + p.photo}  style={{width:"100px" , height:"100px"}}/></TableCell>   
                  </TableRow>  
                })  
              }  
            </TableBody>  
          </Table> 
         
        </TableContainer>  <br/><br/>
        <div>
            <button className="info__button" onClick={this.printDocument} variant="contained" color="primary" style={{marginLeft:"600px"}}>  
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF  
            </button>
            <Link to = "/edit-foodM">
                <button className="btn btn-danger"  variant="contained" color="primary" style={{float:"right"}}>  
                <i class="fa fa-reply" aria-hidden="true"></i> Go Back  
                </button>
            </Link>

        </div>

        <br/><br/><br/><br/><br/><br/>
  
      </div>  
  
    );  
  }  
}  
  
