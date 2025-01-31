import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import AddRemove from "./AddRemove";

const ShopsDashboard = () => {
  const [shops, setShops] = useState([...Array(10)]);

  return (
    <Box display="flex" flexDirection="column" p={2} sx={{ marginTop: 2 }}>
      <Box
        sx={{
          width: "200px",
          marginBottom: 2,
          marginLeft: "auto",
        }}
      ></Box>

      <Typography
        variant="h4"
        sx={{
          mb: -2,
          top: 0,
          background: "white",
          zIndex: 0,
          padding: "8px 0",
          fontSize: "1.25rem",
        }}
      >
        Registered Shops
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "flex-start",
          paddingBottom: 2,
          maxWidth: "100%",
          height: "350px",
          overflowY: "auto",
          marginTop: 4, // Space between the cards and the title
        }}
      >
        {shops.map((_, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "100px",
              maxWidth: "120px",
              height: "120px",
              borderRadius: "10px",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  width: "80px",
                  height: "50px",
                  backgroundColor: "lightgray",
                  marginY: 1,
                  borderRadius: "5px",
                  backgroundImage: "url('https://via.placeholder.com/60')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>

              <Typography variant="h6" sx={{ mt: 1, fontSize: "10px" }}>
                Shop {index + 1}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                Nyarugenge
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ShopsDashboard;
