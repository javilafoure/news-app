import SearchBar from "./componets/SearchBar";
import Headlines from "./componets/Headlines";
import Recent from "./componets/Recent";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center py-5 gap-3">
      <SearchBar />
      <Headlines />
      <Recent />
    </div>
  );
}
