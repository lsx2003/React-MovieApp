const axios = require("axios");
const key = require("./naverAPI");
const { post } = require("./router/router");
const kobisData = [];
const movieTitle = [];
const date = new Date().toISOString();
const lastDay = date.slice(0, 10).replaceAll("-", "") - 1;
const rankUrl = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=139c5c77da62dd7e6f039c1ce385dbe1&targetDt=${lastDay}`;

const controller = {
  getNaverData: async (req, res) => {
    let query = req.query.query;
    await axios
      .get("https://openapi.naver.com/v1/search/movie.json", {
        params: {
          query,
          display: 20,
        },
        headers: {
          "X-Naver-Client-Id": key.id,
          "X-Naver-Client-Secret": key.secret,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(async function (response) {
        const items = await response.data.items;
        // console.log(items);
        await res.json(items);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // kobis API -> 영화 순위(타이틀)
  getKobisTitle: async (req, res) => {
    try {
      const response = await axios.get(rankUrl);
      // console.log(response);
      const data = await response.data.boxOfficeResult.dailyBoxOfficeList;
      const title = await data.map((el) => (el = el.movieNm));
      await movieTitle.push(title);

      // console.log(movieTitle);
      poster = title;
      console.log(poster);
      res.json(poster);
    } catch (error) {
      console.log(error);
    }
  },
  getKobisData: async (req, res) => {
    try {
      const response = await axios.get(rankUrl);
      const data = await response.data.boxOfficeResult.dailyBoxOfficeList;
      // console.log(data);
      console.log("--------------------", lastDay);
      await res.json(data);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = {
  controller,
};
