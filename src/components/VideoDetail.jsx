import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" bgcolor="#000" p={2}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        {/* Video Player Section */}
        <Box
          flex={3}
          sx={{
            width: {
              xs: "100%", // Full width on extra-small screens
              sm: "100%", // Full width on small screens
              md: "70%", // 70% width on medium and larger screens
            },
            position: "sticky",
            top: "86px",
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            width="100%"
            height={{
              xs: "30%", // Full height on extra-small screens
              sm: "70%", // Full height on small screens
              md: "100%", // 100% height on medium and larger screens
            }}
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" mt={2} sx={{ fontSize: { xs: "18px", md: "24px" } }}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff", flexWrap: "wrap" }} py={1}>
            <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
              <Typography variant="subtitle1" color="#fff" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                {channelTitle}
                <CheckCircle sx={{ fontSize: { xs: "10px", md: "12px" }, color: "gray", ml: "5px" }} />
              </Typography>
            </Link>

            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ fontSize: { xs: "12px", md: "14px" }, opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: "12px", md: "14px" }, opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        
        {/* Related Videos Section */}
        <Box 
          flex={1}
          px={2} 
          py={{ md: 1, xs: 5 }} 
          justifyContent="center" 
          alignItems="center"
          sx={{
            overflowY: "auto",
            maxHeight: "80vh",
            width: {
              xs: "100%", // Full width on extra-small screens
              sm: "100%",
              md: "30%", // 30% width on medium and larger screens
            },
          }}
        >
          <Videos className="related-video-item" videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
