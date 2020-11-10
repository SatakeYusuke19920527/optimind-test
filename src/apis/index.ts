import axios from 'axios'

const hackerNewsApi = axios.create({
  baseURL: `https://hacker-news.firebaseio.com/v0`
})

// hacker news の全IDを取得
export const hnGetAllId = async () => {
  const res = await hackerNewsApi.get('/topstories.json')
  return res.data
}

// hacker news のニュースをIDの配列から取得
export const hnGetAllNews = async (id: number) => {
  const news = await hackerNewsApi.get(`/item/${id}.json?print=pretty`)
  console.log(news.data)
  return news.data
}