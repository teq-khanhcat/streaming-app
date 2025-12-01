import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Layout/Navbar";
import Title from "@/features/Youtube/Title";
import SlipCards from "@/features/Youtube/SlipCards";
import { Box } from "@mui/material";
import Input from "@/features/Youtube/Input";

function Youtube() {
  const [finalKeyword, setFinalKeyword] = useState<string | null>(null);
  const youtubeUrl = finalKeyword
  ? `https://www.youtube.com/results?search_query=${encodeURIComponent(finalKeyword)}`
  : "";

  return (
    <main className={styles.main}>
      <Navbar />
      <Title />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <SlipCards onFinish={(keyword) => {
          setFinalKeyword(`https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`);
        }} />
        <Box sx={{ px: 16, width: "100%" }}>
          <Input url={youtubeUrl} />
        </Box>
      </Box>
    </main>
  );
}

export default Youtube;
