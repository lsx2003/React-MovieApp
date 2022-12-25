import Card from "../component/Card";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../component/Loading";

function CardContaioner() {
  const [newData, setData] = useState([[1]]);
  const [poster, setPoster] = useState({});
  const [title, setTitle] = useState([]); // 1~10위 제목이 들어감
  const [isLoading, setLoading] = useState(true);
  const [isSelect, setSelect] = useState(false);

  const getPoster = useCallback(async (el, idx) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/naver/?query=${el}}`
      );
      const data = await response.data;
      await Object.assign(poster, { [(idx = idx)]: data[0].image });
      await setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/kobis");
      const data = await response.data;
      console.log("getData");
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getTitle = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/kobis/title");
      const data = await response.data;
      console.log("getTitle");
      getData();
      setTitle(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTitle();
  }, []);
  title.map((el) => {
    getPoster(el, title.indexOf(el));
  });
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const clickHandler = (event) => {
    if (event.target.className === "wheel__card") {
      setSelect(true);
      console.log(isSelect);
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="header"></div>
      <div className="title-wrap">
        <div className="title">오늘의 영화 순위</div>
      </div>
      <section className="slider-section">
        <div className="wheel">
          {isLoading === false ? (
            <Card
              isSelect={isSelect}
              setSelect={setSelect}
              poster={poster}
              newData={newData}
              clickHandler={clickHandler}
            ></Card>
          ) : null}
        </div>
      </section>
      <div className="title-wrap">
        <div className="scroll-down">
          Scroll down
          <div className="arrow"></div>
        </div>
      </div>
    </>
  );
}

export default React.memo(CardContaioner);
