import { Box, Grid, Typography, TextField, Button, FormControlLabel, Checkbox } from "@mui/material"

const Login = () => {
    return (
        <Box width={1} sx={{ backgroundColor: '#232333', height: '100vh', color: 'white' }}>
            <Grid container>
                <Grid item xs={4}>
                    <Box 
                        sx={{ 
                            backgroundColor: '#2B2C40', 
                            height: '100vh',
                            display: 'flex',
                            flexDirection:'column',
                            justifyContent: 'center',
                            p: 2,
                            gap: 4
                        }} 
                        component={'form'} 
                        autoComplete="off">
                        <Typography component={'h1'} fontSize={28}>ورود به پنل مدیریت</Typography>
                        <Typography component={'p'} fontSize={18}>
                            لطفاً وارد حساب خود شوید و ماجراجویی را شروع کنید
                        </Typography>
                        <TextField
                            id="email"
                            label="ایمیل"
                            fullWidth                          
                        />
                        <TextField
                            id="password"
                            type="password"
                            label="رمز عبور"
                            fullWidth                     
                        />
                        
                        <FormControlLabel control={<Checkbox defaultChecked />} label="مرا به خاطر بسپار" />

                        <Button variant="contained" color="warning" fullWidth>
                            ورود
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/images/Login.png" alt="login" className="max-w-xl" loading="lazy"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login