import GeneralInfo from "./Sidebar Component/General";
import Education from "./Sidebar Component/Education";
import Experience from "./Sidebar Component/Experience";

export function Sidebar({ setUserData, userData }) {
  function handleSubmit() {
    alert("Submit");
  }
  return (
    <aside className="bg-blue-300 border-r-2 overflow-y-scroll px-3 mt-12 h-[650px] py-10">
      <GeneralInfo setUser={setUserData} />
      <Education setUser={setUserData} userData={userData} />
      <Experience setUser={setUserData} userData={userData} />
      <button
        onClick={handleSubmit}
        className="w-full bg-white py-2 text-3xl rounded-full"
      >
        Submit
      </button>
    </aside>
  );
}
