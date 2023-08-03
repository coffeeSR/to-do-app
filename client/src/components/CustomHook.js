import React from "react";
import useFetch from "../hooks/useFetch";

const CustomHook = () => {
    const {data, loading, error} = useFetch(
        "http://localhost:7000/api/v1/todos"
    );

    if (loading) return <div>Loading...</div>
    if(error) return <div>{error?.message}</div>

    console.log({ data })
    return (
            <>
                {data && data.length > 0 && (
                    <>
                        <ul>
                            {data.map(todo => 
                                <li key={todo?._id}>
                                {todo?.title}
                                </li>
        
                            )}
                        </ul>
                    </>
                )}
            </>
        );
    }

export default CustomHook;