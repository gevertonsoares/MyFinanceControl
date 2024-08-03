import { Box, Typography } from "@mui/material";
import { RootState } from "./../../store/index";
import { useSelector } from "react-redux";

export default function Saldo() {
  const saldo = useSelector((state: RootState) => state.transactions.saldo)

  const changeBg = (saldo: number) => {
    if (saldo < 500) return "error.main";
    if (saldo < 1000) return "warning.main"; 
    return "success.main";
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        backgroundColor: changeBg(saldo),
        color: "white",
        padding: "8px 16px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" component="p">
        Saldo: R${saldo.toFixed(2)}
      </Typography>
    </Box>
  );
}