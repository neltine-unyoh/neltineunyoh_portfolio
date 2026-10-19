import "./CodeCard.css";

// The hero's one animated moment: the "now" lines type themselves out.
const lines = [
  { parts: [["c", "// then"]] },
  { parts: [["f", "write"], ["p", "("], ["v", "code"], ["p", ");"]] },
  { parts: [] },
  { parts: [["c", "// now"]] },
  { parts: [["f", "ask"], ["p", "("], ["s", '"why does this matter?"'], ["p", ");"]], type: true },
  { parts: [["f", "ask"], ["p", "("], ["s", '"who is it for?"'], ["p", ");"]], type: true },
  { parts: [["f", "build"], ["p", "("], ["v", "theRightThing"], ["p", ");"]], type: true },
];

function CodeCard() {
  let typedIndex = 0;

  return (
    <figure className="code-card" aria-label="Then I wrote code. Now I ask why it matters and who it is for, then build the right thing.">
      <div className="code-card-bar" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <p>career.js</p>
      </div>
      <pre className="code-card-body" aria-hidden="true">
        {lines.map((line, index) => {
          const text = line.parts.map((part) => part[1]).join("");
          const style = line.type
            ? { "--chars": text.length, "--delay": `${0.6 + typedIndex++ * 1.1}s` }
            : undefined;

          return (
            <span className="code-line" key={index}>
              <span className="code-num">{index + 1}</span>
              <span className={line.type ? "code-text is-typed" : "code-text"} style={style}>
                {line.parts.map(([kind, value], partIndex) => (
                  <span key={partIndex} className={`tok-${kind}`}>
                    {value}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </pre>
    </figure>
  );
}

export default CodeCard;
