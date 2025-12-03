import { Box, Typography } from "@mui/material";
import React from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

export const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

function Title() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }} // bắt đầu từ trái
      animate={{ x: 0, opacity: 1 }} // trượt vào vị trí
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          fontFamily: "Inter, sans-serif !important",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif !important",
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          VOTE
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter, sans-serif !important",
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          CHO
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif !important",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          BÍNH
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter, sans-serif !important",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          BÈ
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif !important",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          CHƯA?
        </Typography>
      </Box>
    </motion.div>
  );
}

export default Title;
