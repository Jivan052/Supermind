import { Box, TextField, Button, Card, Typography } from '@mui/material';

export default function ChatWindow({ messages, input, setInput, handleSend }) {
  return (
    <Card 
      sx={{ 
        p: 2, 
        borderRadius: 2, 
        boxShadow: 3, 
        height: '420px',
        width: '700px', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #f0f9ff 30%, #e0ffe7 100%)',
        fontFamily: 'monospace',
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center', 
          mb: 2,
          background: 'linear-gradient(45deg, #1A73E8 30%, #34A853 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        CodeByte Assistant
      </Typography>

      <Box sx={{ flex: 1, overflow: 'auto', mb: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {messages.map((msg, index) => (
          <Box 
            key={index}
            sx={{
              p: 1,
              borderRadius: 2,
              fontFamily: 'monospace',
              color: 'white',
              maxWidth: '80%',
              alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
              background: msg.type === 'user' 
                ? 'linear-gradient(45deg, #1A73E8 30%, #34A853 90%)'
                : 'linear-gradient(45deg, #34A853 30%, #1A73E8 90%)',
            }}
          >
            {msg.text}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        <Button 
          variant="contained" 
          onClick={handleSend} 
          sx={{
            borderRadius: 2,
            background: 'linear-gradient(45deg, #1A73E8 30%, #34A853 90%)',
            color: 'white'
          }}
        >
          Analyze
        </Button>
      </Box>
    </Card>
  );
}