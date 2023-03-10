import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import Map from './components/Map';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>
      <Wrapper>
        <Map />
        <ActionItems>
          {/* Header */}
          <Header>
            <UberLogo
              src='https://user-images.githubusercontent.com/83178592/215264929-14835664-08dd-4761-9b4e-43dac470401a.png'
              alt='uber-logo'
            />
            <Profile>
              <Name>Lee Seong Eun</Name>
              <UserImage
                src='https://res.cloudinary.com/dewa3t2gi/image/upload/v1669257563/foghcltwjp7uorivyehx.jpg'
                alt='uber-profile-pic'
              />
            </Profile>
          </Header>
          {/* ActionButtons */}
          {/* InputButton */}
        </ActionItems>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen 
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-16 py-2
`;

const Profile = tw.div`
  flex flex-row items-center
`;

const Name = tw.div`
  mx-4 font-semibold text-lg
`;

const UserImage = tw.img`
  w-16 h-16 object-cover rounded-full border border-gray-400 p-px
`;
