import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function ProductDetails({ clickedProduct }) {
  const [selectedImg, setselectedImg] = useState(0);
  const [alignment, setAlignment] = React.useState('left');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      newAlignment(newAlignment);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={clickedProduct.productImg[selectedImg].url}
          alt=""
        />
      </Box>

      <Box sx={{ py:2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{clickedProduct.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            // @ts-ignore
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
         
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius:"5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.productImg.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5"
                  }}
                  
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    key={item.id}
                    src={item.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
