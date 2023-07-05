import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Space, Row } from "antd";
import moment from "moment/moment";
import StudyTimer from "../components/StudyTimer";
import Item from "antd/es/list/Item";

const StudyPlan = ({
  planData,
  setPlanData,
  planTitle,
  setPlanTitle,
  planLog,
  setplanLog,
  planIndex,
  setplanIndex,
  profile,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/studywrite");
    setplanLog("");
  };

  // 오늘 날짜
  const today = moment().format("MM월 DD일");

  return (
    <div className="study_plan_warp">
      <h1 className="title">STUDY-PLAN</h1>
      <div className="study_inner">
        <div className="timer_date">
          <div className="today">
            {/* 날자 데이터가 들어갑니다. */}
            <Input
              value={today}
              style={{
                textAlign: "center",
                borderStyle: "unset",
                borderRadius: "unset",
              }}
            />
          </div>
          {/* 타이머출력 위치 */}
          <StudyTimer />
        </div>
        <div className="button_form">
          <button>전체삭제</button>
          <button>작성하기</button>
        </div>
        {planData ? (
          <ul className="study_list">
            {planData.map((item, index) => (
              <li key={index}>
                <span className="study_list_title">
                  <p>{item.title}</p>
                </span>
                <span className="study_list_text">
                  <p>{item.ctnt}</p>
                  <div className="list_func">
                    <button>수정</button>

                    <button></button>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <Row
              justify="center"
              style={{ margin: "30px 0", textAlign: "center" }}
            >
              <span className="empty_notice">
                작성하신 스터디 플랜이 없습니다.
                <br />
                플랜을 작성해보세요.
              </span>
            </Row>
            <Row justify="center" style={{ margin: "30px 0" }}>
              <Button onClick={handleClick} style={{ borderRadius: "25px" }}>
                작성하기
              </Button>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlan;
