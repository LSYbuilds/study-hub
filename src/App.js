import { Route, Routes } from "react-router-dom";

import { getMemo, getProfile } from "./api/memoFetch";
import { getPlan, getUerId } from "./api/planFetch"


import "./scss/layout.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendarPage from "./pages/CalendarPage";
// import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Mypages from "./pages/Mypages";
import Note from "./pages/Note";
import NoteWrite from "./pages/NoteWrite";
import StudyWrite from "./pages/StudyWrite";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import StudyPlan from "./pages/StudyPlan";

function App() {
  const [memoData, setMemoData] = useState([]);
  const [memoTitle, setMemoTitle] = useState("");
  const [memoText, setMemoText] = useState("");
  const [memoLog, setMemoLog] = useState(null);
  const [memoIndex, setMemoIndex] = useState("");
  const [profile, setProfile] = useState([]);


  
  const getProfile = async () => {
    try {
      const profileJson = await getMemo();
      setProfile(profileJson);
    } catch (error) {
      console.log(error);
    }
  }; 
  
  const getMomoFetch = async () => {
    try {
      const memoJson = await getMemo();
      setMemoData(memoJson);
    } catch (error) {
      console.log(error);
    }
    // const memoJson = await getMemo();
    // if (!memoJson) {
      //   setMemoData("memmmono", memoJson);
      // }
    };
    
    
    // 스터디 플랜
    const [planData, setPlanData] = useState([]);
    const [planTitle, setPlanTitle] = useState()
    const [planText, setplanText] = useState()
    const [planLog, setplanLog] = useState()
    const [planIndex, setplanIndex] = useState()
    


  const getUerId = async () => {
    try {
      const studyPlanJson = await getPlan();
      setProfile(studyPlanJson)
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMomoFetch();
    getProfile();
    getUerId();


  }, []);


  return (
    <div className="wrap">
      <Header />
      {/* <Intro /> */}
      <div className="container">
        <Routes>
          <Route path="/main" element={<Main memoData={memoData} />}></Route>
          <Route
            path="/note"
            element={
              <Note
                setMemoLog={setMemoLog}
                memoLog={memoLog}
                memoData={memoData}
                setMemoData={setMemoData}
                memoIndex={memoIndex}
                setMemoIndex={setMemoIndex}
                profile={profile}
              />
            }
          ></Route>
          <Route
            path="/notewrite"
            element={
              <NoteWrite
                setMemoLog={setMemoLog}
                memoLog={memoLog}
                memoData={memoData}
                setMemoData={setMemoData}
                memoText={memoText}
                setMemoText={setMemoText}
                memoTitle={memoTitle}
                setMemoTitle={setMemoTitle}
                memoIndex={memoIndex}
                setMemoIndex={setMemoIndex}
                profile={profile}
              />
            }
          ></Route>
          <Route
            path="/mypages"
            element={<Mypages profile={profile} setProfile={setProfile} />}
          ></Route>
          <Route path="/caledar" element={<CalendarPage />}></Route>
          <Route path="/studyplan" 
          element={
          <StudyPlan  
          planData={planData}
          setPlanData={setPlanData}
          planTitle={planTitle}
          setPlanTitle={setPlanTitle}
          planLog={planLog}
          setplanLog={setplanLog}
          planIndex={planIndex}
          setplanIndex={setplanIndex}
          profile={profile}
          />
          }
          ></Route>
          <Route path="/studyWrite" 
          element={
          <StudyWrite 
          planData={planData}
          setPlanData={setPlanData}
          planTitle={planTitle}
          setPlanTitle={setPlanTitle}
          planText={planText}
          setplanText={setplanText}
          planLog={planLog}
          setplanLog={setplanLog}
          planIndex={planIndex}
          setplanIndex={setplanIndex}
          profile={profile}
          />
          }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
