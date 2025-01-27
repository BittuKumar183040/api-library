export default function Home() {

  const APIs = [
    {
      id: "1",
      title: "Advice Generator",
      desc: "This is a digital tool or application that provides random pieces of advice to users when they request it, essentially acting like a virtual fortune cookie.",
    }
  ]


  return (
    <div className="">
      <div className=" container mx-auto flex flex-col items-center justify-center py-5">
        <p className=" font-bold">API LIBRARY</p>
        <div className=" h-px mt-1 w-10/12 bg-slate-500 "></div>
      </div>
      <main className=" flex gap-2 flex-wrap w-full justify-center">
        {APIs.map((item) =>
          <div key={item.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="/advice">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
            <a href="/advice" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Visit
            </a>
          </div>
        )}

      </main>

    </div>
  );
}
