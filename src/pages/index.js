import Slider from "../components/Slider/Slider";
import SectionBigProject from "../components/pages/Home/SectionBigProject";
import UpcommingProject from "../components/pages/Home/UpcomingProject";
import DetailProject from "../components/pages/Home/DetailProject";

export default function Home() {
  return (
    <div>
      <Slider />
      <SectionBigProject />
      <UpcommingProject />
      <DetailProject />
    </div>
  );
}
