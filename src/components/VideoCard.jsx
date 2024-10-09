import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card
            sx={{
                width: {xs: '100%',sm: '358px', md: '302px',  },
                boxShadow: 'none',
                borderRadius: 2,
                overflow: 'hidden',
                margin: '10px',
                position: 'relative',
                transition: 'transform 0.2s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    zIndex: 1,
                },
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: "none" }}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: {xs: '100%', sm:'358px', md: '302px' }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: "none" }}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link
                    to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
                    style={{ textDecoration: "none", position: 'relative', display: 'inline-block' }} // Required for the effect
                >
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="gray"
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background color on hover
                                borderRadius: '4px', // Rounded corners
                                padding: '2px 4px', // Padding around the text
                                color: 'white', // Change text color to white on hover
                                transition: 'all 0.2s ease', // Smooth transition
                            },
                            transition: 'color 0.2s ease', // Smooth color transition
                        }}
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
