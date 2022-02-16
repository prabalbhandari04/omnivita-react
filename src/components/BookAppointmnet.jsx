// import { doctorLists } from '../data';
import React, { useState,useEffect } from 'react';
import appointment from '../assets/Images/appointment.svg'; 
import { 
    Container,
    Title,
    Wrapper,
    Illustration,
    Img,
    FormWrapper,
    InputWrapper,
    Label,
    Input,
    Select,
    Option,
    Button
} from "./Styled";
import { useSelector } from "react-redux";
import axios from 'axios';
const BookAppointmnet = () => {
    const theme = useSelector((state) => state.theme);
    const [date, SetDate] = useState("");
    const [time, SetTime] = useState("");
    const [doctor, SetDoctor] = useState([]);
    const [appointmentName, SetAppointmentName] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:5003/api/doctors/')
        .then(res=>{
        //   console.log(res)
          SetDoctor(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
      })

    const book = async () => {
        axios.post(`http://localhost:5003/api/appointments/`, {
            date,
            time,
            appointmentName,
    });
        
    }
    


    return (
        <Container bgColor = {theme.background}>
            <Title color = {theme.text}>Book Appointment</Title>

            <Wrapper bgColor = {theme.shade}>   
                <Illustration>
                    <Img src={appointment} alt='appointment'/>
                </Illustration>
                <FormWrapper>
                    <InputWrapper>
                        <Label color = {theme.disabled}>First Name *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Appointment Name"
                        name="appointmentName"
                            type="text"
                            value={appointmentName}
                            onChange={e => SetAppointmentName(e.target.value)} />
                            
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label color = {theme.disabled}>Date *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                         placeholder = "Date"
                            name="date"
                            type="date"
                            value={date}
                            onChange={e => SetDate(e.target.value)} />
                            
                    </InputWrapper>
                    
                    <InputWrapper>
                        <Label color = {theme.disabled}>Doctor *</Label>
                        <Select bgColor = {theme.background} color={theme.text} value={doctor}
                            onChange={e => SetDoctor(e.target.value)}>
                            {
                                doctor.map((doctors) => (
                                    <Option>{doctors.firstname} {doctors.lastname}({doctors.phone})</Option>
                                ))
                            }
                        </Select>
                    </InputWrapper> 

                    <InputWrapper>
                        <Label color = {theme.disabled}>Phone *</Label>
                        <Input bgColor={theme.background} color={theme.text}
                        placeholder = "Time"
                            name="time"
                            type="time"
                            value={time}
                            onChange={e => SetTime(e.target.value)} />
                      
                    </InputWrapper>


                    <Button onClick={book} bgColor={theme.primary} hover={theme.secondary}>ADD</Button>
                </FormWrapper>

            </Wrapper>
        </Container>
    );
};

export default BookAppointmnet;
