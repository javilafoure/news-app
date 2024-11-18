import SearchBar from "./componets/SearchBar";
import Headlines from "./componets/Headlines";
import Recent from "./componets/Recent";
import BtnDark from "./componets/BtnDark";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center py-5 gap-3">
      <div className="absolute top-0 right-0 p-5">
        <BtnDark />
      </div>
      <SearchBar />
      <Headlines />
      <Recent />
    </div>
  );
}
