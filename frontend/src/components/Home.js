import { Card, CardContent, Typography } from "@mui/material";
import data from '../assets/data.json';

function Home() {
    return (
        <div>
          {data.map((item) => (
            <Card variant="outlined" sx={{mt: 5, ml: 2, mr: 2}}>
              <CardContent>
                <Typography variant="h4" component="div">
                  { item.type }  
                </Typography>
                <Typography variant="h6">
                  { item.value }
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
    );
}

export default Home;