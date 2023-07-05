import React, { useEffect, useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postWrite } from "../api/planFetch";

const { TextArea } = Input;
const StudyWrite = () => {
  // 제목
  const [title, setTitle] = useState("");

  // 과목
  const [selectedSubject, setSelectedSubject] = useState("");

  // 내용
  const [content, setContent] = useState("");

  
  useEffect(() => {

  },[]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleSubmit = () => {



  // axios 로 planWrite정보를 전달함.
  //확인하기 
   postWrite({
    ctnt: content,
    title: title,
    isticker: 0,
    icategory: 0,
    iuser: 2,
  });
  };

  const subjects = ["국어", "영어", "수학", "과학", "사회"];

  return (
    <div className="study_plan_warp">
      <h1 className="title">STUDY-PLAN</h1>
      <div className="study_inner">
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Row justify="center" style={{ margin: "30px 0" }}>
            <Input
              size="large"
              placeholder="큰 제목 입력"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </Row>
          <Row justify="center" style={{ margin: "30px 0" }}>
            <Space wrap>
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  onClick={() => handleClick(subject)}
                  className={selectedSubject === subject ? "selected" : ""}
                  style={{ borderRadius: "25px" }}
                >
                  {subject}
                </Button>
              ))}
            </Space>
          </Row>
          <Row justify="center" style={{ margin: "30px 0" }}>
            <TextArea
              autoSize={{
                minRows: 5,
                maxRows: 7,
              }}
              value={content}
              onChange={handleContentChange}
              placeholder="내용 작성"
            ></TextArea>
          </Row>
          <Row justify="end" style={{ margin: "30px 0" }}>
            <Button onClick={handleSubmit} style={{ borderRadius: "25px" }}>
              게시물 생성
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default StudyWrite;