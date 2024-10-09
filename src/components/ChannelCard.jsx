import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail}) => {
  if(!channelDetail) return null;
  const  {id: {channelId}, snippet} = channelDetail;
   console.log(channelDetail); // Log to verify data
  

  return (
    <Box 
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop: '-92px',
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia 
            image={snippet?.thumbnails?.high?.url || snippet?.thumbnails?.default?.url || snippet?.thumbnails?.medium?.url || demoProfilePicture}
             onError={(e) => { e.target.src = demoProfilePicture; }}
            alt={snippet?.title || 'Channel Thumbnail'}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
              alignSelf: 'center',
            }}
          />
          <Typography variant="h6">
            {snippet?.title || 'Channel Title'}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'gray' }}>
            {channelDetail?.statistics?.subscriberCount} Subscribers
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
