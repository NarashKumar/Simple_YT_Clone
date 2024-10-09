import { Stack, Box } from "@mui/material"
import VideoCard from "./VideoCard"
// import ChannelCard from "./ChannelCard"

const Videos = ({videos, direction}) => {
  if (!videos) return 'Loading...';
  return (
    <Stack direction={direction ||"row" }flexWrap="wrap" marginLeft={{ xs: 0, md: 5 }}   >
      {videos.map((item, idx) => { 

        // const isChannelCard = item?.snippet?.channelTitle?.toLowerCase().includes(selectedCategory.toLowerCase());

        // console.log(item);
        return (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard key={item?.id?.videoId} video={item} /> }
          {/* {item?.snippet?.channelId && <ChannelCard channelDetail={item} />} */}
        </Box>
      )
  })}
    </Stack>
  )
 
}

export default Videos