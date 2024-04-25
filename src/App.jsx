import {initJuno} from '@junobuild/core';
import {useEffect} from 'react';
import {Auth} from './components/Auth';
import {Background} from './components/Background';
import {Footer} from './components/Footer';
import {Modal} from './components/Modal';
import {Table} from './components/Table';

function App() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: import.meta.env.VITE_SATELLITE_ID,
        container: import.meta.env.VITE_CONTAINER,
        workers: {
          auth: true
        }
      }))();
  }, []);

  return (
    <>
      <div className="relative isolate min-h-[100dvh]">
        <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
          <Auth>
            <Table />

            <Modal />
          </Auth>
        </main>

        <Footer />

        <Background />
      </div>
    </>
  );
}

export default App;
