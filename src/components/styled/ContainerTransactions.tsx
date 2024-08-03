import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

export default function ContainerTransactions() {
    const transactions = useSelector((state: RootState) => state.transactions.transactions)

    return (
        <Container fixed component='main' maxWidth={false}>
            <Stack direction={'column'} spacing={2}>
                {transactions.length === 0 ? (
                    <Typography textAlign={'center'} variant="h6" component="h1" sx={{ p: 2 }}>
                        Empty
                    </Typography>
                ) : (
                transactions.map(transaction => (
                    <Stack
                        key={transaction.id}
                        direction={'row'}
                        justifyContent="space-around"
                        spacing={1}
                        sx={{ bgcolor: '#1A2130', border: 1, borderColor: 'text.color', borderRadius: '10px', padding: '10px' }}
                    >
                        <Box component='section'>
                            <Grid container spacing={"15rem"}>
                                <Grid item xs={4}>
                                    <h4>{transaction.description}</h4>
                                </Grid>
                                <Grid item xs={4}>
                                    <h4>{transaction.type}</h4>
                                </Grid>
                                <Grid item xs={4}>
                                    <h4>R${transaction.valor}</h4>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                ))
            )}
            </Stack>
        </Container>
    );
}