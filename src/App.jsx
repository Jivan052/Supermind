import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import ControlPanel from './components/ControlPanel';
import AnalyticsChart from './components/AnalyticsChart';
import ChatWindow from './components/ChatWindow';
import { theme } from './styles/theme';

const dataSets = {
  carousel: [
    { month: 'Jan', posts: 200, engagement: 1200 },
    { month: 'Feb', posts: 250, engagement: 1500 },
    { month: 'Mar', posts: 150, engagement: 1000 },
    { month: 'Apr', posts: 300, engagement: 1800 }
  ],
  reels: [
    { month: 'Jan', posts: 400, engagement: 3000 },
    { month: 'Feb', posts: 380, engagement: 2800 },
    { month: 'Mar', posts: 420, engagement: 3200 },
    { month: 'Apr', posts: 360, engagement: 2900 }
  ],
  static: [
    { month: 'Jan', posts: 550, engagement: 4200 },
    { month: 'Feb', posts: 600, engagement: 4500 },
    { month: 'Mar', posts: 480, engagement: 3900 },
    { month: 'Apr', posts: 580, engagement: 4100 }
  ]
};

function App() {
  const [postType, setPostType] = useState('');
  const [chartData, setChartData] = useState(dataSets.carousel);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setChartData(dataSets[postType] || dataSets.carousel);
  }, [postType]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'user' }]);
      setInput('');
    }
  };

  return (
    <Box 
      sx={{  
        marginBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '200px',
        p: { xs: 2, md: 3 }
      }}
    >
      
        {/* <img 
          src="/Codebyte.png" 
          alt="Description" 
          style={{ alignSelf: 'flex-start', marginBottom: '20px', width: '120px', height: '100px', marginLeft: '600px' }}
        /> */}

        {/* Github  Link */}
      <Button 
        variant="contained" 
        color="red" 
        href="https://github.com"
        sx={{ alignSelf: 'flex-start', mb: 2 }}
      >
        GitHub
      </Button>

      {/* Youtube Link */}
      <Button 
        variant="contained" 
        color="red" 
        href="https://youtube.com"
        sx={{ alignSelf: 'flex-start', mb: 2 }}
      >
        Youtube
      </Button>

      <Container 
        maxWidth="lg" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography 
          variant="h2"
          sx={{ 
            textAlign: 'center',
            mb: -2,
            ml: 3,
            background: theme.colors.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '3rem', // Increased font size
            fontFamily:'monospace'
          }}
        >
          Analytics Dashboard
          
        </Typography>

        <Grid container spacing={3}>
          {/* Controls Section */}
          <Grid item xs={12}>
            <ControlPanel postType={postType} setPostType={setPostType} />
          </Grid>

          {/* Analytics Section */}
          <Grid item xs={12} md={8}>
            <AnalyticsChart data={chartData} />
          </Grid>

          {/* Chat Section */}
          <Grid item xs={12} md={4}>
            <ChatWindow
              messages={messages}
              input={input}
              setInput={setInput}
              handleSend={handleSend}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;