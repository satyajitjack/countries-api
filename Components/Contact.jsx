
import { useParams } from 'react-router-dom';

const Contact = () => {
    // console.log("Hi");
    const params = useParams()
    console.log(params);
  return (
    
    <h1>Contact Me</h1>

  )
}

export default Contact