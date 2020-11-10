import React, { useEffect, useState } from 'react';
import { hnGetAllId, hnGetAllNews } from '../apis/index';
import { useDispatch } from 'react-redux';
import { fetchGetData } from '../features/hackerNews/hackerNewsSlice';
// components
import Layout from '../components/Layout';

const Home: React.FC<{}> = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchHackerNewsData();
  }, []);

  const fetchHackerNewsData = async () => {
    const res = await hnGetAllId();
    const ids = [25013003, 25010280, 25008748];
    ids.map((id) => {
      hnGetAllNews(id);
    });
    dispatch(fetchGetData());
    setData(res);
  };

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <td>hey</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hey</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Home;
