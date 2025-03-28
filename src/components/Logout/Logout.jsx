import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="btn btn-outline-danger">
      Logout
    </button>
  );
}

export default LogoutButton;