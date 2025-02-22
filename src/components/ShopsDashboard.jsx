import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ShopsDashboard = () => {
  const [shops, setShops] = useState(
    Array.from({ length: 12 }, () => ({
      name: "",
      tin: "",
      location: "",
      email: "",
      contact: "",
      regCertificate: null,
      agreementDoc: null,
      shopImage: null,
    }))
  );
  const [open, setOpen] = useState(false); // Add Shop dialog
  const [newShop, setNewShop] = useState({
    name: "",
    tin: "",
    location: "",
    email: "",
    contact: "",
    regCertificate: null,
    agreementDoc: null,
    shopImage: null,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedShopIndex, setSelectedShopIndex] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editShop, setEditShop] = useState({
    name: "",
    tin: "",
    location: "",
    email: "",
    contact: "",
    regCertificate: null,
    agreementDoc: null,
    shopImage: null,
  });
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddShop = () => {
    if (
      newShop.name &&
      newShop.tin &&
      newShop.location &&
      newShop.email &&
      newShop.contact
    ) {
      setShops([...shops, newShop]);
      setNewShop({
        name: "",
        tin: "",
        location: "",
        email: "",
        contact: "",
        regCertificate: null,
        agreementDoc: null,
        shopImage: null,
      });
      handleClose();
    }
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedShopIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    if (selectedShopIndex !== null) {
      setEditShop({ ...shops[selectedShopIndex] });
      setEditOpen(true);
      setAnchorEl(null);
    }
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setSelectedShopIndex(null);
  };

  const handleEditSave = () => {
    if (
      editShop.name &&
      editShop.tin &&
      editShop.location &&
      editShop.email &&
      editShop.contact
    ) {
      const updatedShops = [...shops];
      updatedShops[selectedShopIndex] = editShop;
      setShops(updatedShops);
      setEditOpen(false);
      setSelectedShopIndex(null);
    }
  };

  const openDeleteDialog = () => {
    setDeleteOpen(true);
    setAnchorEl(null);
  };

  const handleDeleteConfirm = () => {
    if (selectedShopIndex !== null) {
      setShops(shops.filter((_, index) => index !== selectedShopIndex));
      setDeleteOpen(false);
      setSelectedShopIndex(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" p={2} sx={{ marginTop: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" sx={{ fontSize: "1.25rem" }}>
          Registered Shops
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          <AddIcon sx={{ mr: 1 }} />
          Add Shop
        </Button>
      </Box>

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
          marginTop: 2,
        }}
      >
        {shops.map((shop, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "150px",
              maxWidth: "180px",
              height: "160px",
              borderRadius: "10px",
              flexShrink: 0,
              marginTop: 2,
              position: "relative",
            }}
          >
            <CardContent>
              {shop.shopImage ? (
                <Box
                  component="img"
                  src={URL.createObjectURL(shop.shopImage)}
                  alt="Shop"
                  sx={{
                    width: "100px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: 1,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: "100px",
                    height: "60px",
                    backgroundColor: "lightgray",
                    borderRadius: "5px",
                    marginBottom: 1,
                  }}
                ></Box>
              )}
              <Typography variant="h6" sx={{ fontSize: "12px" }}>
                {shop.name || `Shop ${index + 1}`}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                {shop.location || "Nyarugenge"}
              </Typography>
              <IconButton
                sx={{ position: "absolute", top: 5, right: 5 }}
                onClick={(event) => handleMenuClick(event, index)}
              >
                <MoreVertIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {selectedShopIndex !== null && (
          <Box p={2} sx={{ minWidth: "200px" }}>
            <Typography variant="body2">
              TIN: {shops[selectedShopIndex].tin || "N/A"}
            </Typography>
            <Typography variant="body2">
              Email: {shops[selectedShopIndex].email || "N/A"}
            </Typography>
            <Typography variant="body2">
              Contact: {shops[selectedShopIndex].contact || "N/A"}
            </Typography>
            <MenuItem onClick={handleEdit}>
              <EditIcon color="primary" sx={{ mr: 1 }} />
              Edit
            </MenuItem>
            <MenuItem onClick={openDeleteDialog}>
              <DeleteIcon color="error" sx={{ mr: 1 }} />
              Delete
            </MenuItem>
          </Box>
        )}
      </Menu>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Shop</DialogTitle>
        <DialogContent>
          <TextField
            label="Shop Name"
            fullWidth
            margin="dense"
            value={newShop.name}
            onChange={(e) => setNewShop({ ...newShop, name: e.target.value })}
          />
          <TextField
            label="Shop TIN"
            fullWidth
            margin="dense"
            value={newShop.tin}
            onChange={(e) => setNewShop({ ...newShop, tin: e.target.value })}
          />
          <TextField
            label="Location"
            fullWidth
            margin="dense"
            value={newShop.location}
            onChange={(e) =>
              setNewShop({ ...newShop, location: e.target.value })
            }
          />
          <TextField
            label="Shop Email"
            fullWidth
            margin="dense"
            value={newShop.email}
            onChange={(e) => setNewShop({ ...newShop, email: e.target.value })}
          />
          <TextField
            label="Shop Contact"
            fullWidth
            margin="dense"
            value={newShop.contact}
            onChange={(e) =>
              setNewShop({ ...newShop, contact: e.target.value })
            }
          />

          <Button
            variant="outlined"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 2 }}
          >
            Upload Shop Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setNewShop({ ...newShop, shopImage: e.target.files[0] })
              }
            />
          </Button>
          {newShop.shopImage && (
            <Typography variant="caption" sx={{ ml: 2 }}>
              {newShop.shopImage.name}
            </Typography>
          )}

          <Button
            variant="outlined"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 2 }}
          >
            Upload Registration Certificate
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              hidden
              onChange={(e) =>
                setNewShop({ ...newShop, regCertificate: e.target.files[0] })
              }
            />
          </Button>
          {newShop.regCertificate && (
            <Typography variant="caption" sx={{ ml: 2 }}>
              {newShop.regCertificate.name}
            </Typography>
          )}

          <Button
            variant="outlined"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 2 }}
          >
            Upload Agreement Document
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              hidden
              onChange={(e) =>
                setNewShop({ ...newShop, agreementDoc: e.target.files[0] })
              }
            />
          </Button>
          {newShop.agreementDoc && (
            <Typography variant="caption" sx={{ ml: 2 }}>
              {newShop.agreementDoc.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddShop} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Shop</DialogTitle>
        <DialogContent>
          <TextField
            label="Shop Name"
            fullWidth
            margin="dense"
            value={editShop.name}
            onChange={(e) => setEditShop({ ...editShop, name: e.target.value })}
          />
          <TextField
            label="Shop TIN"
            fullWidth
            margin="dense"
            value={editShop.tin}
            onChange={(e) => setEditShop({ ...editShop, tin: e.target.value })}
          />
          <TextField
            label="Location"
            fullWidth
            margin="dense"
            value={editShop.location}
            onChange={(e) =>
              setEditShop({ ...editShop, location: e.target.value })
            }
          />
          <TextField
            label="Shop Email"
            fullWidth
            margin="dense"
            value={editShop.email}
            onChange={(e) =>
              setEditShop({ ...editShop, email: e.target.value })
            }
          />
          <TextField
            label="Shop Contact"
            fullWidth
            margin="dense"
            value={editShop.contact}
            onChange={(e) =>
              setEditShop({ ...editShop, contact: e.target.value })
            }
          />

          <Button
            variant="outlined"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 2 }}
          >
            {editShop.shopImage ? "Change Shop Image" : "Upload Shop Image"}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setEditShop({ ...editShop, shopImage: e.target.files[0] })
              }
            />
          </Button>
          {editShop.shopImage && (
            <Typography variant="caption" sx={{ ml: 2 }}>
              {editShop.shopImage.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete{" "}
            {selectedShopIndex !== null && shops[selectedShopIndex].name
              ? shops[selectedShopIndex].name
              : "this shop"}
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ShopsDashboard;
