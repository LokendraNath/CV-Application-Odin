export function Content({ userData }) {
  return (
    <main className="bg-white mt-20 px-10 min-h-screen absolute right-0 w-[900px] z-0 py-5">
      
      <div className="border-2 border-black flex flex-col items-center px-10 h-full py-4">
        <h1 className="text-3xl font-bold tracking-widest">
          {userData.generalData.name}
        </h1>
        <div className="flex gap-5 mt-3">
          <div className="flex items-center">
            {userData.generalData.email && (
              <i className="fa-solid fa-envelope mr-2"></i>
            )}
            <p className="tracking-wider">{userData.generalData.email}</p>
          </div>
          <div className="flex items-center">
            {userData.generalData.phone && (
              <i className="fa-solid fa-phone mr-2"></i>
            )}
            <p className="tracking-wider">{userData.generalData.phone}</p>
          </div>
        </div>
        {userData.generalData.objective && (
          <div className="border-b-[1px] h-1 w-[50%] mt-2"></div>
        )}
        {userData.generalData.objective && (
          <div className="mt-10 w-full">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Objective:
            </h1>
            <p className="mt-4 pl-10 text-sm font-lugrasimo">
              " {userData.generalData.objective} "
            </p>
          </div>
        )}
        {userData.generalData.skill.length > 0 && (
          <div className="mt-10 w-full">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Skills :
            </h1>
            <div className="mt-2 flex w-full pl-10">
              - &nbsp; <p>{userData.generalData.skill.join(", ")}</p>
            </div>
          </div>
        )}
        {userData.education.length > 0 && (
          <div className="mt-10 w-full">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Education Qualification :
            </h1>
            <ul className="mt-3 pl-10 text-lg">
              {userData.education.map((e, i) => (
                <li key={i}>
                  - {e.date} {e.title} {e.school}
                </li>
              ))}
            </ul>
          </div>
        )}
        {userData.workExperience.length > 0 && (
          <div className="mt-10 w-full mb-5">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Working Experience :
            </h1>
            <ul className="mt-3 pl-10 text-lg">
              {userData.workExperience.map((e, i) => (
                <li key={i}>
                  - {e.start} to {e.end} as a {e.compPosition} in {e.company}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
