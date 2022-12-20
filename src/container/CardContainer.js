import Card from "../component/Card";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const date = new Date().toLocaleDateString();
const lastDay = date.replaceAll(" ", "").replaceAll(".", "") - 1;
const url =
  "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=139c5c77da62dd7e6f039c1ce385dbe1&targetDt=" +
  `${String(lastDay)}`;

export default function CardContaioner() {
  const [newData, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data.boxOfficeResult.dailyBoxOfficeList;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, [setData]);

  useEffect(() => {
    getData();
  }, [getData]);
  console.log(newData);
  return (
    <>
      <div className="header"></div>
      <div className="title-wrap">
        <div className="title">오늘의 영화 순위</div>
      </div>
      <section className="slider-section">
        <div className="wheel">
          <Card newData={newData}></Card>;
          {/* 
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          />
          <Card
            picture={
              "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
            }
          /> */}
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
