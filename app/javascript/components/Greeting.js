import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGreeting } from "../redux/greetings/greetingsSlice";
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components for animations and effects
const GreetingContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const LoadingText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ErrorText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ff0000;
`;

const GreetingText = styled.p`
  font-size: 24px;
  color: #007bff;
`;

const ShowGreeting = () => {
    const { isLoading, error } = useSelector((store) => store.greetings);
    const greeting = useSelector((store) => store.greetings.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    if (isLoading) {
        return <LoadingText>Loading....</LoadingText>
    }

    if (error) {
        return <ErrorText>Something went wrong!</ErrorText>
    }

    return (
        <GreetingContainer>
            <h1>Random Greeting!</h1>
            <GreetingText>You can see the <strong>Hello User! How are you?</strong> in 10 different languages!</GreetingText>
            <GreetingText>Greeting: {greeting}</GreetingText>
        </GreetingContainer>
    )
}

export default ShowGreeting;
