import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const AddNewShop = ({ newShop, setNewShop, handleAddShop }) => {
  return (
    <Card
      sx={{
        minWidth: "280px",
        maxWidth: "320px",
        height: "180px",
        borderRadius: "8px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        border: "2px dashed gray",
        padding: 1,
        position: "fixed", // Fixed position
        top: "20px", // Adjust top position (change as needed)
        left: "20px", // Fixed to the left side of the screen
        zIndex: 1000, // Ensure it's above other content
        marginBottom: "20px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontSize: "14px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Add New Shop
        </Typography>
        <TextField
          label="Shop Name"
          variant="outlined"
          size="small"
          value={newShop.name}
          onChange={(e) => setNewShop({ ...newShop, name: e.target.value })}
          sx={{ mb: 1, width: "85%" }}
        />
        <TextField
          label="Location"
          variant="outlined"
          size="small"
          value={newShop.location}
          onChange={(e) => setNewShop({ ...newShop, location: e.target.value })}
          sx={{ mb: 1, width: "85%" }}
        />
        <Button
          variant="contained"
          onClick={handleAddShop}
          sx={{
            width: "85%",
            height: "30px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Add Shop
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddNewShop;
