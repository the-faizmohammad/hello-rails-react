import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGreeting } from "../redux/greetings/greetingsSlice";
import React from 'react';

const ShowGreeting = () => {
    const { isLoading, error } = useSelector((store) => store.greetings);
    const greeting = useSelector((store) => store.greetings.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    if (isLoading) {
        return <span>Loading....</span>
    }

    if (error) {
        return <span>Something went wrong!</span>
    }

    return (
        <div>
            <h1> Random Greeting! </h1>
            <p>You can see the <strong>Hello User! How are you?</strong> in 10 different languages!</p>
            <p>Greeting: {greeting}</p>
        </div>
    )
}

export default ShowGreeting;