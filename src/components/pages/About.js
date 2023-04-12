import { useEffect } from "react";

const About = (props) => {
    useEffect(() => {
        props.onChange();
    }, []);

    return (
        <div className="about">About</div>
    )
};

export default About;