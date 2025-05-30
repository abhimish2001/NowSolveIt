// components/auth/Register.jsx
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function Register() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://nsi-mern-backend.onrender.com/api/auth/register', formData);

      // Save user to context and localStorage
      login(res.data.user);
      localStorage.setItem('token', res.data.token);

      alert('Registration successful!');
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.message || 'Error registering user.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleRegister} className="col-md-6 mx-auto border p-4 rounded shadow">
        <div className="mb-3">
          <label>Full Name</label>
          <input
            name="fullname"
            type="text"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
