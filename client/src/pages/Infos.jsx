import{ useState } from "react";
import "../style/infos.scss";

export default function Infos() {
  const [formData, setFormData] = useState({
    username: "",
    skills: "",
    sector: "",
    experience: "",
    location: "",
    communication: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <img src="" alt="Logo" className="logo" />
      <h1>Inscription</h1>
      <img src="" alt="Avatar" className="avatar" />
      <form onSubmit={handleSubmit}>
        <label>
          Nom d’utilisateur.rice ou pseudonyme :
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Compétences et Intérêts Professionnels :
          <select name="skills" value={formData.skills} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Développement Web">Développement Web</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Data Science">Data Science</option>
          </select>
        </label>
        <label>
          Secteur d’activité :
          <select name="sector" value={formData.sector} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="Technologie">Technologie</option>
            <option value="Santé">Santé</option>
            <option value="Finance">Finance</option>
            <option value="Éducation">Éducation</option>
          </select>
        </label>
        <label>
          Niveau d’expérience :
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </label>
        <label>
          Localisation :
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Préférences de communication :
          <input
            type="text"
            name="communication"
            value={formData.communication}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}