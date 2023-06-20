import { Card, CardContent, Typography } from "@mui/material";
import data from '../../assets/data.json';
import './Home.css';

function Home() {
    return (
        <main className="homeContainer">
          {data.map((item) => (
            <Card variant="outlined" key={item.id}>
              <CardContent>
                <Typography variant="h4" component="h1" aria-label="Type">
                  { item.type }  
                </Typography>
                <Typography variant="h6" component="p">
                  { item.value }
                </Typography>
              </CardContent>
            </Card>
          ))}
        </main>
    );
}

export default Home;