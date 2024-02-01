interface TypescriptTestProps {
  value1: number;
  value2: number;
}

export function Typescript() {
  function typescriptTest(value1, value2) {
    return value1 * value2;
  }

  // function typescriptTest({value1, value2}: TypescriptTestProps) {
  //   return value1 + value2;
  // }

  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <h1>Typescript</h1>

      <button className="border-2 rounded-lg p-2 w-28 bg-gray-500">
        {typescriptTest("dadas", "ooooooo")}
      </button>
    </div>
  );
}
