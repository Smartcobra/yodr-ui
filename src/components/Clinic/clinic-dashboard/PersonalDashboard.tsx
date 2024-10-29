import { useNavigate } from "react-router-dom"


const PersonalDashboard = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/session-management");
  }

  return (
    <div>
      <button onClick={handleClick}>Dashboard</button>
    </div>
  )
}

export default PersonalDashboard
