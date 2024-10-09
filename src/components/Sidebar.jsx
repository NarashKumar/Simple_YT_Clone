import { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <Stack
      direction="row"
      marginTop={4}
      sx={{ overflowY: "auto", 
        height: { xs: "auto", md: "95%" }, 
        flexDirection: { md: "column" },
        
      }}
    >
      {categories.map((category) => (
        <button 
          key={category.name}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory || hoveredCategory === category.name ? 'red' : 'black',
            color: 'white',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '15px',
            border: 'none',
          }}
          onMouseEnter={() => setHoveredCategory(category.name)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <span 
            style={{ 
              color: category.name === selectedCategory || hoveredCategory === category.name ? 'white' : 'red',
            }}
          >
            {category.icon}
          </span>
          <span 
            style={{ 
              opacity: category.name === selectedCategory || hoveredCategory === category.name ? '1' : '0.8',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
