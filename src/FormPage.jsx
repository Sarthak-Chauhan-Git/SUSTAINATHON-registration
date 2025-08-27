import Header from "./components/Header";
import Progress from "./components/Progress";
import TeamInfo from "./components/TeamInfo";
import TeamLeadInfo from "./components/TeamLeadInfo";
import MemberInfo from "./components/MemberInfo";
import AdditionalMember from "./components/AdditionalMember";
import ProjectDetail from "./components/ProjectDetail";
import Navbtn from "./components/Navbtn";
import SuccessModel from "./components/SuccessModel";
import "./App";

function FormPage() {
  return (
    <>
      <Header></Header>
      <Progress></Progress>
      <div class="form-container">
        <TeamInfo></TeamInfo>
        <TeamLeadInfo></TeamLeadInfo>
        <MemberInfo></MemberInfo>
        <AdditionalMember></AdditionalMember>
        <ProjectDetail></ProjectDetail>
        <Navbtn></Navbtn>
      </div>
      <SuccessModel></SuccessModel>
    </>
  );
}

export default FormPage;
