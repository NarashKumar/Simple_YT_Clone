import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  // console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(255,0,21,1) 8%, rgba(9,9,121,1) 51%, rgba(255,83,0,1) 86%',
          zIndex: 10,
          height: '300px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex', 
        }}
        />
         {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-110px" />}
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail