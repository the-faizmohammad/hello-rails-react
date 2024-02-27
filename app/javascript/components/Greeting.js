import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const GreetingContainer = styled.div`
  animation: fadeIn 0.5s ease-in-out;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const GreetingText = styled.p`
  font-size: 24px;
  color: #007bff;
`;

const ShowGreeting = () => {
  const { isLoading, error, greeting } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchGreeting());
  };

  return (
    <GreetingContainer>
      <h1>Random Greeting!</h1>
      <GreetingText>You can see the <strong>Hello User! How are you?</strong> in 10 different languages!</GreetingText>
      <GreetingText>Greeting: {greeting}</GreetingText>
      <Button onClick={handleRefresh}>Refresh</Button>
    </GreetingContainer>
  );
};

export default ShowGreeting;
