import { motion } from "framer-motion";

export default function Title() {
  const textStyle = {
    fontSize: 100,
    fontWeight: "bold",
    display: "inline-block",
    whiteSpace: "nowrap",
    margin: "0 4px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <motion.span
        style={{ ...textStyle, color: "#889E73" }}
        initial={{ x: -200, opacity: 0, skewX: 15 }}
        animate={{ x: 0, opacity: 1, skewX: 15 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Mass
      </motion.span>

      <motion.span
        style={{ ...textStyle, color: "#A94A4A" }}
        initial={{ x: 200, opacity: 0, skewX: -15 }}
        animate={{ x: 0, opacity: 1, skewX: -15 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Stream
      </motion.span>
    </div>
  );
}
