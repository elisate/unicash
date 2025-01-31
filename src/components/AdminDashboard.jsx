import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import AddRemove from "./AddRemove"; // Import AddNewShop component

const ShopsDashboard = () => {
  const [shops, setShops] = useState([
    { name: "Shop 1", location: "Nyarugenge" },
    { name: "Shop 2", location: "Kigali" },
    { name: "Shop 3", location: "Nyamirambo" },
    { name: "Shop 4", location: "Remera" },
    { name: "Shop 5", location: "Kigali" },
  ]);
  const [newShop, setNewShop] = useState({ name: "", location: "" });

  const handleAddShop = () => {
    if (newShop.name && newShop.location) {
      setShops([...shops, newShop]);
      setNewShop({ name: "", location: "" });
    } else {
      alert("Please fill in both name and location!");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={2}
      sx={{ marginTop: 2, minHeight: "100vh", overflowY: "auto" }}
    >
      {/* Title Section */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          background: "white",
          zIndex: 1,
          padding: "10px 0", // Add padding for better spacing
          fontSize: "1.5rem", // Slightly larger font size
          fontWeight: "bold", // Bold the title
          position: "sticky", // Make title stick at the top
          top: 0, // Pin to the top of the screen
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Add a subtle shadow to separate it from content
        }}
      >
        Registered Shops
      </Typography>

      {/* Add New Shop Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "180px", // Fixed height for Add New Shop
          overflowY: "auto", // Scrollable
          marginBottom: 2,
        }}
      >
        <AddRemove
          newShop={newShop}
          setNewShop={setNewShop}
          handleAddShop={handleAddShop}
        />
      </Box>

      {/* Display Existing Shops */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {shops.map((shop, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "200px",
              maxWidth: "250px",
              height: "180px",
              borderRadius: "8px",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "bold" }}
              >
                {shop.name}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                {shop.location}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ShopsDashboard;
