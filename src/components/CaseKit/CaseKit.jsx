import { useEffect, useRef, useState } from "react";

// Shared pieces for the case study pages: logo, typewriter, counters, scroll reveal.

// A product logo with a lettered fallback if the file is missing
export function CaseLogo({ src, name, hideFallback = false }) {
  const [failed, setFailed] = useState(false);
  if ((!src || failed) && hideFallback) return null;
  if (!src || failed) {
    return (
      <span className="kora-logo is-fallback" aria-hidden="true">
        {name[0]}
      </span>
    );
  }
  return <img className="kora-logo" src={src} alt={`${name} logo`} onError={() => setFailed(true)} />;
}

// Types the tagline out once, letter by letter
export function Typewriter({ text, delay = 400, speed = 38 }) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) return undefined;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        setCount((value) => {
          if (value >= text.length) {
            clearInterval(timer);
            return value;
          }
          return value + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [text, delay, speed, reduce]);

  const done = count >= text.length;
  return (
    <span className="typewriter" aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className={`typewriter-caret ${done ? "is-done" : ""}`} aria-hidden="true"></span>
    </span>
  );
}

// Counts a stat like "20+" up from zero when it scrolls into view
export function CountUp({ value }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const ref = useRef(null);
  const [shown, setShown] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!match) return undefined;
    const target = Number(match[1]);
    const suffix = match[2];
    const node = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(value);
      return undefined;
    }
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / 1200, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setShown(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{shown}</span>;
}

// Elements with the "kr" class rise into place as they scroll into view.
// Anything already on screen when the page opens is shown straight away.
export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return undefined;
    const items = Array.from(document.querySelectorAll(".kr"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("kr-hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    items.forEach((item) => {
      if (item.getBoundingClientRect().top > window.innerHeight * 0.9) {
        item.classList.add("kr-hidden");
        observer.observe(item);
      }
    });
    return () => observer.disconnect();
  }, []);
}


// Types a line of text when it scrolls into view (or straight away with `immediate`).
// The full text is laid out invisibly underneath so nothing jumps while it types.
export function TypeOnView({ text, as: Tag = "span", className = "", immediate = false, delay = 0, speed = 34, caret = true }) {
  const ref = useRef(null);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduce ? text.length : 0);
  const [started, setStarted] = useState(reduce || immediate);

  useEffect(() => {
    if (started) return undefined;
    const node = ref.current;
    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || reduce) return undefined;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        setCount((value) => {
          if (value >= text.length) {
            clearInterval(timer);
            return value;
          }
          return value + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [started, text, delay, speed, reduce]);

  const typing = started && count < text.length;
  return (
    <Tag ref={ref} className={`tov ${className}`} aria-label={text}>
      <span className="tov-ghost" aria-hidden="true">
        {text}
      </span>
      <span className="tov-live" aria-hidden="true">
        {text.slice(0, count)}
        {caret && typing && count > 0 && <span className="tov-caret"></span>}
      </span>
    </Tag>
  );
}
