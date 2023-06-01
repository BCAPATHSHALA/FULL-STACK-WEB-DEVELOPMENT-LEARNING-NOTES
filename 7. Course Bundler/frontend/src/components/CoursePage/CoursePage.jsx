import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'nlknadvhiohv1',
      title: 'Sample Title1',
      description: 'This is a sample description of this lecture.',
      video: {
        url: introVideo,
      },
    },
    {
      _id: 'nlknadvhiohv2',
      title: 'Sample Title2',
      description: 'This is a sample description of this lecture.',
      video: {
        url: 'introVideo',
      },
    },
    {
      _id: 'nlknadvhiohv3',
      title: 'Sample Title3',
      description: 'This is a sample description of this lecture.',
      video: {
        url: introVideo,
      },
    },
    {
      _id: 'nlknadvhiohv4',
      title: 'Sample Title4',
      description: 'This is a sample description of this lecture.',
      video: {
        url: introVideo,
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          // autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={lectures[lectureNumber].video.url}
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children="Description" />
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
