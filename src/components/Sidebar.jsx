import GeneralInfo from "./Sidebar Component/General";
import Education from "./Sidebar Component/Education";
import Experience from "./Sidebar Component/Experience";

export function Sidebar({
  setUserData,
  userData,
  deleteEdu,
  deleteExe,
  deleteSkill,
}) {
  return (
    <aside className="fixed bg-blue-300 overflow-y-scroll px-3 mt-12 h-[650px] max-h-[100vh] py-10 w-[400px]">
      <GeneralInfo
        setUser={setUserData}
        userData={userData}
        deleteSkill={deleteSkill}
      />
      <Education
        setUser={setUserData}
        userData={userData}
        deleteEdu={deleteEdu}
      />
      <Experience
        setUser={setUserData}
        userData={userData}
        deleteExe={deleteExe}
      />
      {/* <button
        onClick={handleSubmit}
        className="w-full bg-white py-2 text-2xl rounded-full tracking-widest font-bold"
      >
        Submit
      </button> */}
    </aside>
  );
}
