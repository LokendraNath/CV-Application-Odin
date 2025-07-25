export function Content({ userData }) {
  return (
    <main className="bg-white mt-20 px-10 min-h-screen">
      <div className="border-2 border-black flex flex-col items-center py-3 px-10 h-full">
        <h1 className="text-3xl">{userData.name}</h1>
        <div className="flex gap-5">
          <div>
            {userData.email && <i className="fa-solid fa-envelope"></i>}
            {userData.email}
          </div>
          <div>
            {userData.phone && <i className="fa-solid fa-phone"></i>}
            {userData.phone}
          </div>
        </div>
        {userData.objective && (
          <div className="border-b-[1px] h-1 w-[50%] mt-2"></div>
        )}
        {userData.objective && (
          <div className="mt-10 w-full">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Objective:
            </h1>
            <p className="mt-3 pl-10 text-lg">{userData.objective}</p>
          </div>
        )}
        {userData.education && (
          <div className="mt-10 w-full">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Education Qualification :
            </h1>
            <ul className="mt-3 pl-10 text-lg">
              {userData.education.map((e) => (
                <li>
                  - {e.date} {e.title} {e.school}
                </li>
              ))}
            </ul>
          </div>
        )}
        {userData.workExperience && (
          <div className="mt-10 w-full">
            <h1 className="text-start text-2xl bg-gray-300 inline-block px-3 py-1 rounded-xl">
              Working Experience :
            </h1>
            <ul className="mt-3 pl-10 text-lg">
              {userData.workExperience.map((e) => (
                <li>
                  - {e.start} to {e.end} as a {e.compPosition} at {e.company}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
