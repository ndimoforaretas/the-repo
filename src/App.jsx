import AretasComponent from "./AretasComponent";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold text-violet-600">
          Aretas & Mofak Collaboration
        </h1>
        <div>
          <AretasComponent />
        </div>
      </div>
    </>
  );
}

export default App;
