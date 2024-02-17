
function CopyOutput(Trigger) {
  let Output = document.querySelector(`#Output`);
  Trigger.innerHTML = `Copied!`;
  setTimeout(function() {
    Trigger.innerHTML = `Copy`;
  }, 1000);
  navigator.clipboard.writeText(Output.textContent);
};

function Insert(ClassName, Value) {
  let Outputs = document.querySelectorAll(`.${ClassName}`);
  for (let Index = 0; Index < Outputs.length; Index++) Outputs[Index].innerHTML = Value;
  console.log(`Input Recorded`, ClassName, Value);
};

function Set(Identifier, Value) {
  console.log(`Setting`, Identifier, Value);
  Insert(Identifier, Value);
  if (Identifier == `EventUniform`) {
    let UniformCommand;
    if (Value == `Normal SWAT Outfit`) UniformCommand = `SWAT`;
    if (Value == `SWAT Arctic Ops Outfit`) UniformCommand = `SWATA`;
    if (Value == `SWAT Strikers Outfit`) UniformCommand = `SWATS`;
    Insert(`EventUniformCommand`, UniformCommand);
  };
  if (Identifier == `EventTime`) {
    Insert(`InterprettedEventTime`, `${new Date(parseInt(`${Value}000`))}`);
  }
};

Set(`EventTime`, `1696532400`)
