import { TextField, Button, Box, MenuItem } from '@mui/material';

export default function ControlPanel({ postType, setPostType }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <TextField
        select
        label="Post Type"
        value={postType}
        onChange={(e) => setPostType(e.target.value)}
        sx={{ minWidth: 200 }}
      >
        <MenuItem value="carousel">Carousel</MenuItem>
        <MenuItem value="reels">Reels</MenuItem>
        <MenuItem value="static">Static</MenuItem>
        <MenuItem value="video">Image</MenuItem>
      </TextField>

      {/* <Button 
        variant="contained"
        sx={{
          background: 'linear-gradient(45deg,rgb(74, 145, 236) 30%, #34A853 90%)',
          color: 'white'
        }}
      >
        Analyze
      </Button> */}
      
    </Box>
  );
}