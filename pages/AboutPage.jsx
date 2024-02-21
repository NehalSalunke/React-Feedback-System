import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage(props) {
  return (
    <Card>
    <div className="about">
      <h1>About section</h1>
      <p>This is React App to leave feedback of product or service </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
    </Card>
  );
}
export default AboutPage;
