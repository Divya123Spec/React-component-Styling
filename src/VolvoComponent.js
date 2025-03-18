import React from 'react';
import { Tabs, Tab, TextField, Button, Typography } from "@volvo/vcdk-react";
import Grid from '@mui/material/Grid';
import './VolvoComponent.css'; // Import the CSS file for styling
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { purple } from '@mui/material/colors';

const VolvoComponent = () => {
  return (
    <div className='parent'>
      <vcdk-typography variant="heading2">Volvo Experience System Component Styling</vcdk-typography>
      <div  className="tabs" >
      <vcdk-typography variant="heading4" >Tabs component</vcdk-typography>
      <vcdk-tabs show-divider="" size="medium">
      <vcdk-tab color="orange" disabled="">Dasboard</vcdk-tab>
      <vcdk-tab disabled="true">Search</vcdk-tab>
      <vcdk-tab disabled="true">Worksheet</vcdk-tab>
      <vcdk-tab>
       Administration
        {/* <vcdk-notification-badge content="4" slot="end"></vcdk-notification-badge> */}
      </vcdk-tab>
    </vcdk-tabs>
    </div>
      <div className='FinancialHeading'>
        <vcdk-typography variant="heading4" color="purple" margin="2px">Financial Dimension Administration</vcdk-typography>
      </div>

      <div>
        <Grid container spacing={3} className="form-container">
          <Grid item xs={12} md={3.5}>
            <TextField label="Pricing Group" variant="outlined" value="SWE" fullWidth />
          </Grid>
          <Grid item xs={12} md={3.5}>
            <vcdk-dropdown label="Dimension Type" placeholder="Select your market">
              <vcdk-dropdown-option value="extra-invoice-item"> Direct Sales</vcdk-dropdown-option>
              <vcdk-dropdown-option value="extra-invoice-item"> InDirect Sales</vcdk-dropdown-option>
            </vcdk-dropdown>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <vcdk-dropdown className="label_name" placeholder="Select your market" label="Local Adaption Type">
              <vcdk-dropdown-option value="external-workshop">External Workshop</vcdk-dropdown-option>
              <vcdk-dropdown-option value="external-workshop">Internal Workshop</vcdk-dropdown-option>
            </vcdk-dropdown>
          </Grid>
          {/* <Grid item xs={12} md={1.5} marginTop={"24px"}  >
            <Button variant="primary" color="primary"  >Search</Button>
          </Grid> */}
           <Grid item xs={12} md={1.5} marginTop={"24px"} >
            <Button  color="primary"  className='save_btn'  >Search</Button>
          </Grid>
        </Grid>
        <div className="table-container">
          <vcdk-table className="custom-table">
            <table aria-label="Example Table">
              {/* <caption>Table example with accessibility enhancements</caption> */}
              <thead>
                <tr className='table-header'>
                  <th scope="col">Name</th>
                  <th scope="col">LP CR Type</th>
                  <th scope="col">NP CR Type</th>
                  <th scope="col">Price Currency</th>
                  <th scope="col">Cost Currency</th>
                  <th scope="col">Taxable</th>
                  <th scope="col">Published VSS</th>
                  <th scope="col">Based on</th>
                  <th scope="col">Combination Type</th>
                  <th scope="col">Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SWE Superstructure</td>
                  <td>RM911</td>
                  <td>RM950</td>
                  <td>SEK</td>
                  <td>SEK</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Sales Price</td>
                  <td>Cost Provision</td>
                  <td>
                    <ModeEditOutlineOutlinedIcon className="table-icon" />
                    <DeleteOutlineOutlinedIcon className="table-icon delete-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Example Item</td>
                  <td>RM912</td>
                  <td>RM951</td>
                  <td>USD</td>
                  <td>USD</td>
                  <td>No</td>
                  <td>No</td>
                  <td>Cost Price</td>
                  <td>Revenue Provision</td>
                  <td>
                    <ModeEditOutlineOutlinedIcon className="table-icon" />
                    <DeleteOutlineOutlinedIcon className="table-icon delete-icon" />
                  </td>
                </tr>
                <tr>
                  <td>New Item</td>
                  <td>RM913</td>
                  <td>RM952</td>
                  <td>EUR</td>
                  <td>EUR</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Sales Price</td>
                  <td>Cost Provision</td>
                  <td>
                    <ModeEditOutlineOutlinedIcon className="table-icon" />
                    <DeleteOutlineOutlinedIcon className="table-icon delete-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </vcdk-table>
        </div>
      </div>
    </div>
  );
};

export default VolvoComponent;