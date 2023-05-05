import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();

  return <div>UserPage of user id: {id}</div>;
};

export default UserPage;
