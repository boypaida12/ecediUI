/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Text, Flex, Button, Divider, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navbar/Navigation";
import { signInWithGoogle, signUpWithGoogle } from "../../config/firebase";

const BuyerAuth = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpWithGoogle("Buyer");
      toast({
        description: "Successfully Registered",
        duration: 3000,
        status: "success",
        colorScheme: "green",
      });
    } catch (error) {
      console.log(error);
    }
    navigate({ pathname: "/buyer-dashboard" });
  };

  return (
    <>
      <Navigation />
      <Flex minH="75vh" justifyContent="center" alignItems="center">
        <Box
          width={500}
          shadow="xl"
          rounded="xl"
          mt={5}
          mx="auto"
          h={400}
          textAlign="center"
          position="relative"
          overflow="hidden"
        >
          {/* Overlay for background image */}
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(https://www.confectionerynews.com/var/wrbm_gb_food_pharma/storage/images/1/4/6/0/30641-3-eng-GB/stopak-stacks.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(50%)", // Adjust the brightness percentage as needed
            }}
          ></Box>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            h={350}
          >
            <Button
              onClick={handleGoogleSignUp}
              py={8}
              px={10}
              fontSize="1.5rem"
              rounded="2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="34"
                height="34"
                viewBox="0 0 48 48"
                style={{ marginRight: 10 }}
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default BuyerAuth;
