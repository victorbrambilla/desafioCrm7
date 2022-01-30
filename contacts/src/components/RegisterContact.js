import { Box, Button,TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import {styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { dataService } from '../services/dataService';
import { GlobalContext } from '../contexts/GlobalStorage';
import SaveIcon from '@mui/icons-material/Save';

const CssTextField = styled(TextField)({
 margin:'10px',
 width: '80%'
});


export default function RegisterContact(props) {
    const global = React.useContext(GlobalContext);
    const [loading, setLoading]=useState(false)

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [department, setDepartment] = useState(''); 
    const [mailingStreet, setMailingStreet] = useState(''); 
    const [mailingCity, setMailingCity] = useState('');
    const [mailingState, setMailingState] = useState(''); 
    const [mailingZip, setMailingZip] = useState(''); 
    const [mailingCountry, setMailingCountry] = useState('');

    

    const handleSubmit =  (event) => {
        event.preventDefault();
        setLoading(true);
        const data ={
          Email: email,
          First_Name: firstName,
          Last_Name: lastName,
          Phone: phone,
          Department: department,
          Mailing_Street: mailingStreet,
          Mailing_City: mailingCity,
          Mailing_State: mailingState,
          Mailing_Zip: mailingZip,
          Mailing_Country: mailingCountry
        }

         dataService.createContact(data).then(()=>{
          global.getCont();
          alert("Sended!");
          return props.closeModal();
         })
         .finally(()=>setLoading(false));
      };

    const getContact = React.useCallback(() => {
      setLoading(true);
      dataService.getContact(props.id).then(data=>{
        setEmail(data[0].Email);
        setFirstName(data[0].First_Name);
        setLastName(data[0].Last_Name);
        setPhone(data[0].Phone);
        setDepartment(data[0].Department);
        setMailingStreet(data[0].Mailing_Street);
        setMailingCity(data[0].Mailing_City);
        setMailingState(data[0].Mailing_State);
        setMailingZip(data[0].Mailing_Zip);
        setMailingCountry(data[0].Mailing_Country);
      })
      .finally(()=>setLoading(false));
    },[props.id])
    
    const updateContact =  (event) => {
      event.preventDefault();
      setLoading(true);
        const data ={
          Email: email,
          First_Name: firstName,
          Last_Name: lastName,
          Phone: phone,
          Department: department,
          Mailing_Street: mailingStreet,
          Mailing_City: mailingCity,
          Mailing_State: mailingState,
          Mailing_Zip: mailingZip,
          Mailing_Country: mailingCountry
        }

        dataService.updateContact(props.id, data).then(()=>{
          global.getCont();
          alert("Updated!");
          return props.closeModal();
        })
        .finally(()=>setLoading(false));
    }

    React.useEffect(()=>{
      if(props.id){
        return getContact();
      }
    },[getContact, props.id])  

    return (
    <>
        <Box component="form" Validate onSubmit={handleSubmit} sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', }}>
          <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
              <CssTextField
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="FirstName"
                    label="First Name"
                    name="FirstName"
                    autoComplete="First Name"
                    value={firstName}
                    onChange={(e)=>{setFirstName(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="LastName"
                    label="Last Name"
                    name="LastName"
                    autoComplete="Last Name"
                    value={lastName}
                    onChange={(e)=>{setLastName(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="Phone"
                    label="Phone"
                    name="Phone"
                    autoComplete="Phone"
                    type="tel"
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="Department"
                    label="Department"
                    name="Department"
                    autoComplete="Department"
                    value={department}
                    onChange={(e)=>{setDepartment(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="MailingStreet"
                    label="Mailing Street"
                    name="MailingStreet"
                    autoComplete="Street"
                    value={mailingStreet}
                    onChange={(e)=>{setMailingStreet(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="MailingCity"
                    label="Mailing City"
                    name="MailingCity"
                    autoComplete="City"
                    value={mailingCity}
                    onChange={(e)=>{setMailingCity(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="MailingState"
                    label="Mailing State"
                    name="MailingState"
                    autoComplete="State"
                    value={mailingState}
                    onChange={(e)=>{setMailingState(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="MailingZip"
                    label="Mailing Zip"
                    name="MailingZip"
                    autoComplete="Zip"
                    value={mailingZip}
                    onChange={(e)=>{setMailingZip(e.target.value)}}
                  />
                  <CssTextField
                    margin="normal"
                    required
                    id="MailingCountry"
                    label="Mailing Country"
                    name="MailingCountry"
                    autoComplete="Country"
                    value={mailingCountry}
                    onChange={(e)=>{setMailingCountry(e.target.value)}}
                  />             
          </Box>
              
          <Box sx={{display:'flex', justifyContent:'center',mt:'20px'}}>
              {props.id ? 
              <LoadingButton color='primary' loading={loading} onClick={updateContact} variant="contained" sx={{m:'0 10px'}} startIcon={<AddIcon />}>Edit</LoadingButton> : 
              <LoadingButton color='primary' loading={loading} startIcon={<SaveIcon />}  type='submit' variant="contained" sx={{m:'0 10px'}} startIcon={<AddIcon />}>Send</LoadingButton>
              }

              <Button onClick={props.closeModal} color='error' variant="contained" sx={{m:'0 10px'}} startIcon={<ArrowBack />}>Cancel</Button>
          </Box>
        </Box>
    </>  
    )
}
