import NavBar from "./ui-components/SLNavBarHeader2"
import NavBar2 from "./ui-components/SLNavBarHeader"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import { Auth, API } from "aws-amplify"
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { getProfileCard } from "./graphql/queries";


// contact form code
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    phone: yup
        .string("Enter your phone number")
        .required("Phone Number is required"),
    message: yup
        .string("Enter your message")
        .required("Message is required"),
    subject: yup
        .string("Enter your subject")
        .required("Subject is required"),
});

const Contact = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [profileImage, setProfileImage] = useState("");

    const [profileCard, setProfileCard] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  const createProfileCardDetails = async () => {
    const user = await Auth.currentAuthenticatedUser();
    try {
        const response = await API.graphql({
            query: getProfileCard,
            variables: { id: user.attributes.sub }
        });
        const fetchedProfileCard = response.data.getProfileCard;
        setProfileCard(fetchedProfileCard);
        setProfileImage(fetchedProfileCard.image);
        console.log("FINAL PROFILE", fetchedProfileCard);
    } catch (err) {
        console.log(err);
        return false;
    }
};
    useEffect(() => {
        createProfileCardDetails();
    }, []); 

    const updateProfileImage = (newImage) => {
        setProfileImage(newImage);
    };
    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                // Your authentication logic goes here, using Amplify or any other method
                // For example, you might use Auth.currentAuthenticatedUser() from AWS Amplify

                // Simulated authentication check
                const user = await Auth.currentAuthenticatedUser();
                setIsAuthenticated(true);
                // Redirect or handle the case when the user is authenticated
            } catch (error) {
                setIsAuthenticated(false);
                // Redirect or handle the case when the user is not authenticated
            }
        };

        checkAuthentication();
    }, []);

    // contact form code
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Replace with your EmailJS service ID and template ID
                const serviceId = 'service_v2sqw9s';
                const templateId = 'template_dqib1hh';

                // Prepare the email data
                const emailData = {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    subject: values.subject,
                };

                // Send the email using EmailJS
                const response = await emailjs.send(serviceId, templateId, emailData, "DHbT5VKXwklqzIxxH");

                if (response.status === 200) {
                    alert('Email sent successfully!');
                } else {
                    alert('Email sending failed. Please try again later.');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email. Please try again later.');
            }
        },
    });

    const getProfileInfo = async () => {
        const user = await Auth.currentAuthenticatedUser();
        try {
            const response = await API.graphql({
                query: getProfileCard,
                variables: { id: user.attributes.sub }
            });
            const fetchedProfileCard = response.data.getProfileCard;
            // setProfileCard(fetchedProfileCard);
            setProfileImage(fetchedProfileCard.image);
            // console.log("FINAL PROFILE", fetchedProfileCard);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return ( 
        <div>
            {isAuthenticated? (
                <NavBar2 profileImage={profileImage} setProfileImage={setProfileImage}></NavBar2>
            ):(
                <NavBar></NavBar>
            )}
            <Grid
                marginTop="10vh"
                marginBottom="10vh"
                container
                backgroundColor={'#D9F3FA'}
                justifyContent="center"
            >
                <Grid container justifyContent="center" alignItems="center"> {/* Center both horizontally and vertically */}
                    <Grid container sx={1} justifyContent="center">
                        <Typography variant="h5" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                            Our Github Repository
                        </Typography>
                    </Grid>
                </Grid>
                <a style={{ color: "black", textDecoration: "none" }} href="https://github.com/bdasgupta027/studylink">https://github.com/bdasgupta027/studylink</a>
            </Grid>
            {/* contact from code */}
            <Grid
                marginTop="10vh"
                container
                backgroundColor={'#D9F3FA'}
                justifyContent="center"
            >
                <Grid container justifyContent="center" alignItems="center"> {/* Center both horizontally and vertically */}
                    <Grid container sx={1} justifyContent="center">
                        <Typography variant="h5" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                            Contact Us
                        </Typography>
                    </Grid>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <Grid
                        container
                        justifyContent="center"
                    >
                        <TextField
                            fullWidth
                            margin="normal"
                            placeholder='YOUR NAME'
                            label="Name"
                            name="name"
                            type="text"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            placeholder='YOUR EMAIL'
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="phone"
                            placeholder='YOUR PHONE NUMBER'
                            name="phone"
                            label="Phone Number"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="subject"
                            placeholder='HELLO THERE'
                            name="subject"
                            label="Subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.subject && Boolean(formik.errors.subject)}
                            helperText={formik.touched.subject && formik.errors.subject}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="message"
                            placeholder='ENTER MESSAGE...'
                            name="message"
                            label="Message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                        />
                        <Button sx={{ marginBottom: "10vh" }} color="primary" variant="contained" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </div>
    );
}

export default Contact;