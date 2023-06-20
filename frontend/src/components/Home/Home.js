import { Card, CardContent, Typography } from "@mui/material";
import data from '../../assets/data.json';
import './Home.css';

function Home() {
    return (
        <div className="homeContainer">
          {data.map((item) => (
            <Card variant="outlined">
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