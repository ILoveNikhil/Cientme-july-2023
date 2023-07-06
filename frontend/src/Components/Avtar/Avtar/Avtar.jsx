import { Avatar } from "@mui/material";
import React from "react";

const Avtar = () => {
  const [avatar, setAvatar] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };
  return (
    <div>
      {/* Avtar */}

      <Avatar
        src={avatar}
        alt="User"
        sx={{ height: "10vmax", width: "10vmax" }}
      />

      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default Avtar;
