import { useEffect } from "react";
import image from "../../images/coffeetable.jpg";

const About = (props) => {
    useEffect(() => {
        props.onChange();
    }, []);

    return (
        <div className="about">
            <div className="aboutContainer">
                <img src={image} alt="Two cups of coffee" />
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet mattis nisl mattis luctus. Praesent rutrum rutrum semper. Nulla facilisi. In imperdiet quam ut molestie sollicitudin. Phasellus at leo vulputate, viverra turpis nec, porta magna. Vestibulum non nibh lorem. Proin facilisis, nunc sed imperdiet eleifend, augue est euismod ipsum, sit amet condimentum purus odio in nisi. Integer et est venenatis, rutrum ligula vitae, ultricies nunc. Curabitur pharetra pulvinar dolor, vel aliquet ipsum. Aliquam a tellus porta, volutpat urna sed, dictum sem. Suspendisse vel lobortis lectus, lacinia pretium sapien. Duis pharetra justo sit amet aliquet rhoncus. Curabitur sed tempor felis, quis auctor lorem. Maecenas in volutpat diam. Vivamus ornare eu enim sed egestas.
                </p>
            </div>
        </div>
    )
};

export default About;